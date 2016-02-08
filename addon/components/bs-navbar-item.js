import Ember from 'ember';
import layout from '../templates/components/bs-navbar-item';

export default Ember.Component.extend({
  layout: layout,
  tagName: '',

  actions: {
    onChange(args) {
      this.attrs.onChange(args);
    }
  }

});
