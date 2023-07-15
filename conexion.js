var Sequelize = require("sequelize");
var usuarioModelo=require("./modelos/usuarios")
require("dotenv").config();

var db=process.env.DB_MYSQ ;
var usuario=process.env.USER_MYSQL;
var password=process.env.PASSWORD_MYSQL;
var host=process.env.HOST_MYSAL ;
var port=process.env.PORT_MYSQL;

var conexion=new Sequelize(db,usuario,password,{
    host:host,
    port:port,
    dialect:'mysql',
    dialectOptions:{
        ssl:{
            rejectUnauthorized:false && {
                require:true
            }
        }
    },
    define:{
        timestamps:false
    }
});

var Usuario=usuarioModelo(conexion);

//sale de la aplicacion y se conecta a otro programa
conexion.sync({foce:false})
.then(()=>{
    console.log("Conectado a MYSQL con planetScale");
})
.catch((err)=>{
    console.log("Error al conectarse con MYSQL"+err);
    console.log("Intentar una conexcion local");
    db=process.env.DB_LOCAL;
    var conexion=new Sequelize(db,usuario,password,{
        host:host,
        port:port,
        dialect:'mysql'
    });
});

module.exports={
    Usuario:Usuario
}