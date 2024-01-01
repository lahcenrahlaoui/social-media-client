import {
    differenceInDays,
    differenceInHours,
    differenceInMinutes,
    format,
    parseISO,
} from "date-fns";


export const formateDate = (date) => {
    let time = differenceInMinutes(new Date(), new Date(date));
    let unit = "m";
    if (time > 59) {
        time = differenceInHours(new Date(), new Date(date));
        unit = "h";
        if (time > 23) {
            time = differenceInDays(new Date(), new Date(date));
            unit = "d";
            if (time > 3) {
                time = format(parseISO(date), "MM/dd/yyyy");
                unit = "";
            }
        }
    }
    const x = time + unit;
    return x;
};