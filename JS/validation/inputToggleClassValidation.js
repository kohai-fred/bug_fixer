/**
 * @param {html element} input
 * @param {Boolean} isValid
 */
export const inputToggleClassValidation = (input, isValid) => {
    if (isValid) {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
    }
};
