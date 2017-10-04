var ToggleWidget = require("../main.js");
var div1 = document.createElement("div");
var div2 = document.createElement("div");
var toggle1 = ToggleWidget(div1);
var toggle2 = ToggleWidget(div2, {
  colors: ["orange", "olive", "pink"]
});
document.body.appendChild(div1);
document.body.appendChild(div2);
div1.addEventListener("toggle", function (event) {
  console.log("toggle1 "+event.toggled);
  // Disabled container prevent user click to toggle the button
  // but toggle method can still programmatically switch it.
  div2.disabled = event.toggled;
});
div2.addEventListener("toggle", function (event) {
  console.log("toggle2 "+event.toggled);
});
// This triggers the toggle event
toggle1(true);
// This does NOT trigger the toggle event
toggle2();