export const fadeIn = {
    hidden:{
        opacity:0,
        y:4
    },
    show:{
        opacity:1,
        y:0,
        transition:{
            duration:0.8,
            ease:"easeIn"
        }
    }
}

export const fadeOut = {
    hidden:{
        opacity:0,
    },
    show:{
        opacity:1,
        transition:{
            duration:0.8,
        }
    }
}