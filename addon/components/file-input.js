import Ember from 'ember';
import fileInput from '../mixins/file-input';
import layout from '../templates/components/file-input';

export default Ember.Component.extend(fileInput, {
    layout: layout
});