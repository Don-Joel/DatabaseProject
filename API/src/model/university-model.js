const mysqlConn = require("../database/database");

module.exports = class University {
    constructor(schoolName){
        this.schoolName = schoolName;
    }

//post a new user
  create(school) {
    return new Promise((resolve, reject) => {
      mysqlConn.query("INSERT INTO University set ?", school, (err, res) => {
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

 //read all users
 getAll() {
    return new Promise((resolve, reject) => {
      mysqlConn.query("Select * from University", (err, res) => {
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
      mysqlConn.query("Select * from University where universityID = ? ", id, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }

  updateById(id, school) {
    return new Promise((resolve, reject) => {
      mysqlConn.query(
        "UPDATE University SET schoolName= ? WHERE universityID = ?",
        [school.schoolName, id],
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
      mysqlConn.query("DELETE FROM University WHERE universityID = ?", id, (err, res) => {
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

