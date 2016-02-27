import Ember from 'ember';
import layout from '../templates/components/ui-jumbotron-title';

const title = Ember.Component.extend({
  layout,
  tagName: '',
  mood: null,
  _mood: Ember.computed('mood', function() {
    const mood = this.get('mood');
    return mood ? ` text-${mood}` : undefined;
  })
});
title.reopenClass({
  positionalParams: ['title']
});
title[Ember.NAME_KEY] = 'jumbotron-title';
export default title;
