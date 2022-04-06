export default class Usuario{

    url = 'https://api-ejercicio-axios.herokuapp.com/usuarios/';

    constructor(nombre, apellido, correo){
        this.nombre = nombre,
        this.apellido = apellido,
        this.correo = correo
    }

    crearUsuario(objetoUsuario){
        axios.post(this.url, objetoUsuario)
        .then(data => console.log(data))
        .catch(console.warn('error de usuario'))
    }

    buscarCorreoUsuario(email){
        return axios.get(this.url)
        .then(({data}) => {
            localStorage.setItem('Buscar' , JSON.stringify(data.find(user => user.correo ===email)))
        })
    }

    editarUsuario(datosModificados, id){
        axios.put(this.url+id, datosModificados)
        .then(data => console.log(data))
        .catch(console.warn)
    }

    eliminarUsuario(id){
        axios.put(this.url+id)
        .then(data => console.log(data))
        .catch(console.warn)
    }
}