import EmberObject from '@ember/object';
import FileInputMixin from '../../../mixins/file-input';
import { module, test } from 'qunit';

module('Unit | Mixin | file input');

// Replace this with your real tests.
test('it works', function(assert) {
  var FileInputObject = EmberObject.extend(FileInputMixin);
  var subject = FileInputObject.create();
  assert.ok(subject);
});
