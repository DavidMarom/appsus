export const Storage = {
    saveToStorage,
    loadFromStorage,   
    getAxios
}

function saveToStorage(key, val) {
    var str = JSON.stringify(val);
    localStorage.setItem(key, str)
}

function loadFromStorage(key) {
    var str = localStorage.getItem(key);
    var val = JSON.parse(str)
    return val;
}

function getAxios(uri) {
    return axios.get(uri)
        .then(res => res.data)
}
