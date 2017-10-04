# toggle-widget

Toggle widget, to use with [browserify](http://browserify.org).
Usage [here](test/main.js), outcome [here](https://cdn.rawgit.com/lachrist/toggle-widget/daba5116/test/index.html).

### `toggle = require("toggle-widget")(container, options)`
  * `container :: dom.Element`
    * `disabled :: boolean`
    * BrowserEvent `"toggle"`
      * `toggled :: boolean`
  * `options :: object`
    * `colors :: [string]`
  * `toggle(dispatch)`
    * `dispatch :: boolean`
