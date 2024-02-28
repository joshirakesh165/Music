
let interval = 0;
const debouncer = (callback) => {
    clearTimeout(interval);
    interval = setTimeout(() => {
        callback();
    }, 1000)
}

export default debouncer;