var Parse = {

  server: '127.0.0.1:3000',

  addUser: function(user, successCB, errorCb = null) {
    $.ajax({
      url: 'http://localhost:3000/classes/users',
      type: 'POST',
      data: JSON.stringify(user),
      contentType: 'application/json',
      success: successCB,
      error: errorCb || function (error) {
        console.error('chatterbox: Failed to create message', error);
      }
    });
  }, 

  create: function(message, successCB, errorCB = null) {

    $.ajax({
      url: 'http://localhost:3000/classes/messages',
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function (error) {
        console.error('chatterbox: Failed to create message', error);
      }
    });
      },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: 'http://localhost:3000/classes/messages',
      type: 'GET',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  },

  readUsers: function(successCB, errorCB = null) {
    $.ajax({
      url: 'http://localhost:3000/classes/users',
      type: 'GET',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch users', error);
      }
    });
  }

};