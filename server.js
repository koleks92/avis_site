const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const Database = require("better-sqlite3");
const session = require("express-session");
require("dotenv").config();

// Database connection
const db = new Database("database.db");
db.pragma("journal_mode = WAL");

// Serve public/static files
app.use(express.static("public"));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
      maxAge: 1000 * 60 * 60 * 24,
    },
  }),
);

// Create table on first run
db.exec(`
  CREATE TABLE IF NOT EXISTS abonnenter (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    fornavn TEXT NOT NULL,
    efternavn TEXT NOT NULL,
    telefon TEXT,
    adresse TEXT,
    postnummer TEXT,
    bynavn TEXT,
    abonnement TEXT
  )
`);

// Prepare for database insert
const insert = db.prepare(`
  INSERT INTO abonnenter
    (email, password, fornavn, efternavn, telefon, adresse, postnummer, bynavn, abonnement)
  VALUES
    (@email, @password, @fornavn, @efternavn, @telefon, @adresse, @postnummer, @bynavn, @abonnement)
`);

// Register form
app.post("/register", async (req, res) => {
  const { email, password, fornavn, efternavn } = req.body;

  if (!email || !password || !fornavn || !efternavn) {
    return res.status(400).json({ ok: false, error: "Missing fields" });
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save into database
  try {
    insert.run({
      email,
      password: hashedPassword,
      fornavn,
      efternavn,
      telefon: req.body.telefon || null,
      adresse: req.body.adresse || null,
      postnummer: req.body.postnummer || null,
      bynavn: req.body.bynavn || null,
      abonnement: req.body.abonnement_type || null,
    });

    // Redirect with name
    const name = encodeURIComponent(fornavn);
    res.redirect("/abonnement-final.html?name=" + name);
  } catch (err) {
    // Email exists error
    if (err.code === "SQLITE_CONSTRAINT_UNIQUE") {
      res.redirect("/abonnement-final.html?error=email");
    }
    // Server error
    console.error(err);
    res.redirect("/abonnement-final.html?error=server");
  }
});

// Log In form
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ ok: false, error: "Missing fields" });
  }

  try {
    const user = db
      .prepare(`SELECT id, email, password FROM abonnenter WHERE email = ?`)
      .get(email);

    // If no user with given email
    if (!user) {
      return res.status(400).json({ error: "User" });
    }

    // Check password
    const result = await bcrypt.compare(password, user.password);

    if (result) {
      req.session.regenerate((err) => {
        if (err) {
          return res.status(500).json({ error: "Session error" });
        } else {
          req.session.userId = user.id;
          return res.status(200).json({ ok: true });
        }
      });
    } else {
      return res.status(400).json({ error: "Password" });
    }
  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
});

// Me page
app.get("/me", (req, res) => {
  if (req.session.userId) {
    res.status(200).json({ status: "signed" });
  } else {
    res.status(400).json({ status: "not_signed" });
  }
});

app.listen(3000);
