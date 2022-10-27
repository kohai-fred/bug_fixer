import { setBugResumeNavBar } from "../../../components/navbar/Navbar.js";
import { APIService } from "../../../services/request/APIservice.js";
import navigate from "../navigate.js";
import { optionsArrayData } from "../optionsArrayData.js";
import { toastifyOptions } from "../toastifyOptions.js";

export async function onChangeBugStatus(list, target) {
    const data = {
        state: target.value,
        bugId: target.dataset.bugid,
    };
    const indexBugInList = list.findIndex((bug) => bug.id === data.bugId);
    const { status, message } = await APIService.changeBugStatus(data);
    // console.log("🚀 ~ file: listing.js ~ line 37 ~ onChangeBugStatus ~ status", { status, message });
    if (status === "done") {
        Toastify(toastifyOptions(`Le bug est "${optionsArrayData[data.state].toLowerCase()}"`, "success")).showToast();
        list[indexBugInList].state = data.state;
        setBugResumeNavBar(list);
    } else if (!message) {
        Toastify(toastifyOptions(`Une erreur c'est produite`, "danger")).showToast();
    } else {
        navigate("/pages/login.html");
    }
    // target.removeEventListener("change", onChangeBugStatus);
}
