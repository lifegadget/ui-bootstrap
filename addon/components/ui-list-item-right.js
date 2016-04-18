import Ember from 'ember';
import layout from '../templates/components/ui-list-item-right';

const right = Ember.Component.extend({
  layout,
  tagName: '',

  content: undefined
});

right.reopenClass({
  positionalParams: ['content']
});
right[Ember.NAME_KEY] = 'ui-card-item-right';
export default right;
