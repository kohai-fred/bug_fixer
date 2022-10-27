import { setBugResumeNavBar } from "../../../components/navbar/Navbar.js";
import { APIService } from "../../../services/request/APIservice.js";
import { toastifyOptions } from "../toastifyOptions.js";

export const removeBug = (elem, list) => {
    const bugId = elem.dataset.bugid;
    const btnModalDelete = document.getElementById("delete");
    const card = document.querySelector(`[data-cardid="${bugId}"]`);
    const indexBugInList = list.findIndex((bug) => bug.id === bugId);

    btnModalDelete.addEventListener(
        "click",
        async () => {
            const { status, message } = await APIService.deleteBug(elem.dataset.bugid);
            if (status === "done") {
                success();
            } else if (card && !message) {
                success();
            } else {
                Toastify(toastifyOptions(`Une erreur c'est produite : "${message}"`, "danger")).showToast();
                navigate("/pages/login.html");
            }
        },
        { once: true }
    );
    function success() {
        Toastify(toastifyOptions(`Le bug est maintenant perdue dans les limbes...`, "success")).showToast();
        list.splice(indexBugInList, 1);
        card.remove();
        setBugResumeNavBar(list);
    }
};
