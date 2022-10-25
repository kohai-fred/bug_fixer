import navigate from "../../JS/utils/navigate.js";
import { toastifyOptions } from "../../JS/utils/toastifyOptions.js";
import { inputValidation } from "../../JS/validation/inputValidation.js";
import { APIService } from "../../services/request/APIservice.js";

class SectionBtnSignup extends HTMLElement {
    constructor() {
        super();
        this.page = "signup";
        this.innerHTML = `
			<section class="d-flex flex-column align-items-center">
				<button id="submit" type="submit" class="btn btn-primary my-4 w-100">Submit</button>
				<a href="./pages/login.html">Se connecter</a>
			</section>`;
    }

    connectedCallback() {
        const btnSubmit = document.getElementById("submit");
        const inputsElem = Array.from(document.querySelectorAll("input"));

        const getData = () => {
            const inputsValue = {};
            inputsElem.forEach((input) => {
                inputsValue[input.id] = inputValidation(input, inputsElem[1]);
            });
            return Object.values(inputsValue).filter((value) => !value).length ? false : inputsValue;
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            const data = getData();
            let result;
            if (!data) return Toastify(toastifyOptions("Il faut remplir le formulaire...", "danger")).showToast();
            if (this.page === "signup") {
                result = await APIService.signup(data.userName, data.password);
            } else if (this.page === "login") {
                result = await APIService.login(data.userName, data.password);
            }

            if (result.status === "failure") return Toastify(toastifyOptions(result.message, "danger")).showToast();
            localStorage.setItem("bugfixer", JSON.stringify({ id: result.id, token: result.token }));
            Toastify(toastifyOptions(`Bienvenue ${data.userName}`, "success")).showToast();
            setTimeout(() => {
                navigate("/pages/listing.html");
            }, 2000);
        };

        btnSubmit.addEventListener("click", handleSubmit);
    }
}

class SectionBtnLogin extends SectionBtnSignup {
    constructor() {
        super();
        this.page = "login";
        this.innerHTML = `
			<section class="d-flex flex-column align-items-center">
				<button id="submit" type="submit" class="btn btn-primary my-4 w-100">Submit</button>
				<a href="/bug_fixer">Créer un compte</a>
			</section>`;
    }
}

const sectionBtnSignup = customElements.define("section-btn-signup", SectionBtnSignup);
const sectionBtnLogin = customElements.define("section-btn-login", SectionBtnLogin);

export { sectionBtnSignup, sectionBtnLogin };
