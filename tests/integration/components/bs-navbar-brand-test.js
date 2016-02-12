import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-navbar-brand', 'Integration | Component | bs navbar brand', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{ui-navbar-brand}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#ui-navbar-brand}}
      template block text
    {{/ui-navbar-brand}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
