import EmberObject from '@ember/object';
import UiDropdownBaseMixin from '../../../mixins/ui-dropdown-base';
import { module, test } from 'qunit';

module('Unit | Mixin | ui dropdown base');

// Replace this with your real tests.
test('it works', function(assert) {
  var UiDropdownBaseObject = EmberObject.extend(UiDropdownBaseMixin);
  var subject = UiDropdownBaseObject.create();
  assert.ok(subject);
});
