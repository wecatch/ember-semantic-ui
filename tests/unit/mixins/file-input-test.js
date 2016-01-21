import Ember from 'ember';
import FileInputMixin from '../../../mixins/file-input';
import { module, test } from 'qunit';

module('Unit | Mixin | file input');

// Replace this with your real tests.
test('it works', function(assert) {
  var FileInputObject = Ember.Object.extend(FileInputMixin);
  var subject = FileInputObject.create();
  assert.ok(subject);
});
