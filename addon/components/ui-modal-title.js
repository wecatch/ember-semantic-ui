import Component from '@ember/component';
import layout from '../templates/components/ui-modal-title';

/**
ui-modal-title component

@module components
@namespace components
@class UiModalTitle
@constructor
*/
export default Component.extend({
  layout: layout,
  tagName: 'div',
  classNames: ['header'],
});
