import navigate from "../../JS/utils/navigate.js";
import { optionsArrayData } from "../../JS/utils/optionsArrayData.js";
import { toastifyOptions } from "../../JS/utils/toastifyOptions.js";
import { APIService } from "../../services/request/APIservice.js";

class Navbar extends HTMLElement {
    static get observedAttributes() {
        return ["page"];
    }

    constructor() {
        super();
        this.page = this.getAttribute("page");
        this.btn = "Ajouter";

        this.innerHTML = `
			<nav class="navbar navbar-expand-md sticky-top shadow-lg bg-dark bg-gradient">
				<div class="container-fluid">
					<a class="navbar-brand" href="/bug_fixer/pages/listing.html"><i class="bi bi-bug-fill text-light"></i></a>
					<div class="d-flex">
						<p id="resume-desktop" class="text-muted text-center mb-0 d-none d-md-inline" style="font-size: 0.7em"></p>
					</div>
					<button
						class="navbar-toggler bg-light"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="d-flex collapse navbar-collapse flex-grow-0">
						<div class="collapse navbar-collapse justify-content-end flex-grow-0" id="navbarNavAltMarkup">
							<div class="navbar-nav align-items-end ">
								<p id="resume" class="nav-link text-light d-flex align-items-center mb-0 mt-4 d-md-none" style="font-size: 0.7em"></p>
								<a class="nav-link d-flex align-items-center text-light" data-page="listing"  href="./listing.html">
									Liste complète
								</a>
								<a class="nav-link d-flex align-items-center text-light" data-page="mybug" href="./mybug.html">À traiter</a>
								<a class="nav-link d-flex align-items-center text-light" style="cursor: pointer" data-bs-toggle="modal" data-bs-target="#addNewBug" >Ajouter un bug</a>
								<a class="nav-link d-flex align-items-center text-light" data-bs-toggle="modal" data-bs-target="#modalLogout" style="cursor: pointer"><i class="bi bi-power text-danger"></i></a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		`;
    }
    connectedCallback() {
        activeLink(this.page);
    }
}
customElements.define("header-navbar", Navbar);

function activeLink(page) {
    const link = Array.from(document.querySelectorAll("a[data-page]")).filter((elem) => elem.dataset.page === page);
    link[0].classList.add("active");
}

/**
 * * Insert in navbar a resume of bugs status
 * @param {Array} list list of bug
 */
export function setBugResumeNavBar(list) {
    const resume = Object.entries(defineStateNameAndCountBug(list));
    const resumeElem = document.getElementById("resume");
    const resumeDesktopElem = document.getElementById("resume-desktop");
    resumeElem.innerText = "";
    resumeDesktopElem.innerText = "";
    resume.forEach((bug, i) => {
        const span = `<span>${resume[i][1]} ${resume[i][0]}${i < resume.length - 1 ? ", " : " "} </span>`;
        resumeElem.insertAdjacentHTML("beforeend", span);
        resumeDesktopElem.insertAdjacentHTML("beforeend", span);
    });
}
function defineStateNameAndCountBug(list) {
    return list.reduce((acc, bug) => {
        const state = optionsArrayData[bug.state];
        acc[state] ? (acc[state] += 1) : (acc[state] = 1);
        return acc;
    }, {});
}
