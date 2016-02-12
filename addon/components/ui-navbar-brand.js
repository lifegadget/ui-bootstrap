import Ember from 'ember';
import layout from '../templates/components/ui-navbar-brand';

export default Ember.Component.extend({
  layout: layout,
  tagName: '',

  actions: {
    onChange(args) {
      return this.attrs.onChange(args);
    }
  }
});
