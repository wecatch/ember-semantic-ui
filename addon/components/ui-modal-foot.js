import layout from './ui-modal-foot';
import Component from '@ember/component';

/**
ui-modal-foot component

@module components
@namespace components
@class UiModalFoot
@constructor
*/
export default Component.extend({
  layout: layout,
  tagName: 'div',
  classNames: ['actions'],
});
