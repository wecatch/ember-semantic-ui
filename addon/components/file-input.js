import fileInputBase from '../mixins/file-input-base';
import Component from '@ember/component';

/**
file-input component, see {{#crossLink "mixins.FileInputBase"}}{{/crossLink}}

@module components
@class FileInput
@namespace components
@constructor

*/
export default class FileInputCompnent extends Component.extend(
  fileInputBase
) {}
