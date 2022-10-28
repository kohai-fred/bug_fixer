import { cleanStr } from "../../JS/utils/cleanStr.js";
import navigate from "../../JS/utils/navigate.js";
import { toastifyOptions } from "../../JS/utils/toastifyOptions.js";
import { inputValidation } from "../../JS/validation/inputValidation.js";
import { APIService } from "../../services/request/APIservice.js";

class ModalNewBug extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
			<div class="modal fade" id="addNewBug" tabindex="-1" aria-labelledby="addNewBugLabel" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content bg-dark">
						<div class="modal-body">
							<h2 class="text-light">Enregistrer un nouveau bug</h2>
							<form
								class="container-sm border border-primary rounded p-4 mx-auto needs-validation max-width-500"
							>
								<div class="mb-3">
									<label for="title" class="form-label text-light">Titre du bug</label>
									<input
										type="text"
										class="form-control"
										id="title-form-bug"
										placeholder="Max 50 caractères"
										required
										/>
								</div>
								<div class="invalid-feedback fw-lighter" style="font-size: '8px'">
									Vous avez dépassé le nombre de caractères autorisé.
								</div>
								<div class="mb-3">
									<label for="description" class="form-label text-light">Description</label>
									<textarea
										class="form-control"
										id="description-form-bug"
										rows="12"
										placeholder="Votre description"
										required
									></textarea>
								</div>
								<div class="invalid-feedback fw-lighter" style="font-size: '8px'">
									La description ne peut être vide.
								</div>
								<button id="js-btn" type="submit" class="btn bg-primary text-light">Sauvegarder</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		`;
    }

    connectedCallback() {
        const btn = document.getElementById("js-btn");
        async function addNewBug(e) {
            e.preventDefault();

            const inputs = Array.from(document.querySelectorAll("form label + *"));
            const title = cleanStr(inputs[0].value);
            console.log("🚀 ~ file: ModalNewBug.js ~ line 59 ~ ModalNewBug ~ addNewBug ~ title", title);
            const description = cleanStr(inputs[1].value);

            const isDataValid = () => {
                const titleRule = inputValidation(inputs[0], { isValid: title.length < 50 && title.length >= 5 });
                const descriptionRule = inputValidation(inputs[1], { isValid: description.length > 5 });
                if (!titleRule || !descriptionRule) return false;
                return true;
            };
            if (!isDataValid())
                return Toastify(toastifyOptions("Le formulaire n'est pas correct", "danger")).showToast();

            const data = {
                title,
                description,
            };

            const { status } = await APIService.postNewBug(data);
            if (status !== "done") {
                Toastify(toastifyOptions(`Une erreur c'est produite.`, "danger")).showToast();
                return;
            }
            window.location.reload();
        }

        btn.addEventListener("click", addNewBug);
    }
}

customElements.define("modal-new-bug", ModalNewBug);
