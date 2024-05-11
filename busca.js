const connection = require('./database')

let sql2 = 'select * from users where id = ?'
let id2 = 3

connection.query(sql2, id2, (err,rows) => {
    if(err) throw err
        console.log('Dados da tabela', rows)
         
})