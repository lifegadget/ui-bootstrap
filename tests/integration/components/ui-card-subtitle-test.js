import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-card-subtitle', 'Integration | Component | ui card subtitle', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{ui-card-subtitle}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#ui-card-subtitle}}
      template block text
    {{/ui-card-subtitle}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
