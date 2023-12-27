const getCurrencySign = (currency) => {
  switch (currency) {
    case "usd":
      return "$";

    case "eur":
      return "€";

    case "jpy":
      return "¥";

    default:
      return "$";
  }
};

export { getCurrencySign };
