const getItem = (key) => {
    return localStorage.getItem(key)
}

const removeItem = (key) => {
    localStorage.removeItem(key)
}

const setItem = (key, value) => {
    if(typeof value != 'string')
    value = JSON.stringify(value)
    localStorage.setItem(key, value)
}

export default { getItem, setItem ,removeItem }