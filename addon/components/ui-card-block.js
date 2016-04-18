import Ember from 'ember';
import layout from '../templates/components/ui-card-block';

const block = Ember.Component.extend({
  layout,
  tagName:'',
  title: undefined,
  content: undefined
});

block.reopenClass({
  positionalParams: ['content']
});
block[Ember.NAME_KEY] = 'ui-card-block';
export default block;
