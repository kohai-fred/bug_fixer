export default function cardTemplate(data) {
    const card = document.createElement("div");
    card.classList.add("col");
    const options = orderSateOptions(data.state);
    const date = new Date(data.timestamp).toLocaleString(undefined, { dateStyle: "medium" });
    card.innerHTML = `
		<div class="card h-100">
			<div class="card-header">
				<h5 class="card-title">${data.title}</h5>
				<h6 class="card-subtitle mb-2 text-muted d-flex justify-content-between align-items-center text-break">
					<span>${data.userName}</span>
					<span style="font-size:0.7em">${date}</span>
				</h6>
				</div>
			<div class="card-body">
				<!-- <p class="text-muted text-end mb-1" style="font-size:0.7em" >${date}</p> -->
				<p class="card-text">${data.description}</p>
			</div>
			<div class="card-footer d-flex justify-content-between align-items-center">
				<select class="form-select form-select-sm w-50" aria-label=".form-select-sm example">
					${options}
				</select>
				<button id="bug_${data.id}" type="button" class="btn btn-outline-danger"><i class="bi bi-trash"></i></button>
			</div>
		</div>
	`;
    return card;
}

function orderSateOptions(id) {
    const optionsArray = ["Non traité", "En cours", "Traité"];
    return optionsArray
        .map((name, index) => {
            if (index === +id) {
                return `<option value=${index} selected>${name}</option>`;
            }
            return `<option value=${index} >${name}</option>`;
        })
        .toString();
}
