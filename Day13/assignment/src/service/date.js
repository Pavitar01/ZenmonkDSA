const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate() - 1).padStart(2, "0");
export const utcDate = `${year}-${month}-${day}`;