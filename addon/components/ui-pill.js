import Ember from 'ember';
import layout from '../templates/components/ui-pill';

const pill = Ember.Component.extend({
  layout,
  tagName: '',
  mood: 'default',
  size: null,
  _size: Ember.computed('size', function() {
    const size = this.get('size');
    return size ? `pill-size-${size}` : null;
  })
});
pill.reopenClass({
  positionalParams: ['title']
});
export default pill;
