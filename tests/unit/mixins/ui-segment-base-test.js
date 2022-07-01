import EmberObject from '@ember/object';
import UiSegmentBaseMixin from '../../../mixins/ui-segment-base';
import { module, test } from 'qunit';

module('Unit | Mixin | ui segment base');

// Replace this with your real tests.
test('it works', function (assert) {
  var UiSegmentBaseObject = EmberObject.extend(UiSegmentBaseMixin);
  var subject = UiSegmentBaseObject.create();
  assert.ok(subject);
});
