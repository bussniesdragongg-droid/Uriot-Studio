const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// 📁 public (CSS, JS, images)
app.use(express.static(path.join(__dirname, "public")));

// ⚙️ EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// 🏠 strona główna
app.get("/", (req, res) => {
    res.render("index");
});

// 🔐 LOGIN — TUTAJ TO DODAJESZ 👇
app.get("/login", (req, res) => {
    res.render("login");
});

// 🚀 start serwera
app.listen(PORT, () => {
    console.log(`Server działa na http://localhost:${PORT}`);
});