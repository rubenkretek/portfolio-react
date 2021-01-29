export const pageAnimation = {
    hidden: {
        opacity: 0,
        x: 600,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: .2,
        }
    },
    exit: {
        opacity: 0,
        x: -600,
        transition: {
            duration: .2,
        }
    }
}