const userDao = require('./user-dao');
/*
userDao.getAllUsers((err, users) => {
  if (err) {
    console.error('Erro ao buscar usuários: ', err);
  } else {
    console.log('Lista de usuários: ', users);
  }
});


userDao.getUserById(1, (err, users) => {
  if (err) {
    console.error('Erro ao buscar usuário')
  } else {
    console.log('Lista usuário', users)
  }
})
*/

userDao.getAllUsers(function(users){
  
  console.log(users)

})





