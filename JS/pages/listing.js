import cardTemplate from "../../components/card/CardTemplate.js";
import { APIService } from "../../services/request/APIservice.js";
import navigate from "../utils/navigate.js";

const { bug: list, status } = await APIService.getAllList();
const { user: users } = await APIService.getAllUsers();

if (status === "failure") navigate("/pages/login.html");

const populateCardContainer = () => {
    if (!list.length) return;
    const container = document.getElementById("js-card-container");

    list.forEach((card) => {
        const copyCard = { ...card, userName: users[card.user_id] };
        container.insertAdjacentElement("beforeend", cardTemplate(copyCard));
    });
};

populateCardContainer();
