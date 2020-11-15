// importing express
const express = require("express");
//
const router = express.Router();

const Address = require("../model/address-model");

//get all of the University
router.get("/get", (req, res) => {
    Address.prototype
      .getAll()
      .then(address => {
        res.send(address);
      })
      .catch(err => {
        res.send(err);
      });
  });
  
  // get the university by ID
  router.get("/getbyid/:id", (req, res) => {
    Address.prototype
      .getById(req.params.id)
      .then(address => {
        res.send(address);
        console.log(req.params.id);
      })
      .catch(err => {
        console.log(req.params.id);
        res.send(err);
      });
  });
  
  //create the University
  router.post("/create", (req, res) => {
    Address.prototype
      .create(req.body)
      .then(address => {
        res.send(address);
      })
      .catch(err => {
        res.send(err);
      });
  });
  
  //update the university
  router.post("/update/:id", (req, res) => {
    Address.prototype
      .updateById(req.params.id, req.body)
      .then(address => {
        res.send(address);
      })
      .catch(err => {
        res.send(err);
      });
  });
  
  //delete user
  router.delete("/delete/:id", (req, res) => {
    Address.prototype
      .remove(req.params.id)
      .then(address => {
        res.send(address);
      })
      .catch(err => {
        res.send(err);
      });
  });
  
  // MIGHT NEED TO USE THIS FOR DISPLAYING IMAGES ON LISTINGS ************
  
  // router.post("/image/:userId", (req, res) => {
  //   const userId = req.params.userId;
  //   const url = "http://localhost:3000/uploads/" + req.file.filename;
  
  //   User.prototype
  //     .setImageUrl(userId, url)
  //     .then(user => {
  //       res.json({ user });
  //     })
  //     .catch(err => {
  //       res.status(400).json({ msg: err });
  //     });
  // });
  
  module.exports = router;
  