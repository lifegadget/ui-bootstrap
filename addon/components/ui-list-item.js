import Ember from 'ember';
import layout from '../templates/components/ui-list-item';

const item = Ember.Component.extend({
  layout,
  tagName: '',
  init() {
    this._super(...arguments);
    if(this.attrs.register) {
      this.attrs.register(this);
    }
  },

  text: undefined,
  heading: undefined,
  pill: undefined,
  label: undefined,
  selectable: undefined,
  mood: undefined,
  _mood: Ember.computed('mood', function() {
    const mood = this.get('mood');
    return mood ? ` list-group-item-${mood}` : '';
  }),

  actions: {
    onClick() {
      if(this.attrs.onClick) {
        this.attrs.onClick(this);
      }
    }
  }
});

item.reopenClass({
  positionalParams: ['text']
});
item[Ember.NAME_KEY] = 'ui-list-item';
export default item;
