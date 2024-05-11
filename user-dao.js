const connection = require('./database')
//const connection = require('./datalocal')

function getAllUsers(callback) {
  connection.query('SELECT * FROM users', (error, results, fields) => {
    if (error) {
      callback(error, results)
    } else {
      callback(results)
    }
  })
     //Fecha Conexão
   // connection.end()
}

function getUserById(id, callback) {
  connection.query('SELECT * FROM users WHERE id = ?', [id], (error, results, fields) => {
    if (error) {
      callback(error, null);
    } else {
      callback(results);
    }
  })
    //Fecha Conexão
   // connection.end()
}

function addUser(user, callback) {
  connection.query('INSERT INTO users SET ?', [user], (error, results, fields) => {
    if (error) {
      callback(error, null);
    } else {
      callback(results.insertId);
    }
  })
    //Fecha Conexão
    //connection.end()
}

function updateUser(id, user, callback) {
  connection.query('UPDATE users SET ? WHERE id = ?', [user, id], (error, results, fields) => {
    if (error) {
      callback(error, null);
    } else {
      callback(results.affectedRows);
    }
  })
  //Fecha Conexão
  //connection.end()
}

function deleteUser(id, callback) {
  connection.query('DELETE FROM users WHERE id = ?', [id], (error, results, fields) => {
    if (error) {
      callback(error, null);
    } else {
      callback(results.affectedRows);
    }
  })
  //Fecha Conexão
  //connection.end()
}

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser
};