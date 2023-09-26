export function extractIsExpired(expirationDate: string) {
  const expiration = new Date(expirationDate);
  const currentDate = new Date();
  return expiration <= currentDate;
}
