import Component from '@ember/component';
import { scheduleOnce } from '@ember/runloop';

import layout from '../templates/components/ui-popup-content';

/**

ui-popup-content component

@module components
@namespace components
@class UiPopupContent
@constructor
*/
export default Component.extend({
  layout,
  classNameBindings: ['_ui', 'class', '_componentClass'],
  class: 'flowing',
  _ui: 'ui',
  _componentClass: 'popup',
  /**
    target which pop this component
    @property {function} target
    */
  target: null,
  init() {
    this._super(...arguments);
    if (typeof this.attrs.target) {
      scheduleOnce('afterRender', this, function () {
        this.attrs.target.update(this.elementId);
      });
    }
  },
});
