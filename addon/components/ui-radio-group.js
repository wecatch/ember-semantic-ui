import Ember from 'ember';
import UiCheckboxGroupBase from '../mixins/ui-checkbox-group-base';

export default Ember.Component.extend(UiCheckboxGroupBase, {
    /**
     * @function initialize step two
     * @observes "didInsertElement" event
     * @returns  {void}
     */
    initialize: function(argument) {
        this.setupChangeEvent();
        this.setupChecked();
    }.on('didInsertElement'),

    setupChangeEvent: function() {
        this.$('input').change(Ember.run.bind(this, function() {
            this.set('value', this.$('input:checked').val());
        }));
    },

    setupChecked: function() {
        let self = this;
        let name = this.get('name');
        let value = this.get('value');

        this.$('input').each(function(index, item) {
            $(item).prop('checked', value === $(item).val());
            $(item).attr('name', name);
        });
    },

    valueChange: Ember.observer('value', function(){
        this.setupChecked();
    }),
    
    optionsChange: function() {
        this.initOptions();
        // when new options was added
        Ember.run.later(this, function() {
            this.setupChecked();
            this.setupChangeEvent();
        }, 100);
    }.observes('options.[]'),
});