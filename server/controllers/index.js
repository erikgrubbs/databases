var models = require('../models');
// var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {
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
      models.messages.post(req.body, (err) => {
        if (err) {
          console.log('Y U NO WORK');
        }
        res.send('post success, success!')
      })  
      
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