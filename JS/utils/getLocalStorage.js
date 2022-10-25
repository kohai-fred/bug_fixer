export const getLocalStorage = () => {
    const { id, token } = JSON.parse(window.localStorage.getItem("bugfixer"));
    return { id, token };
};
