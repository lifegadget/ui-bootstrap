# ui-bootstrap

> Adds a complete Ember Bootstrap 4.x eco-system

> THIS IS CURRENTLY A WORK IN PROGRESS ... it works but it will be "ready" pretty soon


## Installation

```sh
# if you want to use SASS (recommended)
ember install ember-cli-sass
# then, either ...
ember install ui-bootstrap
# - or -
ember install ui-bootstrap-plus
```

Installing `ui-bootstrap` will install Bootstrap 4.x locally to your project as an NPM dependency. If you install `ui-bootstrap-plus` then it will include all of these complimentary plugins as well:

  - [`ui-icon`](https://github.com/lifegadget/ui-button) - font icons at your fingertips (uses fontawesome by default)
  - [`ui-button`](https://github.com/lifegadget/ui-button) - bootstrap enabled button controls (includes tether and tooltips)
  - [`ui-input`](https://github.com/lifegadget/ui-input) - bootstrap enabled input controls (includes tether and tooltips)
  - [`ui-tooltip`](https://github.com/lifegadget/ui-tooltip) - _not done yet_
  - [`ui-dropdown`](https://github.com/lifegadget/ui-dropdown) - _not done yet_
  - [`ember-cli-flash`](https://github.com/poteto/ember-cli-flash) - great alert functionality that can be used with the Bootstrap alert styling
  - [`ember-modal-dialog`](https://github.com/yapplabs/ember-modal-dialog) - Great support for modals in Ember.
  - [`ember-tether`](https://github.com/yapplabs/ember-modal-dialog) - allows Ember to leverage all the positional panache of [Hubspot Tether](http://github.hubspot.com/tether/).

> **Note:** starting with Bootstrap 4, _glyphicons_ are no longer included in Bootstrap and are not part of this addon either. If you want some Ember help in using icon-libraries try [`ui-icon`](https://github.com/lifegadget/ui-icon)

## Usage

### SASS / CSS

This plugin detects if you've installed the `ember-cli-sass` addon. If you have it will use SASS, not then it will fallback to CSS (you'll get an info message in this case when you run `ember serve`).

#### SCSS

To get your Bootstrap mojo you'll need to include the following line to your `app.scss`:

```SASS
@import 'bootstrap';
// ... or ...
@import 'bootstrap-flex';
```

One of the really nice things about BS4 is that it can optionally use **flexbox** for all it's spacial positioning. You do lose a tiny bit of browser support but not much these days.

> **Note:** that by importing either of the two above you are importing _all_ of Bootstrap and that maybe more than you need. You can, when using SCSS, selectively import only what you need. As a targeted optimization for people using this plugin and sticking to it's no-JS metaphor you can use `ui-bootstrap` and `ui-bootstrap-flex` as more optimized targets.

#### CSS Users

If you are stuck using CSS rather than SCSS, you will need to change the options for this plugin in your `environment.js` file:

```js
var ENV = {
  uiBootstrap: {
    useSASS: false
  }
}
```

That's all that's needed but of course with this change you loose the ability to modify the SCSS variables which Bootstrap exposes.

### JS / Components

The philosophy with this addon is to NOT include bootstraps JS as in most cases there are better ways to achieve these goals with Ember addons. See our approach to each of these components below, and in the next section we'll discuss how to enable or disable various aspects.

In addition, where Bootstrap _components_ don't have any javascript dependencies we have added Ember composable components. See the "component" tab on the demo site to find out more.

## License

Copyright (c) 2016

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
