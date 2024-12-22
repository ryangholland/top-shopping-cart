export function truncateString(input) {
  if (input.length <= 20) {
    return input;
  }
  return input.slice(0, 20) + "...";
}

export function formatPrice(number) {
  return number.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function calculateSubtotal(cart) {
  return formatPrice(
    cart.reduce((total, item) => total + item.price * item.quantity, 0)
  );
}

export function getQuantity(cart, id) {
  const item = cart.find((item) => item.id === id);
  if (!item) return null;
  return item.quantity;
}

export function getTotalItems(cart) {
  return cart.reduce((total, item) => total + item.quantity, 0)
}