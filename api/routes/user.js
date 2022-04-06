const express = require("express");
const db = require("../config/db");
const router = express.Router();
const date = require("date-and-time");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const crypto = require("crypto");

const saltRounds = 10;
router.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const now = new Date();
  const value = date.format(now, "YYYY.MM.DD HH:mm:ss");
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }
    db.query(
      "INSERT INTO user_data (name, password, email, register_time) VALUES (?, ?, 'asdad', ?)",
      [username, hash, value],
      (err, result) => {
        console.log(err);
      }
    );
  });
});

router.use(cookieParser());
router.use(bodyParser.urlencoded({ extended: true }));

router.use(
  session({
    key: "userID",
    secret: "test",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

router.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

router.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM user_data WHERE name = ?",
    username,
    (err, result) => {
      if (err) {
        res.send(err);
      }
      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (err, response) => {
          if (response) {
            req.session.user = result;
            res.send({ loggedIn: true, data: result[0] });
          } else {
            res.send({ loggedIn: false, message: "Wrong username/password" });
          }
        });
      } else {
        res.send({ loggedIn: false, message: "User doesn't exist" });
      }
    }
  );
});

router.post("/play", (req, res) => {
  if (req.session.user) {
    res.send({ play: true, user: req.session.user });
  } else {
    res.send({ play: false });
  }
  const x = crypto.randomInt(10, 30);
  const y = crypto.randomInt(10, 30);
  console.log(x + " " + y);
});

module.exports = router;
