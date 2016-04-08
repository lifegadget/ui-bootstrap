import Ember from 'ember';
import Stylist from 'ember-cli-stylist/mixins/shared-stylist';
const { keys, create } = Object; // jshint ignore:line
const { RSVP: {Promise, all, race, resolve, defer} } = Ember; // jshint ignore:line
const { inject: {service} } = Ember; // jshint ignore:line
const { computed, observer, $, run, on, typeOf, isPresent } = Ember;  // jshint ignore:line
const { defineProperty, get, set, inject, isEmpty, merge } = Ember; // jshint ignore:line
const a = Ember.A; // jshint ignore:line

import layout from '../templates/components/ui-card-image';

const cardImage = Ember.Component.extend(Stylist, {
  layout,
  tagName: '',
  width: '100%',
  _class: computed('class', 'width', 'height', '_top', '_bottom', function() {
    const {_top, _bottom} = this.getProperties('class', '_top', '_bottom');
    const baseClass = _top || _bottom ? 'card-img ' : '';
    let classy = `${baseClass}${_top}${_bottom}`;
    if (get(this, 'class')) {
      classy = classy + get(this, 'class');
    }
    return classy;
  }),
  overlayPosition: 'bottom',
  // STYLE VARIATIONS
  _top: computed('top', function() {
    return this.get('top') ? ' card-img-top' : '';
  }),
  _bottom: computed('bottom', function() {
    return this.get('bottom') ? ' card-img-bottom' : '';
  })

});

cardImage.reopenClass({
  positionalParams: ['src']
});
cardImage[Ember.NAME_KEY] = 'ui-card-image';
export default cardImage;
