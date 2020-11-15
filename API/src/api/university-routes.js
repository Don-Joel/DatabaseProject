// importing express
const express = require("express");
//
const router = express.Router();

const University = require("../model/university-model");

//get all of the University
router.get("/get", (req, res) => {
  University.prototype
    .getAll()
    .then(university => {
      res.send(university);
    })
    .catch(err => {
      res.send(err);
    });
});

// get the university by ID
router.get("/getbyid/:id", (req, res) => {
  University.prototype
    .getById(req.params.id)
    .then(university => {
      res.send(university);
      console.log(req.params.id);
    })
    .catch(err => {
      console.log(req.params.id);
      res.send(err);
    });
});

//create the University
router.post("/create", (req, res) => {
  University.prototype
    .create(req.body)
    .then(university => {
      res.send(university);
    })
    .catch(err => {
      res.send(err);
    });
});

//update the university
router.post("/update/:id", (req, res) => {
  University.prototype
    .updateById(req.params.id, req.body)
    .then(university => {
      res.send(university);
    })
    .catch(err => {
      res.send(err);
    });
});

//delete user
router.delete("/delete/:id", (req, res) => {
  University.prototype
    .remove(req.params.id)
    .then(university => {
      res.send(university);
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
