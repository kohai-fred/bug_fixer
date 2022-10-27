import navigate from "../../JS/utils/navigate.js";
import { toastifyOptions } from "../../JS/utils/toastifyOptions.js";
import { APIService } from "../../services/request/APIservice.js";

class ModalNewBug extends HTMLElement {
    constructor() {
        super();
        console.log("🚀 ~ file: ModalNewBug.js ~ line 6 ~ ModalNewBug");
        this.innerHTML = `
			<div class="modal fade" id="addNewBug" tabindex="-1" aria-labelledby="addNewBugLabel" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered">
					<div class="modal-content bg-dark">
						<div class="modal-body">
							<form
								class="container-sm border border-primary rounded p-4 mx-auto needs-validation max-width-500"
							>
								<div class="mb-3">
									<label for="title" class="form-label text-light">Titre</label>
									<input type="text" class="form-control" id="title" placeholder="Titre du bug" />
								</div>
								<div class="mb-3">
									<label for="description" class="form-label text-light">Description</label>
									<textarea
										class="form-control"
										id="description"
										rows="12"
										placeholder="Votre description"
									></textarea>
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

            const data = {
                // title: inputs[0].value,
                // description: inputs[1].value,
                title: "New bug 5",
                description: "Un super bug bien chiant",
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
