const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const Database = require("better-sqlite3");

// Database connection
const db = new Database("database.db");
db.pragma("journal_mode = WAL");

// Serve public/static files
app.use(express.static("public"));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Prepare for database insert
const insert = db.prepare(`
  INSERT INTO abonnenter
    (email, password, fornavn, efternavn, telefon, adresse, postnummer, bynavn, abonnement)
  VALUES
    (@email, @password, @fornavn, @efternavn, @telefon, @adresse, @postnummer, @bynavn, @abonnement)
`);

// Submit form
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
      abonnement: req.body.abonnement || null,
    });

    const name = encodeURIComponent(fornavn)
    res.redirect("/abonnement-final.html?name=" + name);
  } catch (err) {
    if (err.code === "SQLITE_CONSTRAINT_UNIQUE") {
      const error = encodeURIComponent("Email is already in our database")
    res.redirect("/abonnement-final.html?error=email");
    }
    console.error(err);
    res.redirect("/abonnement-final.html?error=server");
  }
});

app.listen(3000);
