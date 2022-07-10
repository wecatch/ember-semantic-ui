import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ui-date-time-input', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<UiDateTimeInput />`);

    const form = this.element.querySelector('div');
    const fileds = form.querySelector('div');

    assert.dom(form).hasClass('form');
    assert.dom(fileds).hasClass('fields');
  });
});
