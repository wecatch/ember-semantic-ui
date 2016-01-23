import Ember from 'ember';
import UiButtonMixin from '../../../mixins/ui-button';
import { module, test } from 'qunit';

module('Unit | Mixin | ui button');

// Replace this with your real tests.
test('it works', function(assert) {
  var UiButtonObject = Ember.Object.extend(UiButtonMixin);
  var subject = UiButtonObject.create();
  assert.ok(subject);
});
