# ui-bootstrap

> Adds a complete Ember Bootstrap 4.x eco-system

> THIS IS CURRENTLY A WORK IN PROGRESS ... it will be ready pretty soon


## Installation

```sh
# optional; this is if you want to use SASS
ember install ember-cli-sassy
# required
ember install ui-bootstrap
```

This will install not only the latest version of Bootstrap 4.x but also install:

  - [`ember-tooltips`](https://www.emberaddons.com/?query=tooltip) - Rather than use Bootstrap's tooltips we have opted for a more Ember based solution
  - [`ember-cli-flash`](https://github.com/poteto/ember-cli-flash) - Rather than the Bootstrap "alert" functionality we include this great addon
  - [`ember-cli-modal`](https://github.com/yapplabs/ember-modal-dialog) - Great ember modals using the `ember-modal` component. If you want to use `tether-modal` you can add `ember-tether` separately.

While not included by default, two other very complimentary plugin (by yours truly) is:

  - [`ui-button`](https://github.com/lifegadget/ui-button) - bootstrap enabled button controls
  - [`ui-input`](https://github.com/lifegadget/ui-input) - bootstrap enabled input controls

> **Note:** starting with Bootstrap 4, _glyphicons_ are no longer included in Bootstrap and are not part of this addon either. If you want some Ember help in using icon-libraries try [`ui-icon`](https://github.com/lifegadget/ui-icon) (this is included by default if you use `ui-button` or `ui-input`)

## Usage

### SCSS / CSS

By default we're assuming you're using SCSS. But to get your Bootstrap mojo you'll need to include the following line to your `app.scss`:

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

The general philosophy with this addon is to NOT include bootstraps JS as in most cases there are better ways to achieve these goals with Ember addons. See our approach to each of these components below, and in the next section we'll discuss how to enable or disable various aspects.

| component | comments|
|-----------|------------|
|tooltip    | BS has moved to a dual dependency on [_tether_](http://github.hubspot.com/tether/) as well as its own JS library. Rather than go this route we have included the [`ember-tooltip`]() library instead. It is available by default but can be disabled if not wanted in the configuration.|
|popovers   | this is currently not supported by the addon but of course you can include `ember-tether` and then manually bringing in the popovers JS from Bootstrap.|
|collapse   | an internal BS dependency, this is made simpler by the addition of the `ui-accordian` component included as part of this addon |
|modal      | no direct support for the Bootstrap modals. Instead we have included `ember-cli-modal` which feels like a much more Ember way of doing things. |
|alert      | the alert CSS, of course, is available, but the "flash message" _like_ functionality feels redundant with the excellent `ember-cli-flash` addon. |

In addition, there are a few _components_ in Bootstrap that don't have any javascript dependencies butwhere we felt a component would help in their use:

| component | comments   |
|-----------|------------|
|label      | we've added a `ui-label` component for you which handles both _pill_ and _traditional_ varieties |
|pagination | we've added a `ui-pagination` component |


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
