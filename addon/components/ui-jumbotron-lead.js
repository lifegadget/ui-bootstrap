import Ember from 'ember';
import layout from '../templates/components/ui-jumbotron-lead';

const lead = Ember.Component.extend({
  layout,
  tagName: '',

});
lead.reopenClass({
  positionalParams: ['lead']
});
lead[Ember.NAME_KEY] = 'jumbotron-lead';
export default lead;
