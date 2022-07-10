import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ui-progress', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<UiProgress @percent={{10}} />`);

    assert.dom(this.element.querySelector('div')).hasClass('ui');
    assert.dom(this.element.querySelector('div')).hasClass('progress');

    const bar = this.element.querySelector('div').querySelector('div');

    const progress = bar.querySelector('div');

    assert.dom(bar).hasClass('bar');
    assert.dom(progress).hasClass('progress');
    assert.dom(progress).hasText('10%');
  });
});
