import { format } from "date-fns";

const dateFormat = (seconds: number) => format(seconds * 1000, "dd.MM.yyyy");

export { dateFormat };
