import Ember from 'ember';
const { keys, create } = Object; // jshint ignore:line
const { RSVP: {Promise, all, race, resolve, defer} } = Ember; // jshint ignore:line
const { inject: {service} } = Ember; // jshint ignore:line
const { computed, observe, $, run, on, typeOf } = Ember;  // jshint ignore:line
const { get, set, debug } = Ember; // jshint ignore:line
const a = Ember.A; // jshint ignore:line

import layout from '../templates/components/ui-list-item-heading';

const heading = Ember.Component.extend({
  layout,
  tagName: '',

  heading: undefined
});
heading.reopenClass({
  positionalParams: ['heading']
});
heading[Ember.NAME_KEY] = 'ui-card-heading';
export default heading;
