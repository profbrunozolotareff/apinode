const express = require('express')
const app = express()
const usersDB = require('./user-dao')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/', function(req,res){
    res.send("API")
})

//Get cadastro
app.get('/users', function(req,res){
    usersDB.getAllUsers(function(users){
        res.json(users)
    })
})

app.get('/users/:id', function(req,res){
    let id = req.params.id
    usersDB.getUserById(id,function(users){
        res.json(users)
    })
})

app.get('/users/:nome/:curso', function(req,res){
    let nome = req.params.nome
    let curso = req.params.curso
    //const m = usersDB.inserir(nome,curso)
    res.json(nome,curso)
  //  res.json(m)
})

app.post('/users',function(req,res){
    let usuario = req.body
    usersDB.addUser(usuario, function(users) { 
        res.json(usuario)
    })
})

app.put('/users',function(req,res){
    let id = req.body.id
    const usuario = req.body
    usersDB.updateUser(id, usuario, function(users) { 
        res.json(usuario)
    })
})

app.delete('/users/:id', function(req,res){
    let id = req.params.id
    usersDB.deleteUser(id, function(users){
        res.json({msg:'Apagado com sucesso!'})
    })
})
    


const server = app.listen(3000, function(){
    const host = server.address().address
    const port = server.address().port
    console.log("Servidor iniciado em http://%s:%s", host, port)
})