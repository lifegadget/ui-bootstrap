import Ember from 'ember';
import layout from '../templates/components/bs-label';

export default Ember.Component.extend({
  layout: layout,
  tagName: '',
  pill: false,
  mood: 'default'
});
