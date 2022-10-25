import { APIService } from "../../services/request/APIservice.js";
import navigate from "../utils/navigate.js";
import { toastifyOptions } from "../utils/toastifyOptions.js";

const { bug: list, status } = await APIService.getAllList();
console.log("🚀 ~ file: tracker.js ~ line 4 ~ list", list, status);
if (status === "failure") {
    Toastify(toastifyOptions("Accès refusé !", "danger")).showToast();
    setTimeout(() => {
        navigate("/pages/login.html");
    }, 2000);
}
