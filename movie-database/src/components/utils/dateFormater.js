// dateUtils.js

// Returns date as "Feb 10"
export function dateFormater(date) {
  const parsedDate = new Date(date);

  if (isNaN(parsedDate)) return "Invalid Date";

  return parsedDate.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
  });
}

// Returns year only, e.g., "2026"
export function YearDisplay(date) {
  const parsedDate = new Date(date);

  if (isNaN(parsedDate)) return "Invalid Date";

  return parsedDate.getFullYear().toString();
}

// Returns full date, e.g., "February 10 2026"
export function FullDateDisplay(date) {
  const parsedDate = new Date(date);

  if (isNaN(parsedDate)) return "Invalid Date";

  // Format date as "Month Day Year" (without comma)
  const options = { month: "long", day: "2-digit", year: "numeric" };
  const formatted = parsedDate.toLocaleDateString("en-US", options);

  // Remove the comma that toLocaleDateString usually adds
  return formatted.replace(",", "");
}
export function FormatNumberWithComma(value) {
  if (value === null || value === undefined) return "";
  
  const number = Number(value);
  if (isNaN(number)) return "";

  return number.toLocaleString("en-US");
}
export function FormatMinutesToTime(minutes) {
  if (minutes === null || minutes === undefined) return "";

  const totalMinutes = Number(minutes);
  if (isNaN(totalMinutes) || totalMinutes < 0) return "";

  const hours = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;

  return `${hours}:${mins.toString().padStart(2, "0")}`;
}
export function RoundToOneDecimal(value) {
  if (value === null || value === undefined) return "";

  const number = Number(value);
  if (isNaN(number)) return "";

  return Math.floor(number * 10) / 10;
}

