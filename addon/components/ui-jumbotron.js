import Ember from 'ember';
import layout from '../templates/components/ui-jumbotron';

const jumbo = Ember.Component.extend({
  layout,
  tagName: '',
  fluid: false,
  fluidContainer: true,
});
jumbo[Ember.NAME_KEY] = 'jumbotron';
export default jumbo;
