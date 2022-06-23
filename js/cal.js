function cal() {
  var x = Number(document.getElementById('inputValue').value);
  var a = Math.floor(x * 500 / 467);
  document.getElementById("outputCal").value = a;
}
