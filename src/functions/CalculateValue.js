import { Decimal } from "decimal.js";

function CalculateValue(ratio, input, targetUnit) {
  if (!input.value) return 0;

  const targetRatio = new Decimal(ratio[targetUnit]);
  const inputRatio = ratio[input.unit];
  const inputValue = input.value;

  return targetRatio
    .dividedBy(inputRatio)
    .times(inputValue))
    .toString();
}

export default CalculateValue;
