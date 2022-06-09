const loginUser = (email, passaword, onSuccess, onError) => {
    setTimeout(() => {
        const error = false

        if (error) {
            return onError(new Error('error in login'))
        }
        console.log('user logget!')
        onSuccess({
            email
        })
    }, 1500)
}

const getUserVideos = (email, callback) => {
    setTimeout(() => {
        callback(['video1', 'video2', 'video3'])
    }, 2000)
}

const getVideoDetails = (video, callback) => {
    setTimeout(() => {
        callback({
            title: 'video title'
        })
    }, 2500)
}

const user = loginUser('danilovicentin@gmail.com', '123456', (user) => {
    getUserVideos(user.email, (videos) => {
        console.log({
            videos
        })
        getVideoDetails(videos[0], (getVideoDetails) => {
            console.log({
                VideoDetails
            })
        })
    })
    console.log({
        user
    })
}, (error) => console.log({
    error
}))

//console.log({ user })



/* Outro exemplo----------------
const imagens = (img) => {
    const error = false
    
    setTimeout(() => {
        if (img == 1) {
        console.log('Mostrar imagens 1')
    }
    if (img == 2) {
        console.log('Mostrar imagen 2')
    }
    }, 2500);
}

const entradaUsuário = (email, senha, img) => {
    this.email = email;
    this.senha = senha;
    this.img = img;
    console.log(`Formação do email ${email}.gmail.com e senha ${senha}`);
    imagens(img);
};

entradaUsuário('Danilovicentin', '123', 2)

*/