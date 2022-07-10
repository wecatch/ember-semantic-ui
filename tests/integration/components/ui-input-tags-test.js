import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ui-input-tags', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('value', ['google', 'apple']);
    // Template block usage:
    await render(hbs`
      <UiInputTags  @value={{this.value}} >
        template block text
      </UiInputTags>
    `);

    assert
      .dom(this.element.querySelector('input[type="hidden"]'))
      .hasValue('google,apple');
  });
});
