const express = require("express");

const router = express.Router();

const authService = require("../services/auth-user-service");
const User = require("../model/user-model");
const {
  generateSalt,
  hash,
  compare
} = require('../services/hashing-service');
// sending login information to database, so post method is used
router.post("/login", (req, res) => {
  let user = new User("test","test",req.body.email, hash(req.body.password,generateSalt(10)),"test");
  authService.prototype
    .login(user)
    .then(users => {
      console.log("logging in");
      console.log(users);
      res.send(users);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

// sending register information to database, so post method is used
router.post("/register", (req, res) => {
  authService.prototype
    .register(req.body)
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

module.exports = router;
