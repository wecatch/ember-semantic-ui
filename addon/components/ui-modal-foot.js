import Ember from 'ember';
import layout from '../templates/components/ui-modal-foot';

/**
ui-modal-foot component

@module components
@namespace components
@class UiModalFoot
@constructor
*/
export default Ember.Component.extend({
    layout: layout,
	tagName: 'div',
	classNames: ['actions'],
});
