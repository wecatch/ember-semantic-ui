import Component from '@ember/component';
import layout from '../templates/components/ui-animated-button';
import uiButtonBase from '../mixins/ui-button-base';


/**
ui-animated-button component see {{#crossLink "mixins.UiButtonBase"}}{{/crossLink}}

@module components
@namespace components
@class UiAnimatedButton
@constructor
*/
export default Component.extend(uiButtonBase, {
  layout: layout,
  tagName: 'div',
  _theme: 'animated',
  hidden: 'hidden content',
  visible: 'visible content'
});
