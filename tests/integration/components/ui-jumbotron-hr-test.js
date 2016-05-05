import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-jumbotron-hr', 'Integration | Component | ui jumbotron hr', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{ui-jumbotron-hr}}`);

  assert.equal(this.$('.m-y-2').length, 1, 'inline component works');

  // Template block usage:"
  this.render(hbs`
    {{#ui-jumbotron-hr}}
      template block text
    {{/ui-jumbotron-hr}}
  `);

  assert.equal(this.$('.m-y-2').length, 1, 'block component works');
});
