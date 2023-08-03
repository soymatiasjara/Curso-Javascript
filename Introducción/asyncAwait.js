const obtenerPosts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = ['post1', 'post2', 'post3'];
            const error = true;

            if (error) {
                reject('Hubo un error.');
            } else {
                resolve(posts);
            }
        }, 2000);
    });
};

// Para trabajar con await debes usar async.
const mostrarPosts = async() => {
    try {
        const posts = await obtenerPosts();
        console.log(posts);
        alert('Operación finalizada');
    } catch(error) {
        console.log(error);
    };
};
mostrarPosts();