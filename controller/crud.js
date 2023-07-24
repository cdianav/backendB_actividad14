const express = require('express')
const conexion = require('../database/db')

exports.consultar = (req,res) => {
    conexion.query('select * from persona',(error, consulta) => {
        if(error){
            console.log("error consultando la tabla persona: "+ error)
            return
        }
        //res.send(consulta)
        res.render('index',{consulta1:consulta})
    })
}
exports.save = (req,res) => {
    const nombre = req.body.nombre
    const edad = req.body.edad
    const genero = req.body.genero
    const email = req.body.email
    //console.log(req.body, nombre, edad, genero, email)
    var comando = "insert into persona (nombre,edad,genero,email) values ('"
    comando += nombre + "',"+edad+","+genero+",'"+email+"')"
    console.log(comando)
    conexion.query(comando, (error, resultado) => {
        if(error){
            console.log(error)
            return
        } else {
            res.redirect('/')
        }
    })
}
exports.consultaruno = (req,res) => {
    const id = req.params.id
    console.log(id)
    conexion.query('select * from persona where id='+id,(error, consulta) => {
        if(error){
            console.log("error consultando el id en la tabla persona: "+ error)
            return
        }
        //res.send(consulta)
        res.render('edit',{persona:consulta[0]})
    })
}
exports.actualizar = (req,res) => {
    const id = req.body.id
    const nombre = req.body.nombre
    const edad = req.body.edad
    const genero = req.body.genero
    const email = req.body.email
    //console.log(req.body, nombre, edad, genero, email)
    var comando = "update persona set nombre='"+nombre+"',edad="+edad
    comando += ",email='"+email+"',genero="+genero
    comando += " where id="+id
    console.log(comando)
    conexion.query(comando, (error, resultado) => {
        if(error){
            console.log(error)
            return
        } else {
            res.redirect('/')
        }
    })
}
exports.delete = (req,res) => {
    const id = req.params.id
    var comando = "delete from persona where id="+id
    console.log(comando)
    conexion.query(comando, (error, resultado) => {
        if(error){
            console.log(error)
            return
        } else {
            res.redirect('/')
        }
    })
}

