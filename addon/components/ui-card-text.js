import Ember from 'ember';
import layout from '../templates/components/ui-card-text';

const text = Ember.Component.extend({
  layout,
  tagName: '',
});
text[Ember.NAME_KEY] = 'ui-card-text';
export default text;
