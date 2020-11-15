const mysqlConn = require("../database/database");

const roles = {
  ADMIN: "admin",
  PROVIDER: "provider",
  USER: "user"
};

module.exports = class User {
  constructor(firstName, lastName, email, password, addressID) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.addressID = addressID;
  }

  //post a new user
  create(newUser) {
    return new Promise((resolve, reject) => {
      mysqlConn.query("INSERT INTO User set ?", newUser, (err, res) => {
        if (err) {
          console.log("error: ", err);
          reject(err);
        } else {
          console.log(res);
          console.log(newUser);
          resolve(res);
        }
      });
    });
  }

  // setImageUrl(userId, url) {
  //   return new Promise((resolve, reject) => {
  //     User.prototype.updateImage(userId, url, (err, res) => {
  //       if (err) {
  //         reject(err);
  //       }
  //       resolve(res);
  //     });
  //   });
  // }

  // updateImage(userId, imgUrl) {
  //   return new Promise((resolve, reject) => {});
  // }

  updateById(userId, user) {
    return new Promise((resolve, reject) => {
      mysqlConn.query(
        "UPDATE User SET firstName = ?, lastName = ?, email = ?, password = ?, addressID = ? WHERE userID = ?",
        [
          user.firstName,
          user.lastName,
          user.email,
          user.password,
          user.addressID,
          userId
        ],
        (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        }
      );
    });
  }

  //delete
  remove(userId) {
    return new Promise((reject, resolve) => {
      mysqlConn.query("DELETE FROM User WHERE userID = ?", userId, (err, res) => {
        if (err) {
          console.log("error: ", err);
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }

  //Read by ID
  getById(userId) {
    return new Promise((reject, resolve) => {
      mysqlConn.query(
        "Select * from User where userID = ? ",
        userId,
        (err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res);
          }
        }
      );
    });
  }

  //read all users
  getAll() {
    return new Promise((resolve, reject) => {
      mysqlConn.query("Select * from User", (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }
};
