import { Decimal } from "decimal.js";

function CalculateValue(ratio, input, targetUnit) {
  if (!input.value) return 0;

  const targetRatio = new Decimal(ratio[targetUnit]);
  const inputRatio = ratio[input.unit];
  const inputValue = input.value;

  return Number(targetRatio
    .dividedBy(inputRatio)
    .times(inputValue))
    .toLocaleString();
}

export default CalculateValue;
