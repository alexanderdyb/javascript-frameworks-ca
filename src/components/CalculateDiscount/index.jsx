export default function CalculateDiscount(price, discountedPrice) {
  if (price > discountedPrice) {
    const discount = price - discountedPrice;
    const discountPercentage = (discount / price) * 100;
    return Math.round(discountPercentage);
  }
  return 0;
}
