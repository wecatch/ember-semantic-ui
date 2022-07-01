import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent(
  'ui-dropdown-menu',
  'Integration | Component | ui dropdown menu',
  {
    integration: true,
  }
);

test('it renders', function (assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ui-dropdown-menu}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ui-dropdown-menu}}
      template block text
    {{/ui-dropdown-menu}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
