import Ember from 'ember';
import fileInputBase from '../mixins/file-input-base';
import layout from '../templates/components/file-input';


/**
file-input component, see {{#crossLink "mixins.FileInputBase"}}{{/crossLink}}

@module components
@class FileInput
@namespace components
@constructor

*/
export default Ember.Component.extend(fileInputBase, {
    layout: layout
});