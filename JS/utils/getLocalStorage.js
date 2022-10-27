export const getLocalStorage = () => {
    try {
        const localStorage = JSON.parse(window.localStorage.getItem("bugfixer"));
        return localStorage || {};
    } catch (error) {
        return error;
    }
};
