var models = require('../models');
// var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {
      //if /messages
      //req.query or params => query stuff
      //if get all then nothing in req.query
      console.log('hello')
      models.messages.get( (err, data) => {
        if (err) {
          console.log('hit error');
        }
        res.send(data);
      });
    
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      //req.body

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

    },
    post: function (req, res) {

    }
  }
};



//controllers index.js