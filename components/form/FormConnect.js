import { tooltipBootstrapInit } from "../../JS/utils/tooltipBootstrapInit.js";
import { sectionBtnLogin, sectionBtnSignup } from "./BtnConnect.js";

class FormConnect extends HTMLElement {
    static get observedAttributes() {
        return ["page"];
    }
    constructor() {
        super();
        this.page = this.getAttribute("page");
        this.innerHTML = `
        <form
        class="container-sm border border-primary rounded p-4 mx-auto needs-validation max-width-500"
        novalidate
        >
            <div class="mb-3">
                <label for="userName" class="form-label">Pseudo</label>
                <input
                    type="name"
                    class="form-control"
                    id="userName"
                    aria-describedby="emailHelp"
                    required
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Votre pseudo doit comporter au moins 5 lettres."
                />
                <div class="invalid-feedback fw-lighter" style="font-size: '8px'">
                    Votre pseudo doit comporter au moins 5 lettres.
                </div>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Mot de passe</label>
                <input
                    type="password"
                    class="form-control"
                    id="password"
                    required
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-html="true"
                    data-bs-title="<p>Le mot de passe doit contenir au moins:</p>
                    <ul>
                        <li>8 charactères</li>
                        <li>Une Minuscule</li>
                        <li>Une majuscule</li>
                        <li>Un chiffre</li>
                        <li>!@#$%^&*</li>
                    </ul>"
                />
                <div class="invalid-feedback fw-lighter" style="font-size: '8px'">
                    Le mot de passe doit respecter les exigences de complexité.
                </div>
            </div>

            <div id="slot"></div>

        </form>
        `;
    }

    connectedCallback() {
        tooltipBootstrapInit();
        const slot = document.getElementById("slot");
        switch (this.page) {
            case "login":
                slot.innerHTML = "<section-btn-login></section-btn-login>";
                break;
            case "signup":
                slot.innerHTML = `
                    <div class="mb-3">
                        <label for="confirmed-password" class="form-label">Confirmez le mot de passe</label>
                        <input type="password" class="form-control" id="confirmed-password" required />
                        <div class="invalid-feedback fw-lighter" style="font-size: '8px'">
                            Le mot de passe ne correspond pas.
                        </div>
                    </div>
                    <section-btn-signup></section-btn-signup>
            `;
                break;
        }
    }
}
customElements.define("form-connect", FormConnect);
