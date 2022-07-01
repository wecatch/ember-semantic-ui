import Component from '@ember/component';
import layout from '../templates/components/ui-menu';

/**
ui-menu component

@module components
@namespace components
@class UiMenu
@constructor
*/
export default Component.extend({
  layout,
  classNameBindings: ['_uiClass', '_componentClass'],
  _uiClass: 'ui',
  _componentClass: 'menu',
});
