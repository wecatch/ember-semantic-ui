import Ember from 'ember';
import layout from '../templates/components/ui-dropdown-menu';

export default Ember.Component.extend({
    layout: layout,
    /**
     * the select theme
     *
     * @property {Ember.String} theme
     */
    theme: 'fluid',
    /**
     * Class names to apply to the button
     *
     * @property {Ember.Array} classNames
     */
    classNameBindings: ['_uiClass', 'theme', '_componentClass'],
    _uiClass: 'ui',
    _componentClass: 'dropdown',
    didInsertElement() {
        this.renderDropDown();
    },
    renderDropDown() {
        this.$().dropdown();
    }
});