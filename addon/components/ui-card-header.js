import Ember from 'ember';
import layout from '../templates/components/ui-card-header';
const htmlSafe = Ember.String.htmlSafe;

const cardHeader = Ember.Component.extend({
  layout,
  tagName:'',
  content:'',
  _content: Ember.computed('content', function() {
    return htmlSafe(this.get('content'));
  })
});
cardHeader.reopenClass({
  positionalParams: ['content']
});
cardHeader[Ember.NAME_KEY] = 'ui-card-header';
export default cardHeader;
