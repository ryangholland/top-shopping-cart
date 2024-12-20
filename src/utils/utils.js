export function truncateString(input) {
  if (input.length <= 20) {
    return input;
  }
  return input.slice(0, 20) + "...";
}

export function formatPrice(number) {
  return number.toFixed(2);
}