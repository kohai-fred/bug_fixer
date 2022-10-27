import { getLocalStorage } from "../../JS/utils/getLocalStorage.js";
import { API_URL } from "./APIurl.js";

const URL = API_URL;
const { id, token } = getLocalStorage();

const instance = axios.create({
    baseURL: URL,
    headers: {
        "Content-Type": "text/plain",
    },
});

const APIService = {
    async getPing() {
        try {
            const { data } = await instance.get("/ping");
            const { ready } = data.result;
            return ready;
        } catch (error) {
            return { status: error.response.status, message: error.message };
        }
    },

    async signup(name, password) {
        try {
            const { data } = await instance.get(`/signup/${name}/${password}`);
            const { result } = data;
            return result;
        } catch (error) {
            return { status: error.response.status, message: error.message };
        }
    },

    async login(name, password) {
        try {
            const { data } = await instance.get(`/login/${name}/${password}`);
            const { result } = data;
            return result;
        } catch (error) {
            return { status: error.response.status, message: error.message };
        }
    },

    async logout() {
        try {
            const { data } = await instance.get(`/logout/${token}`);
            const { result } = data;
            return result;
        } catch (error) {
            return { status: error.response.status, message: error.message };
        }
    },

    async getBugs(uniqueUser = false) {
        try {
            const { data } = await instance.get(`/list/${token}/${uniqueUser ? id : "0"}`);
            const { result } = data;
            return result;
        } catch (error) {
            return { status: error.response.status, message: error.message };
        }
    },

    async getAllUsers() {
        try {
            const { data } = await instance.get(`/users/${token}`);
            const { result } = data;
            return result;
        } catch (error) {
            return { status: error.response.status, message: error.message };
        }
    },

    async postNewBug(newBug) {
        try {
            const { data } = await instance.post(`/add/${token}/${id}`, newBug);
            const { result } = data;
            return result;
        } catch (error) {
            return { status: error.response.status, message: error.message };
        }
    },

    async changeBugStatus({ bugId, state }) {
        try {
            const { data } = await instance.get(`/state/${token}/${bugId}/${state}`);
            const { result } = data;
            return result;
        } catch (error) {
            return { status: error.response.status, message: error.message };
        }
    },

    async deleteBug(bugId) {
        try {
            const { data } = await instance.get(`/delete/${token}/${bugId}`);
            const { result } = data;
            return result;
        } catch (error) {
            return { status: error.response.status, message: error.message };
        }
    },
};

export { APIService };
