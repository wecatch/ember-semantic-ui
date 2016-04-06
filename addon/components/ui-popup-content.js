import Ember from 'ember';
import layout from '../templates/components/ui-popup-content';

export default Ember.Component.extend({
    layout,
    classNameBindings: ['_ui', 'class', '_componentClass'],
    class: 'flowing',
    _ui: 'ui',
    _componentClass: 'popup',
    target: null,
    didInitAttrs(){
        if(typeof this.attrs.target){
            Ember.run.scheduleOnce('afterRender', this, function(){
                this.attrs.target.update(this.elementId);
            });
        }
    }
});
