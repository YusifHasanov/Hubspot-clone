const Go = {
    // ...
    to: (navigate, path) => {
        navigate(path)
    },
    forward: (navigate) => {
        navigate(1)
    },
    back: (navigate) => {
        navigate(-1)
    },
}
export default Go;