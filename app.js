// npm init --yes 

// npm install express ejs mysql dotenv
// npm install -g nodemon  //instalamos de forma global 
// npm i -D jest supertest

const express = require('express')
const server = express()

server.set("view engine", "ejs")

const PORT = process.env.PORT || 8081
const conexion = require('./database/db')
const crud = require('./controller/crud')

server.use(express.urlencoded({extended:false}))
server.use(express.json())
server.use(express.static('./database'))    //modelo
server.use(express.static('./views'))       //vista
server.use(express.static('./controller'))  //controlador

//Inicio Rutas
//server.get('/', crud.consultar)
server.get('/home', (req,res) =>{
    res.render('home')
})
//Rutas doctores
server.get('/listDoctores', crud.consultarDoctores)
server.set('view engine', 'ejs')

server.get('/createDoctors', (req,res) =>{
    res.render('createDoctors')
})
server.post('/salvardoctor',crud.savedoctor)
server.get('/editDoctors/:documento', crud.consultardoctor)

//Rutas pacientes
server.get('/listPacientes', crud.consultarPacientes)
server.set('view engine', 'ejs')

server.get('/createPacientes', (req,res) =>{
    res.render('createPacientes')
})
server.post('/salvarpaciente',crud.savepaciente)

//Rutas cita

server.get('/createCita', (req,res) =>{
    res.render('createCita')
})


server.get('/crear', (req,res) =>{
    res.render('create')
})

server.post('/salvar',crud.save)
server.get('/editar/:id', crud.consultaruno)

server.post('/actualizar',crud.actualizar)
server.get('/borrar/:id',crud.delete)

//Rutas Api
server.get('/api/personas', crud.api_consultatodos)
server.get('/api/persona/:id', crud.api_consultauno)
server.get('/api/personaid', crud.api_consultaunoid)
server.post('/api/agregar/',crud.api_agregar)
server.put('/api/actualizar/', crud.api_actualizar)
server.get('/api/actualizar/', crud.api_actualizar) //no es correcto, solo por probar
server.delete('/api/borrar/:id', crud.api_borrar)
//fin Rutas

let serverlisten = server.listen(PORT, () => {
    console.log("servidor funcionando en http://localhost:"+PORT)
})

module.exports = {server, serverlisten}