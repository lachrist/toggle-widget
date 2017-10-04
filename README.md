# toggle-widget

Toggle widget, to use with [browserify](http://browserify.org):
Example here: (test/main.js)[test/main.js], result here: 

### `toggle = require("toggle-widget")(container, options)`
  * `container :: dom.Element`
    * `disabled :: boolean`
    * BrowserEvent "toggle"
      * `toggled :: boolean`
  * `options :: object`
    * `colors :: [string]`
  * `toggle(dispatch)`
    * `dispatch :: boolean`
