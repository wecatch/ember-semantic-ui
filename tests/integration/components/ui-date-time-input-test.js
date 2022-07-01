import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent(
  'ui-date-time-input',
  'Integration | Component | ui date time input',
  {
    integration: true,
  }
);

test('it renders', function (assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{ui-date-time-input}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#ui-date-time-input}}
      template block text
    {{/ui-date-time-input}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
