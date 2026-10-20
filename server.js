const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({ origin: "http://localhost:5299" })); // your frontend's address and port
app.use(express.json());

app.post("/submit", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ ok: false, error: "Missing fields" });
  }

  // TODO: save it

  res.json({ ok: true });
});

app.listen(3000);
