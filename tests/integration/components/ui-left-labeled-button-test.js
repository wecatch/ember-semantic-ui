import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-left-labeled-button', 'Integration | Component | ui left labeled button', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ui-left-labeled-button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ui-left-labeled-button}}
      template block text
    {{/ui-left-labeled-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
