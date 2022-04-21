const express = require("express");
const cors = require("cors");

const userRoute = require("./routes/user");

const app = express();
const path = require("path");
const PORT = process.env.PORT || 8000;

const reactBuild = path.join(__dirname, "client", "build");

app.use(express.json());
app.use(express.static(reactBuild));

app.get("/api", async (req, res) => {
  res.send({ message: "Test" });
});

app.get("*", async (req, res) => {
  res.sendFile(path.join(reactBuild, "index.html"));
});

app.use("/api/user", userRoute);

app.listen(PORT, (req, res) => {
  console.log("Server on " + PORT);
});
