// deposit
document.getElementById("depositBtn").addEventListener("click", () => {
  if (isNaN(getInputValue("depositInp"))) {
    return;
  }
  let totalDeposit = getInnerText("totalDeposit") + getInputValue("depositInp");
  setInnerText("totalDeposit", totalDeposit);
  let totalBalanceAfterDeposite =
    getInnerText("totalBalance") + getInputValue("depositInp");
  setInnerText("totalBalance", totalBalanceAfterDeposite);
  inputReset("depositInp", "");
});

// withdraw
document.getElementById("withdrawBtn").addEventListener("click", () => {
  if (
    getInputValue("withdrawInp") > getInnerText("totalBalance") ||
    isNaN(getInputValue("withdrawInp"))
  ) {
    inputReset("withdrawInp", "");
    return;
  }
  let totalWithdraw =
    getInnerText("totalWithdraw") + getInputValue("withdrawInp");
  setInnerText("totalWithdraw", totalWithdraw);
  let totalBalanceAfterWithdraw =
    getInnerText("totalBalance") - getInputValue("withdrawInp");
  setInnerText("totalBalance", totalBalanceAfterWithdraw);
  inputReset("withdrawInp", "");
});
