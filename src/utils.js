export function formatTime(time) {
  if (!time) return "";

  const [hours, minutes] = time.split(":");
  return `${hours}h${minutes}`;
}

export function capitalize(str) {
  if (typeof str !== "string" || str.length === 0) return "";

  return str
    .toLowerCase()
    .trim()
    .replace(/-/g, " ")
    .replace(/[^a-zA-ZÀ-ÖØ-öø-ÿ\s']/g, " ")
    .split(/\s+/)
    .map(word => {
      if (!word) return "";

      return word
        .split("'")
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join("'");
    })
    .join(" ");
}