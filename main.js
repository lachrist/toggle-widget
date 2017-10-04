
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
