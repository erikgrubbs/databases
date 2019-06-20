var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


//the connection code goes here
dbConnection = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'chat'
});
dbConnection.connect((err) => {
  if (err) {
    console.log('connection failed', err);
  }
  console.log('database online!!!!!!!')
})
module.exports = dbConnection;
//db