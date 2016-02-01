import Ember from 'ember';
import UiTabBaseMixin from '../../../mixins/ui-tab-base';
import { module, test } from 'qunit';

module('Unit | Mixin | ui tab base');

// Replace this with your real tests.
test('it works', function(assert) {
  var UiTabBaseObject = Ember.Object.extend(UiTabBaseMixin);
  var subject = UiTabBaseObject.create();
  assert.ok(subject);
});
