var MessageView = {

  render: _.template(`
      <!--

      -->
      <div class="chat">
        <div
          class="user <%= Friends.isFriend(user) ? 'friend' : '' %>"
          data-user="<%- user %>">
          <%- user %>
        </div>
        <div><%- msg %></div>
      </div>
      <!--
            -->
    `)

};