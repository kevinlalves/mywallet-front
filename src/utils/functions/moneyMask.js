const centsToReals = 100;
const centsPrecision = 2;

const moneyMask = (value) => {
  value = value.replace(/\D/g, "");
  value = parseInt(value)/centsToReals;
  value = value.toFixed(centsPrecision);

  return value;
};

export default moneyMask;
