// setTimeout(function(){
//     console.log("Hola mundo!");   
// },1000);

const getUsuarioByID = (id,callback) => {
    const usuario = {
        id, // id: id
        nombre: "Juan esteban",
    }

    setTimeout(() => {
        callback(usuario);
    },1500);
}

getUsuarioByID(10,(usuario) => {
    console.log(usuario);
});