import Ember from 'ember';
import layout from '../templates/components/ui-card-header';
const htmlSafe = Ember.String.htmlSafe;

export default Ember.Component.extend({
  layout,
  tagName:'',
  content:'',
  _content: Ember.computed('content', function() {
    return htmlSafe(this.get('content'));
  })
});
