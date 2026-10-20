const express = require("express");
const app = express();

// Serve public/static files
app.use(express.static("public"));

app.use(express.json());

app.post("/submit", (req, res) => {
  const { fornavn, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ ok: false, error: "Missing fields" });
  }

  // TODO: save it

  res.json({ ok: true });
});

app.listen(3000);
