import Ember from 'ember';
import layout from '../templates/components/ui-animated-button';
import uiButtonBase from '../mixins/ui-button-base';

export default Ember.Component.extend(uiButtonBase, {
  layout: layout,
  tagName: 'div',
  _theme: 'animated',
  hidden: 'hidden content',
  visible: 'visible content'
});
