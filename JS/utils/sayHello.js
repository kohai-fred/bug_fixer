import { toastifyOptions } from "./toastifyOptions.js";

/**
 * * Show a Toast with name at first conection
 * @param {Sting} name
 * @param {Object} localStorage
 */
export function sayHello(name, localStorage) {
    if (localStorage.first_connect) {
        Toastify(toastifyOptions(`Hello ${name}`, "success")).showToast();
        window.localStorage.setItem("bugfixer", JSON.stringify({ ...localStorage, first_connect: false }));
    }
}
