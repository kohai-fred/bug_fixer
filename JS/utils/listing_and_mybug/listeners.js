import { onChangeBugStatus } from "./onChangeBugStatus.js";
import { removeBug } from "./removeBug.js";

export function deleguationListener(container, list) {
    container.addEventListener("click", (e) => {
        const target = e.target;
        const btnDelete = target.closest("button");
        if (target.tagName === "SELECT")
            return target.addEventListener("change", () => onChangeBugStatus(list, target), { once: true });
        if (btnDelete) return removeBug(btnDelete, list);
    });
}
