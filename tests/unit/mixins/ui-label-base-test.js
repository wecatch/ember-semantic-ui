import EmberObject from '@ember/object';
import UiLabelBaseMixin from '../../../mixins/ui-label-base';
import { module, test } from 'qunit';

module('Unit | Mixin | ui label base');

// Replace this with your real tests.
test('it works', function (assert) {
  var UiLabelBaseObject = EmberObject.extend(UiLabelBaseMixin);
  var subject = UiLabelBaseObject.create();
  assert.ok(subject);
});
