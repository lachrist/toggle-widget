# toggle-widget

Toggle widget, to use with [browserify](http://browserify.org).
Example [here](test/main.js), result [here](https://rawgit.com/lachrist/toggle-widget/master/test/index.html).

### `toggle = require("toggle-widget")(container, options)`
  * `container :: dom.Element`
    * `disabled :: boolean`
    * BrowserEvent `"toggle"`
      * `toggled :: boolean`
  * `options :: object`
    * `colors :: [string]`
  * `toggle(dispatch)`
    * `dispatch :: boolean`
