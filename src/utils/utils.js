export function truncateString(input) {
  if (input.length <= 20) {
    return input;
  }
  return input.slice(0, 20) + "...";
}
