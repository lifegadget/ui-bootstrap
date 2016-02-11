import Ember from 'ember';
import layout from '../templates/components/bs-pill';

const bsPill = Ember.Component.extend({
  layout,
  tagName: '',
  mood: 'primary'
});
bsPill.reopenClass({
  positionalParams: ['title']
});
export default bsPill;
