function getInnerText(id) {
  let elementValue = document.getElementById(id).innerText;
  return parseFloat(elementValue);
}
function getInputValue(id) {
  let input = document.getElementById(id).value;
  input.value = "";
  return parseFloat(input);
}
function setInnerText(id, Text) {
  document.getElementById(id).innerText = Text;
}
function inputReset(id, val) {
  document.getElementById(id).value = val;
}
