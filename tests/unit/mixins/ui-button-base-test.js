import UiButtonMixin from '../../../mixins/ui-button';
import { module, test } from 'qunit';
import EmberObject from '@ember/object';

module('Unit | Mixin | ui button');

// Replace this with your real tests.
test('it works', function(assert) {
  var UiButtonObject = EmberObject.extend(UiButtonMixin);
  var subject = UiButtonObject.create();
  assert.ok(subject);
});
