var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

    MessagesView.$chats.on('click', '.username', MessagesView.handleClick);
      },

  render: function() {

    MessagesView.$chats.html('');
    Messages
      .items()
      .filter(message => Rooms.isSelected(message.room))
      .each(message => MessagesView.renderMessage(message));
  },

  renderMessage: function(message) {
    var $message = MessageView.render(message);
    MessagesView.$chats.prepend($message);
  },

  handleClick: function(event) {
    // Get username from data attribute
    var user = $(event.target).data('user');
    if (user === undefined) { return; }

    Friends.toggleStatus(username, MessagesView.render);
      }

};