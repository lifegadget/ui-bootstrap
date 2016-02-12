import Ember from 'ember';
const { keys, create } = Object; // jshint ignore:line
const { RSVP: {Promise, all, race, resolve, defer} } = Ember; // jshint ignore:line
const { inject: {service} } = Ember; // jshint ignore:line
const { computed, observer, $, run, on, typeOf, isPresent } = Ember;  // jshint ignore:line
const { defineProperty, get, set, inject, isEmpty, merge } = Ember; // jshint ignore:line
const a = Ember.A; // jshint ignore:line

import layout from '../templates/components/ui-progress';

const uiProgress = Ember.Component.extend({
  layout,
  tagName:'',
  max: 100,
  _mood: computed('mood', function() {
    const mood = this.get('mood');
    return mood ? `progress-${mood}` : null;
  }),
  _striped: computed('striped', function() {
    const {striped, animated} = this.getProperties('striped', 'animated');
    return striped || animated ? 'progress-striped': null;
  }),
  _animated: computed('animated', function() {
    const animated = this.get('animated');
    if (animated) {
      return 'progress-animated';
    } else {
      return null;
    }
  }),

});
uiProgress.reopenClass({
  positionalParams: ['value']
});
export default uiProgress;
