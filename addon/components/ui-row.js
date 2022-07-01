import Component from '@ember/component';
import layout from '../templates/components/ui-row';

/**
ui-row component

@module components
@namespace components
@class UiRow
@constructor
*/
export default Component.extend({
  layout,
  classNameBindings: ['_componentClass'],
  _componentClass: 'row',
});
