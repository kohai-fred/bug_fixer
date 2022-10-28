import { cleanStr } from "../utils/cleanStr.js";
import { nameRegex, passwordRegex } from "./customRegex.js";
import { inputToggleClassValidation } from "./inputToggleClassValidation.js";

const checkIsValid = (input, value, isValid) => {
    if (isValid) {
        inputToggleClassValidation(input, isValid);
        return value;
    } else {
        inputToggleClassValidation(input, isValid);
        return false;
    }
};

/**
 * * Check rules regexp and toogle class of the input
 * @param {Html element} input
 * @param {Object} options optional
 * @returns {Input.value || false}
 */

const inputValidation = (input, options = {}) => {
    const value = cleanStr(input.value);
    switch (input.id) {
        case "userName":
            return checkIsValid(input, value, value.match(nameRegex));
        case "password":
            return checkIsValid(input, value, value.match(passwordRegex));
        case "confirmed-password":
            if (options.inputPassword && !options.inputPassword.value) {
                inputToggleClassValidation(options.inputPassword, false);
                inputToggleClassValidation(input, false);
                return false;
            }
            return checkIsValid(input, value, value === options.inputPassword.value);
        case "title-form-bug":
            return checkIsValid(input, value, options.isValid);
        case "description-form-bug":
            return checkIsValid(input, value, options.isValid);
    }
};

export { inputValidation };
