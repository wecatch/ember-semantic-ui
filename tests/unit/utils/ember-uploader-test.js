import EmberUploader from 'dummy/utils/ember-uploader';
import { module, test } from 'qunit';

module('Unit | Utility | ember-uploader', function () {
  // TODO: Replace this with your real tests.
  test('it works', function (assert) {
    let result = new EmberUploader({
      url: '',
      paramName: 'file',
    });
    assert.ok(result);
  });
});
