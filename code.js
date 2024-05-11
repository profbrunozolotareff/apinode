const mysql = require("mysql")

const connection = mysql.createConnection({
    host: "db4free.net",
    user: "fatecd",
    password: "c29dc661",
    database: "fatec_diadema"
})

connection.connect((err) => {
    if(err){
        console.log('Erro de conexão')        
    } else {
        console.log('Conectado!')
    }   
})
/*
//SELECT
let sql = 'select * from cursos where id = ?'
let id = 2

connection.query(sql, id, (err,rows) => {
    if(err) throw err
        console.log('Dados da tabela', rows)

})

let sql2 = 'select * from users where id = ?'
let id2 = 3

connection.query(sql2, id2, (err,rows) => {
    if(err) throw err
        console.log('Dados da tabela', rows)
         
})


//INSERT

let sql3 = 'insert into users set ?'
var cursos1 = {nome: "Mario", curso: "LG"}

connection.query(sql3, cursos1, (err,rows) => {
    if(err) throw err
        console.log('Dados salvo na tabela', rows)
         
})

let sql4 = 'insert into users set ?'

let n = 'Nadia'
let c = 'nu'

let cursos2 = {nome: n, curso: c}

connection.query(sql4, cursos2, (err,rows) => {
    if(err) throw err
        console.log('Dados salvo na tabela2', rows)
         
})


//UPDATE
let sql4 = 'UPDATE users set nome = ? where id = ?'

let n = 'Nadia2'
let id4 = 10

let cursos3 = {id: "10", nome:"ana", curso:"bd"}

let id = cursos3.id


connection.query(sql4, [cursos3, id], (err,rows) => {
    if(err) throw err
        console.log('Dados salvo na tabela3', rows)
         
})
*/

//DELETE
let sql4 = 'DELETE FROM users where id = ?'

let id5 = 6

connection.query(sql4, id5, (err,rows) => {
    if(err) throw err
        console.log('Dados apagado na tabela3', rows)
         
})

connection.end()

