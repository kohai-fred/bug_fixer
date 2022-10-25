import { nameRegex, passwordRegex } from "./customRegex.js";
import { inputToggleClassValidation } from "./inputToggleClassValidation.js";

const checkIsValid = (input, value, regexValidation) => {
    if (regexValidation) {
        inputToggleClassValidation(input, regexValidation);
        return value;
    } else {
        inputToggleClassValidation(input, regexValidation);
        return false;
    }
};

/**
 * * Check rules regexp and toogle class of the input
 * @param {Html element} input
 * @param {Html element} inputPassword optional
 * @returns {Input.value || false}
 */
const inputValidation = (input, inputPassword = null) => {
    const value = input.value;
    switch (input.id) {
        case "userName":
            return checkIsValid(input, value, value.match(nameRegex));
        case "password":
            return checkIsValid(input, value, value.match(passwordRegex));
        case "confirmed-password":
            if (inputPassword && !inputPassword.value) {
                inputToggleClassValidation(inputPassword, false);
                inputToggleClassValidation(input, false);
                return false;
            }
            return checkIsValid(input, value, value === inputPassword.value);
    }
};

export { inputValidation };
