import Ember from 'ember';
import layout from '../templates/components/ui-modal-title';


export default Ember.Component.extend({
    layout: layout,
	tagName: 'div',
    /**
     * Class names to apply to the model title
     *
     * @property {Ember.Array} classNames
     */
    classNames: [ 'header'],
});
