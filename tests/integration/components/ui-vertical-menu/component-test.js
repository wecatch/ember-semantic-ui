import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ui-vertical-menu', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<UiVerticalMenu />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <UiVerticalMenu>
        template block text
      </UiVerticalMenu>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