//Apis
exports.api_consultatodos = (req,res) => {
    conexion.query('select * from persona',(error, consulta) => {
        if(error){
            console.log("error consultando la tabla persona: "+ error)
            return
        }
        res.send(consulta)
    })
}
exports.api_consultauno = (req,res) => {
    const id = req.params.id
    console.log(id)
    conexion.query('select * from persona where id='+id,(error, consulta) => {
        if(error){
            console.log("error consultando el id en la tabla persona: "+ error)
            return
        }
        res.send(consulta)
    })
}
exports.api_consultaunoid = (req,res) => {
    const id = req.query.id
    console.log(id)
    conexion.query('select * from persona where id='+id,(error, consulta) => {
        if(error){
            console.log("error consultando el id en la tabla persona: "+ error)
            return
        }
        res.send(consulta)
    })
}
exports.api_agregar = (req,res) => {
    //console.log("LLEGO AQUI ", req.body)
    const nombre = req.query.nombre || req.body.nombre
    const edad = req.query.edad || req.body.edad
    const genero = req.query.genero || req.body.genero
    const email = req.query.email || req.body.email
    //console.log(req.body, nombre, edad, genero, email)
    var comando = "insert into persona (nombre,edad,genero,email) values ('"
    comando += nombre + "',"+edad+","+genero+",'"+email+"')"
    console.log(comando)
    conexion.query(comando, (error, resultado) => {
        if(error){
            console.log(error)
            return
        } else {
            console.log(resultado)
            res.send({estado:"0k", resultado:resultado})
        }
    })
}
exports.api_actualizar = (req,res) => {
    const id = req.query.id
    const nombre = req.query.nombre
    const edad = req.query.edad
    const genero = req.query.genero
    const email = req.query.email
    //console.log(req.body, nombre, edad, genero, email)
    var comando = "update persona set nombre='"+nombre+"',edad="+edad
    comando += ",email='"+email+"',genero="+genero
    comando += " where id="+id
    console.log(comando)
    conexion.query(comando, (error, resultado) => {
        if(error){
            console.log(error)
            return
        } else {
            res.send('Registro Actualizado Correctamente')
        }
    })
}
exports.api_borrar = (req,res) => {
    const id = req.query.id || req.body.id
    //console.log("aqui " + id)
    var comando = "delete from persona where id="+id
    console.log(comando)
    conexion.query(comando, (error, resultado) => {
        if(error){
            console.log(error)
            return
        } else {
            console.log("Borrando" + resultado)
            res.send('Registro Borrado Correctamente')
        }
    })
}
exports.api_borrar_todo = (req,res) => {
    var comando = "delete from persona"
    console.log(comando)
    conexion.query(comando, (error, resultado) => {
        if(error){
            console.log(error)
            return
        } else {
            res.send('Registro Barrado Corerctamente')
        }
    })
    var comando = "INSERT INTO persona (id,nombre,edad,genero,email) VALUES"+
    "(100, 'Maria', 24, 1, 'maria@correo.com'),"+
    "(200, 'Jose', 26, 0, 'jose@correo.com');"
    console.log(comando)
    conexion.query(comando, (error, resultado) => {
        if(error){
            console.log(error)
            return
        } else {
            res.send('inicial agregado correctamente')
        }
    })
}

    //agregar nuevos
    //Crud doctores
    exports.consultarDoctores = (req,res) => {
        conexion.query('select * from doctores',(error, consulta) => {
            if(error){
                console.log("error consultando la tabla doctores: "+ error)
                return
            }
            //res.send(consulta)
            res.render('listDoctores',{consulta1:consulta})
        })
    }

    exports.savedoctor = (req,res) => {
        const nombre = req.body.nombre
        const apellidos = req.body.apellidos
        const documento = req.body.documento
        const especialidad = req.body.especialidad
        const consultorio = req.body.consultorio
        const email = req.body.email
        //console.log(req.body, nombre, edad, genero, email)
        var comando = "insert into doctores (nombre,apellidos,documento,especialidad,consultorio,email) values ('"
        comando += nombre + "','"+apellidos+"',"+documento+",'"+especialidad+"',"+consultorio+",'"+email+"')"
        console.log(comando)
        conexion.query(comando, (error, resultado) => {
            if(error){
                console.log(error)
                return
            } else {
                res.redirect('/listDoctores')
            }
        })
    }


    exports.consultardoctor = (req,res) => {
        const documento = req.params.documento
        console.log(documento)
       /* conexion.query('select * from doctores where documento='+documento,(error, consulta) => {
            if(error){
                console.log("error consultando el documento en la tabla doctores: "+ error)
                return
            }
            //res.send(consulta)
            res.render('editDoctors',{doctor:consulta[0]})
        })*/
        
    }
//exports.cargarIndex = (req, res) => {
//res.render('index')
//}

//Crud pacientes

exports.consultarPacientes = (req,res) => {
    conexion.query('select * from pacientes',(error, consulta) => {
        if(error){
            console.log("error consultando la tabla pacientes: "+ error)
            return
        }
        //res.send(consulta)
        res.render('listPacientes',{consulta1:consulta})
    })
}


exports.savepaciente = (req,res) => {
    const nombre = req.body.nombre
    const apellidos = req.body.apellidos
    const documento = req.body.documento
    const edad = req.body.edad
    const telefono = req.body.telefono
    //console.log(req.body, nombre, edad, genero, email)

   /*let buscarDoc = "SELET * FROM pacientes WHERE documento ="+documento+" " ;

    conexion.query(buscarDoc,function(error,row){
        if(error){
            throw error;
        }else{
            if(row.length>0){
            alert("el usuario ya existe")
            }
        }
        });*/



    var comando = "insert into pacientes (nombre,apellidos,documento,edad,telefono) values ('"
    comando += nombre + "','"+apellidos+"',"+documento+","+edad+","+telefono+")"
    console.log(comando)
    conexion.query(comando, (error, resultado) => {
        if(error){
            console.log(error)
            return
        } else {
            res.redirect('/listPacientes')
        }
    })
}
