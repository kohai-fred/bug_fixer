const nameRegex = new RegExp("^[a-zA-Z](?=.{4,})");
const passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");

export { nameRegex, passwordRegex };
