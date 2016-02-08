import Ember from 'ember';
const { keys, create } = Object; // jshint ignore:line
const { RSVP: {Promise, all, race, resolve, defer} } = Ember; // jshint ignore:line
const { inject: {service} } = Ember; // jshint ignore:line
const { computed, observer, $, run, on, typeOf, isPresent } = Ember;  // jshint ignore:line
const { defineProperty, get, set, inject, isEmpty, merge } = Ember; // jshint ignore:line
const a = Ember.A; // jshint ignore:line

export default Ember.Controller.extend({
  actions: {
    navChange(args) {
      const [context] = args;
      const {routeTo, linkTo} = context.getProperties('routeTo', 'linkTo');
      if(linkTo) {
        window.open(linkTo);
      }
      if (routeTo) {
        if (this.transitionToRoute) {

          this.transitionToRoute(routeTo);
        } else {
          console.log('component needs to have transitionToRoute passed in');
        }
      }

    }
  }
});
