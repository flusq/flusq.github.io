var myVar = setInterval(clock, 1000);
function clock() {
  var d = new Date();
  document.getElementById("clock").innerHTML = d.toLocaleTimeString();
}
document.addEventListener("DOMContentLoaded", clock)