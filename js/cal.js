function cal() {
  var x = Number(document.getElementById('inputValue').value);
  var a = Math.ceil(x * 500 / 467);
  document.getElementById("outputCal").value = Math.ceil(a);
}
