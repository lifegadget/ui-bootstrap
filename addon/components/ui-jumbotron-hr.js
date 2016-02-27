import Ember from 'ember';
import layout from '../templates/components/ui-jumbotron-hr';
const htmlSafe = Ember.String.htmlSafe;

const divider = Ember.Component.extend({
  layout,
  tagName: '',
  width: '100%',
  _style: Ember.computed('width', function() {
    const width = this.get('width');
    return width ? htmlSafe(`width: ${width}`) : undefined;
  })
});
divider.reopenClass({
  positionalParams: ['width']
});
divider[Ember.NAME_KEY] = 'jumbotron-divider';
export default divider;
