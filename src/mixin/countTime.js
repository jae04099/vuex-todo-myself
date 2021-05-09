export default () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const time = now.getTime();
    const dateInfo = {
        year,
        month,
        date,
        time
    }
    return dateInfo
}