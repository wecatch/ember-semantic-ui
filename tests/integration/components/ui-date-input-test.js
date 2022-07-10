import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ui-date-input', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders without any component arguments', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<UiDateInput />`);

    assert.dom(this.element).hasText('');
  });

  test('it renders with value', async function (assert) {
    // Template block usage:
    await render(hbs`
      <UiDateInput @value={{"2016-03-04"}} ></UiDateInput>
    `);

    assert.dom(this.element.querySelector('div')).hasClass('ui');
    assert.dom(this.element.querySelector('div')).hasClass('input');
    assert.dom(this.element.querySelector('input')).hasValue('2016-03-04');
  });
});
