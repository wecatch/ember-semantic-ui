import layout from './ui-modal-content';
import Component from '@ember/component';

/**
ui-modal-content component

@module components
@namespace components
@class UiModalContent
@constructor
*/
export default Component.extend({
  layout: layout,
  tagName: 'div',
  classNameBindings: ['theme', '_componentClass'],
  /**
   * Class name to apply to the modal-content
   *
   * @property {String} theme
   */
  theme: '',
  /**
   * Class name to apply to modal-content
   *
   * @property {String} class
   */
  class: '',
  _componentClass: 'content',
});
