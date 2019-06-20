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
      /*
      msg = 'text'
      
      */
      console.log('this should be just hi:', data.msg);
    
      db.query(`INSERT INTO messages (msg, user, room) values ("${data.msg}", ${data.room}, ${data.user})`)
      callback();

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