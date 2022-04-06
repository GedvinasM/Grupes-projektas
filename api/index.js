const express = require("express");
const cors = require("cors");

const userRoute = require("./routes/user");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use("/user", userRoute);

app.listen(3001, (req, res) => {
  console.log("Server on");
});
