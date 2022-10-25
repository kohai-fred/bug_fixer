import { API_URL } from "./apiUrl.js";

const URL = API_URL;

const instance = axios.create({
    baseURL: URL,
    headers: {
        "Content-Type": "application/json",
    },
});

instance.interceptors.request.use((config) => {
    const local = window.localStorage.getItem("bugfixer");
    if (local?.token) {
        config.headers.Authorization = `Bearer ${local.token}`;
    }
    return config;
});

const APIService = {
    async getPing() {
        const { data } = await instance.get("/ping");
        const { ready } = data.result;
        return ready;
    },

    async signup(name, password) {
        const { data } = await instance.get(`/signup/${name}/${password}`);
        const { result } = data;
        return result;
    },

    async login(name, password) {
        const { data } = await instance.get(`/login/${name}/${password}`);
        const { result } = data;
        console.log("🚀 ~ file: APIservice.js ~ line 36 ~ login ~ result", result);
        return result;
    },
};

export { APIService };
