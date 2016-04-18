import Ember from 'ember';
import layout from '../templates/components/ui-label';

const label = Ember.Component.extend({
  layout: layout,
  tagName: '',
  isPill: false,
  init() {
    this._super(...arguments);
    if(this.attrs.onClick) {
      this.set('clickable', true);
    }
  },

  mood: 'default',
  _mood: Ember.computed('mood', function() {
    const mood = this.get('mood');
    return mood ? mood : 'default';
  }),
  size: null,
  _size: Ember.computed('size', function() {
    const size = this.get('size');
    return size ? ` pill-size-${size}` : null;
  }),
  clickable: false,

  actions: {
    onClick(...args) {
      if(this.attrs.onClick) {
        this.attrs.onClick(args);
      }
    }
  }
});
label.reopenClass({
  positionalParams: ['title']
});
export default label;
