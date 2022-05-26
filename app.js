const express = require("express");
const app = express();

const path = require("path");

const port = process.env.PORT || 4000;

// Utilizar la carpeta public
app.use(express.static("public"));

//rutas
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/home.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/register.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/login.html"));
});

app.post("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/home.html"));
});


// Servidor
app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
