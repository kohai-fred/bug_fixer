import { setBugResumeNavBar } from "../../../components/navbar/Navbar.js";
import { getLocalStorage } from "../getLocalStorage.js";
import { sayHello } from "../sayHello.js";
import { deleguationListener } from "./listeners.js";
import { populateCardContainer } from "./populateCardContainer.js";

export function initPage(list, users) {
    const container = document.getElementById("js-card-container");

    const localStorage = getLocalStorage();
    sayHello(users[localStorage.id], localStorage);
    populateCardContainer(list, container, users);
    setBugResumeNavBar(list);
    deleguationListener(container, list);
}
