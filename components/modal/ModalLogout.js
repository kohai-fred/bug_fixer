import navigate from "../../JS/utils/navigate.js";
import { toastifyOptions } from "../../JS/utils/toastifyOptions.js";
import { APIService } from "../../services/request/APIservice.js";

class ModalLogout extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
			<div
					class="modal fade"
					id="modalLogout"
					tabindex="-1"
					aria-labelledby="modalLogoutLabel"
					aria-hidden="true"
				>
					<div class="modal-dialog modal-dialog-centered">
						<div class="modal-content bg-dark">
							<div class="modal-body">
								<p class="text-center text-warning fs-3">Vous nous quittez déjà ?</p>
								<div class="d-flex align-items-center justify-content-center">
									<button type="button" class="btn btn-secondary m-2" data-bs-dismiss="modal">
										Non je reste
									</button>
									<button id="modal_logout" type="button" class="btn btn-danger m-2" >
										Oui en revoir
									</button>
								</div>
							</div>
						</div>
					</div>
            </div>
		`;
    }
    connectedCallback() {
        const btnLogout = document.getElementById("modal_logout");
        btnLogout.addEventListener("click", logout);

        async function logout() {
            const { status } = await APIService.logout();
            if (status === "done") {
                window.localStorage.removeItem("bugfixer");
                navigate("/pages/login.html");
            }
            Toastify(toastifyOptions("Une erreure c'est produite", "danger")).showToast();
        }
    }
}
customElements.define("modal-logout", ModalLogout);
