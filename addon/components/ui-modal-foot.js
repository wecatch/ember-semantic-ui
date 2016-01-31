import Ember from 'ember';
import layout from '../templates/components/ui-modal-foot';


export default Ember.Component.extend({
    layout: layout,
	tagName: 'div',
    /**
     * Class names to apply to the model actions
     *
     * @property {Ember.Array} classNames
    */
	classNames: ['actions'],
});
