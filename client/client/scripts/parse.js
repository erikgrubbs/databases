var Parse = {

  server: '127.0.0.1:3000',

  create: function(message, successCB, errorCB = null) {

    $.ajax({
      url: Parse.server,
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
      // url: `${Parse.server}/classes/messages`,
      url: 'http://localhost:3000/classes/messages',
      type: 'GET',
      // contentType: 'application/json',
      // dataType: "jsonp",
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};