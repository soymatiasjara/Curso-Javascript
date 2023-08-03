class Usuario {
    constructor(nombre, correo) {
        this.nombre = nombre;
        this.correo = correo;
    }

    static borrar(id_usuario) {
        console.log(`El usuario ${id_usuario} ha sido borrado.`);
    }

    static registrados = 1000;
}

const usuario = new Usuario('Matías', 'matias@gmail.com');
Usuario.borrar(1);
console.log(Usuario.registrados);