import cardTemplate from "../../../components/card/CardTemplate.js";

/**
 * @param {Array} list array of bug
 * @param {HTMLElement} container
 * @param {Array} users array of String
 */
export const populateCardContainer = (list, container, users) => {
    if (!list.length) return;
    list.forEach((card) => {
        const copyCard = { ...card, userName: users[card.user_id] };
        container.insertAdjacentElement("beforeend", cardTemplate(copyCard));
    });
};
