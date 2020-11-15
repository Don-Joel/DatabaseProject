const mysqlConn = require("../database/database");

module.exports = class Address {
    constructor(street, city, state, zipCode) {
      this.street = street;
      this.city = city;
      this.state = state;
      this.zipCode = zipCode;
    }

//post a new address
create(address) {
    return new Promise((resolve, reject) => {
      mysqlConn.query("INSERT INTO Address set ?", address, (err, res) => {
        if (err) {
          console.log("error: ", err);
          reject(err);
        } else {
          console.log(res);
          resolve(res);
        }
      });
    });
  }

 //read all address
 getAll() {
    return new Promise((resolve, reject) => {
      mysqlConn.query("Select * from Address", (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }

  //Read by ID
  getById(id) {
    return new Promise((reject, resolve) => {
      mysqlConn.query("Select * from Address where addressID = ?", id, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }

  updateById(id, address) {
    return new Promise((resolve, reject) => {
      mysqlConn.query(
        "UPDATE Address SET street = ?, city = ?, state = ?, zipCode = ? WHERE addressID = ?",
        [address.street, address.city, address.state, address.zipCode, id],
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
  remove(id) {
    return new Promise((reject, resolve) => {
      mysqlConn.query("DELETE FROM Address WHERE addressID = ?", id, (err, res) => {
        if (err) {
          console.log("error: ", err);
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }
  
};