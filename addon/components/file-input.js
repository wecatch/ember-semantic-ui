import fileInputBase from '../mixins/file-input-base';
import layout from '../templates/components/file-input';
import Component from '@ember/component';

/**
file-input component, see {{#crossLink "mixins.FileInputBase"}}{{/crossLink}}

@module components
@class FileInput
@namespace components
@constructor

*/
export default Component.extend(fileInputBase, {
  layout: layout,
});
