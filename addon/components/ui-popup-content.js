import Ember from 'ember';
import layout from '../templates/components/ui-popup-content';

/**

ui-popup-content component

@module components
@namespace components
@class UiPopupContent
@constructor
*/
export default Ember.Component.extend({
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
    init(){
        this._super(...arguments);
        if(typeof this.attrs.target){
            Ember.run.scheduleOnce('afterRender', this, function(){
                this.attrs.target.update(this.elementId);
            });
        }
    }
});
