import { APIService } from "../../services/request/APIservice.js";
import navigate from "./navigate.js";

export const checkServer = async () => {
    const isReady = await APIService.getPing();
    if (!isReady) navigate("/pages/error500.html");
};
