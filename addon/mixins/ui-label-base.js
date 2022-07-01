import Mixin from '@ember/object/mixin';

/**
ui-label-base mixin

@module mixins
@namespace mixins
@class UiLabelBase 
@constructor
*/
export default Mixin.create({
  tagName: 'div',
  classNameBindings: [
    '_uiClass',
    '_theme',
    'class',
    'theme',
    '_componentClass',
  ],
  _uiClass: 'ui',
  _componentClass: 'label',
  _theme: '',
  /**
   * label class
   *
   * @property {String} class
   * @default  ''
   */
  class: '',
  /**
   * lable theme
   *
   * @property {String} theme
   * @default  ''
   */
  theme: '',
});
