import Ember from 'ember';
import layout from '../templates/components/bs-label';

const bsLabel = Ember.Component.extend({
  layout: layout,
  tagName: '',
  mood: 'default'
});
bsLabel.reopenClass({
  positionalParams: ['title']
});
export default bsLabel;
