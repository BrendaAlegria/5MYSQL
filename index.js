var express=require("express");
var usuariosRutas=require("./rutas/usuarios");

var app=express();
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use("/",usuariosRutas);


var port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Servidor en http://localhost:${port}`);
});