class LocalStorage {
    static get = (key) => {
        return JSON.parse(localStorage.getItem(key));
    }

    static set = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static clear = (key) => {
        window.localStorage.removeItem(key);
    }
}

export default LocalStorage;