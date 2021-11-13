export const getStatusColor = (status) => {
  switch (status) {
    case "pending":
      return "red";
    case "approved":
      return "green";
    default:
      return "green";
  }
};

export const currencyFormatter = (amount, currency) => {
  return currency
    ? amount.toLocaleString("en-NG", {
        style: "currency",
        currency,
        maximumFractionDigits: 2
      })
    : amount.toLocaleString(2);
};
