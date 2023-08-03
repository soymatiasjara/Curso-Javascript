class Usuario {
    constructor(user, password) {
        this.user = user;
        this.password = password;
    }

    obtenerPosts() {
        const posts = ['post1', 'post2'];
        return posts;
    }
};

// Herencia
class Moderador extends Usuario {
    constructor(user, password, permisos) {
        super(user, password);
        this.permisos = permisos;
    }

    borrarPost(id) {
        if (this.permisos.includes ('borrar')) {
            console.log(`El post con el ${id} ha sido borrado`);
        } else {
            console.log('No tienes los permisos para borrar un post.');
        }
    }
};

const user1 = new Usuario('gonzalo29', '1234');
console.log(user1.obtenerPosts());

const userM = new Moderador('mod', '123', ['borrar', 'editar']);
console.log(userM.obtenerPosts());
console.log(userM.permisos);
console.log(userM.borrarPost(4));

