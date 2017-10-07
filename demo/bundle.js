(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"../main.js":2}],2:[function(require,module,exports){

module.exports = function (container, options) {
  options = options || {};
  options.colors = options.colors || [];
  options.colors[0] = options.colors[0] || "red";
  options.colors[1] = options.colors[1] || "green";
  options.colors[2] = options.colors[2] || "white";
  var toggled = false;
  function colorize () { container.style.backgroundColor = options.colors[toggled?1:0] }
  function toggle (dispatch) {
    toggled = !toggled;
    colorize();
    div.style.transform = toggled ? "translateX(26px)" : "translateX(0px)";
    if (dispatch) {    
      var event = new Event("toggle");
      event.toggled = toggled;
      container.dispatchEvent(event);
    }
  }
  var div = document.createElement("div");
  div.style.position = "absolute";
  div.style.borderRadius = "34px";
  div.style.left = "4px";
  div.style.bottom = "4px"; 
  div.style.width = "26px";
  div.style.height = "26px";
  div.style.transition = "0.4s";
  div.style.backgroundColor = options.colors[2];
  container.className += " toggle-widget";
  container.style.position = "relative";
  container.style.width = "60px";
  container.style.height = "34px";
  container.style.cursor = "pointer";
  container.style.borderRadius = "34px";
  container.style.transition = "0.4s";
  container.appendChild(div);
  container.addEventListener("click", function () {
    if (container.disabled) {
      container.style.backgroundColor = "grey";
      setTimeout(colorize, 400);
    } else {
      toggle(true);
    }
  });
  colorize();
  return toggle;
};

},{}]},{},[1]);
