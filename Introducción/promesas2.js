const obtenerPosts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = ['post1', 'post2', 'post3'];
            const error = false;

            if (error) {
                reject('Hubo un error.');
            } else {
                resolve(posts);
            }
        }, 2000);
    });
}

obtenerPosts().then((posts) => {
    console.log(posts);
}).catch((error) => {
    alert(error);
});

// const miVariable = obtenerPosts();
// console.log(miVariable);