import Ember from 'ember';
import layout from '../templates/components/ui-navbar-item';

export default Ember.Component.extend({
  layout: layout,
  tagName: '',
  value: undefined,
  _matchedValue: Ember.computed('selected', 'routeTo', 'value', function() {
    const {selected, value, routeTo} = this.getProperties('selected', 'value', 'routeTo');
    return value ? selected === value : selected === routeTo;
  }),

  actions: {
    onChange(args) {
      this.attrs.onChange(args);
    }
  }

});
