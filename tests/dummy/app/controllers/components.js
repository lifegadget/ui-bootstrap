import Ember from 'ember';
const htmlSafe = Ember.String.htmlSafe;

export default Ember.Controller.extend({
  inverse: false,
  moods: ['default'],
  mood: Ember.computed.alias('moods.0'),
  actions: {
    cardAction(context) {
      this.get('flashMessages').success(htmlSafe(`Action button -- <i>${context.elementId}</i> -- was pressed`));
    },
    cardDetails() {
      this.transitionToRoute('components.cards');
    }
  }
});
