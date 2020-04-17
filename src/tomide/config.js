const url = 'http://localhost:8080'
// don't know why the server is still in localhost

function config () {
    return {
        url,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        }
    }
}

export default config

