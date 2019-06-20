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
    post: function (callback) {
      db.query()
      

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {

    },
    post: function () {

    }
  }
};



/*
You will have to build out the methods in server/models/index.js and 
server/controllers/index.js
*/

//models index.js