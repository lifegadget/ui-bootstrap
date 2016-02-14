import Ember from 'ember';
import layout from '../templates/components/ui-card-title';

const title = Ember.Component.extend({
  layout,
  tagName:''
});
title.reopenClass({
  positionalParams: ['content']
});
title[Ember.NAME_KEY] = 'ui-card-title';
export default title;
