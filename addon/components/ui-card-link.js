import Ember from 'ember';
import layout from '../templates/components/ui-card-link';

const link = Ember.Component.extend({
  layout,
  tagName:'',

  title: undefined,
  routeTo: undefined,
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
  positionalParams: ['title']
});
link[Ember.NAME_KEY] = 'ui-card-link';
export default link;
