import Ember from 'ember';
import layout from '../templates/components/ui-card-link';

const link = Ember.Component.extend({
  layout,
  tagName:'',
  url: Ember.computed.alias('src'),
  actions: {
    onClick(evt) {
      if (this.attrs.action) {
        this.attrs.action(this, evt);
      }
    }
  }
});
link.reopenClass({
  positionalParams: ['content']
});
link[Ember.NAME_KEY] = 'ui-card-link';
export default link;
