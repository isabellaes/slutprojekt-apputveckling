export function generateRandomId() {
  return Math.floor(Math.random() * (100000 - 1) + 1).toString();
}
