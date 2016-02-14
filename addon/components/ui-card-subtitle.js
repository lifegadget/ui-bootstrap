import Ember from 'ember';
import layout from '../templates/components/ui-card-subtitle';

const subtitle = Ember.Component.extend({
  layout,
  tagName:''
});
subtitle.reopenClass({
  positionalParams: ['content']
});
subtitle[Ember.NAME_KEY] = 'ui-card-subtitle';
export default subtitle;
