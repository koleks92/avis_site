const express = require("express");
const app = express();

// Serve public/static files
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.post("/submit", (req, res) => {
  console.log(req.body);

  if (req.body.lenght === 0) {
    return res.status(400).json({ ok: false, error: "Missing fields" });
  }

  // TODO: save it

  res.json({ ok: true });
});

app.listen(3000);
