import { APIService } from "../../services/request/APIservice.js";
import navigate from "../utils/navigate.js";
import { initPage } from "../utils/listing_and_mybug/initPage.js";
import { checkServer } from "../utils/checkServer.js";

checkServer();

const { bug: list, status: listStatus } = await APIService.getBugs();
const { user: users, status: userStatus } = await APIService.getAllUsers();

if (listStatus === "failure" || userStatus === "failure") navigate("/pages/login.html");

initPage(list, users);
