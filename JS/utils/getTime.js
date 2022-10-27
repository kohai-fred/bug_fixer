function getHours(timestamp) {
    const hourOptions = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    };
    return new Intl.DateTimeFormat("fr-FR", hourOptions).format(new Date(timestamp * 1000));
}
function getDate(timestamp) {
    return new Date(timestamp * 1000).toLocaleString(undefined, { dateStyle: "medium" });
}
export { getDate, getHours };
