# toggle-widget

Toggle widget, to use with [browserify](http://browserify.org).
Usage [here](demo/), live demo [here](https://cdn.rawgit.com/lachrist/toggle-widget/65b7cada/demo/index.html).

### `toggle = require("toggle-widget")(container, options)`
  * `container :: dom.Element`
    * `disabled :: boolean`
    * BrowserEvent `"toggle"`
      * `toggled :: boolean`
  * `options :: object`
    * `colors :: [string]`
  * `toggle(dispatch)`
    * `dispatch :: boolean`
