import Ember from 'ember';
import layout from '../templates/components/ui-list-item-text';

const itemText = Ember.Component.extend({
  layout,
  tagName: '',

  hasHeading: undefined,
  text: undefined
});

itemText.reopenClass({
  positionalParams: ['text']
});
itemText[Ember.NAME_KEY] = 'ui-card-item-text';
export default itemText;
