var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);
    var user = {
      user: App.username
    };
    Parse.addUser(user);
    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);


    // Poll for new messages every 3 sec
    // setInterval(App.fetch, 3000);
      },

  fetch: function(callback = ()=>{}) {
    Parse.readUsers((users) => {
      Parse.readAll((data) => {
        // Don't bother to update if we have no messages
        data.forEach((message) => {
          var temp = message.user;
          message.user = users[temp - 1].user;
        })
        console.log(data);

        if (!data || !data.length) { return; }
  
        Rooms.update(data, RoomsView.render);
        Messages.update(data, MessagesView.render);
        
        callback();
      });
    })
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
