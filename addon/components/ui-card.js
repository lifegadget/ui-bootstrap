import Ember from 'ember';
import layout from '../templates/components/ui-card';

const card = Ember.Component.extend({
  layout,
  inverse: false,
  _mood: Ember.computed('mood', function() {
    const mood = this.get('mood');
    return mood ? `card-${mood}` : null;
  }),
  _text: Ember.computed('text', function() {
    const text = this.get('text');
    if(!text) {return null;}

    const textInput = text.split('-');
    if(textInput.length === 1) { textInput.unshift('xs'); }
    const [ scope, position ] = textInput;

    return `card-${scope}-${position}`;
  })
});
card[Ember.NAME_KEY] = 'ui-card';
export default card;
