/**
 * * Dynamic options for Toastify
 * @param {String} txt
 * @param {String} color Background color Bootstrap v.5 == success || danger ...
 * @returns {Object}
 */
export const toastifyOptions = (txt, color) => {
    return {
        text: txt,
        duration: 3000,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
            background: "transparent",
        },
        className: `bg-${color} rounded`,
    };
};
