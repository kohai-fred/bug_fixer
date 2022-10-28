import { getDate, getHours } from "../../JS/utils/getTime.js";
import { optionsArrayData } from "../../JS/utils/optionsArrayData.js";

export default function cardTemplate(data) {
    const card = document.createElement("div");
    card.classList.add("col");
    card.setAttribute("data-cardid", `${data.id}`);
    const options = orderSateOptions(data.state);
    const date = getDate(data.timestamp);
    const hours = getHours(data.timestamp);

    card.innerHTML = `
		<div class="card h-100">
			<div class="card-header">
				<h5 class="card-title text-truncate">${data.title}</h5>
				<h6 class="card-subtitle mb-2 text-muted text-truncate d-flex justify-content-between align-items-center text-break">
					<span>${data.userName}</span>
					<!-- <span style="font-size:0.7em">${date}</span> -->
				</h6>
				</div>
			<div class="card-body">
				<p class="text-muted d-flex justify-content-between mb-1" style="font-size:0.7em" ><span>Le ${date}</span><span>à ${hours}</span></p>
				<p class="card-text overflow-scroll" style="max-height: 10em" >${data.description}</p>
			</div>
			<div class="card-footer d-flex justify-content-between align-items-center">
				<select data-bugid="${data.id}" class="form-select form-select-sm w-50" aria-label=".form-select-sm example">
					${options}
				</select>
				<button data-bugid="${data.id}" type="button" class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#deleteBug"><i class="bi bi-trash"></i></button>
			</div>
		</div>
	`;
    return card;
}

function orderSateOptions(id) {
    return optionsArrayData
        .map((name, index) => {
            if (index === +id) {
                return `<option value=${index} selected>${name}</option>`;
            }
            return `<option value=${index} >${name}</option>`;
        })
        .toString();
}
