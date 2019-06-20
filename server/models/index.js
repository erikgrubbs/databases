var db = require('../db');

module.exports = {
  messages: {
    //get all
    get: function (callback) {
      db.query('SELECT * FROM messages', (err, messages) => {
        callback(null, messages);
      });
    }, 
    // a function which produces all the messages
    post: function (data, callback) {
      db.query(`select id from users where user = "${data.user}"`, (error, userId) => {
        db.query(`INSERT INTO messages (msg, room, user) values ("${data.msg}", "${data.room}", "${userId[0].id}")`)
      });    
      callback();

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query('SELECT * from USERS', (err, users) => {
        callback(null, users)
      });
    },
    post: function (data, callback) {
      console.log(data);
      db.query(`insert into users (user) values ("${data.user}")`);
    callback();
    }
  }
};



/*
You will have to build out the methods in server/models/index.js and 
server/controllers/index.js
*/

//models index.js