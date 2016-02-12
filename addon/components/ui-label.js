import Ember from 'ember';
import layout from '../templates/components/ui-label';

const label = Ember.Component.extend({
  layout: layout,
  tagName: '',
  mood: 'default'
});
label.reopenClass({
  positionalParams: ['title']
});
export default label;
