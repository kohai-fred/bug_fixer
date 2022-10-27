class ModalDeleteBug extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
			<div class="modal fade" id="deleteBug" tabindex="-1" aria-labelledby="deleteBugLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content bg-dark">
                        <div class="modal-body">
                            <p class="text-center text-light">
                                Attention vous êtes sur le point de supprimer le bug à tout jamais !
                            </p>
                            <p class="text-center text-warning fs-3">Êtes vous sûr de vouloir faire ça ?</p>
                            <div class="d-flex align-items-center justify-content-center">
                                <button type="button" class="btn btn-secondary m-2" data-bs-dismiss="modal">
                                    Je réfléchis...
                                </button>
                                <button id="delete" type="button" class="btn btn-danger m-2" data-bs-dismiss="modal">
                                    Bien sûr !!!
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		`;
    }
}

customElements.define("modal-delete-bug", ModalDeleteBug);
