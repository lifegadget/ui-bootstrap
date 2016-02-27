import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-jumbotron-lead', 'Integration | Component | ui jumbotron lead', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{ui-jumbotron-lead}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#ui-jumbotron-lead}}
      template block text
    {{/ui-jumbotron-lead}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
