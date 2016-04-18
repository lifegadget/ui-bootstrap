import Ember from 'ember';
import layout from '../templates/components/ui-list-group';

export default Ember.Component.extend({
  layout,
  tagName: '',

  selectable: true,
  items: Ember.computed(() => []),


  actions: {
    register(item) {
      this.get('items').push(item);
    },
    onClick(item) {
      if(this.attrs.onClick) {
        this.attrs.onClick(item);
      }
    }
  }
});
