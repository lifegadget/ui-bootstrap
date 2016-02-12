import Ember from 'ember';
import layout from '../templates/components/ui-navbar-item';

export default Ember.Component.extend({
  layout: layout,
  tagName: '',

  actions: {
    onChange(args) {
      this.attrs.onChange(args);
    }
  }

});
