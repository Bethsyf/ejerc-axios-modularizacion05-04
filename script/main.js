import Usuario from "./user.js";

let formulario = document.getElementById('formulario');

const usuario = new Usuario();

formulario.addEventListener('submit', e => {
    e.preventDefault();
    let nombre = document.getElementById('name').value;
    let apellido = document.getElementById('lastName').value;
    let correo = document.getElementById('email').value;
    usuario.nombre = nombre;
    usuario.apellido = apellido;
    usuario.correo = correo;

    console.log(usuario);

    usuario.crearUsuario(usuario)

})

btnCorreo.addEventListener('click', () =>{
    let correoU = document.getElementById('email').value;
    document.getElementById('email').readOnly = true;
    usuario.buscarCorreoUsuario(correoU);
    let perfil = JSON.parse(localStorage.getItem('Buscar'));
    console.log(perfil)
    const {nombre, apellido, correo, id} = perfil;
    document.getElementById('name').value = nombre;
    document.getElementById('lastName').value = apellido;
    document.getElementById('email').value = correo;
    document.getElementById('id').value = id;

})

btnEditar.addEventListener('click', () => {
    let id = document.getElementById('id').value;
    let nombre = document.getElementById('name').value;
    let apellido = document.getElementById('lastName').value;
    let correo = document.getElementById('email').value;
    usuario.nombre = nombre;
    usuario.apelldio = apellido;
    usuario.correo = correo;
    usuario.editarUsuario(usuario, id);
})

btnEliminar.addEventListener('click', () => {
    let id = document.getElementById('id').value;
    usuario.eliminarUsuario(id)
})

