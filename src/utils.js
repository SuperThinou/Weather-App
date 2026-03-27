export function formatTimeWithTimezone(epoch, timezone) {
  return new Date(epoch * 1000).toLocaleTimeString("fr-FR", {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function capitalize(str) {
  if (typeof str !== "string" || str.length === 0) return "";

  return str
    .toLowerCase()
    .trim()
    .replace(/-/g, " ")
    .replace(/[^a-zA-ZÀ-ÖØ-öø-ÿ\s']/g, " ")
    .split(/\s+/)
    .map((word) => {
      if (!word) return "";

      return word
        .split("'")
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join("'");
    })
    .join(" ");
}
