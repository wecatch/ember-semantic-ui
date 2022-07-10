import fileObject from 'dummy/utils/file-object';
import { module, test } from 'qunit';

module('Unit | Utility | file-object', function () {
  // TODO: Replace this with your real tests.
  test('it works', async function (assert) {
    const base64Response = await fetch(
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII'
    );
    const blob = await base64Response.blob();
    const file = new File([blob], 'smile.png', {
      type: blob.type,
    });

    let result = new fileObject.FileObject({
      fileToUpload: file,
    });
    assert.ok(result);
  });
});
