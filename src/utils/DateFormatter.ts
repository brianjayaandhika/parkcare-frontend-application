import { Dayjs } from "dayjs";

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function DateFormatter(
  rawDate: Date | Dayjs,
  excludeTime = false
): string {
  const d = new Date(rawDate as Date);

  const year = d.getFullYear();
  const month = MONTHS[d.getMonth()];
  const date = d.getDate();

  const day = DAYS[d.getDay()];
  const time = d.toLocaleTimeString("en-US", {
    hour12: false,
    timeZone: "Asia/Jakarta",
  }); // HH:mm:ss

  if (excludeTime) {
    return `${day}, ${date} ${month} ${year}`;
  }

  return `${day}, ${date} ${month} ${year} ${time}`;
}
