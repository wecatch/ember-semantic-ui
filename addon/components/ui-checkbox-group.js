import Ember from 'ember';
import UiCheckboxGroupBase from '../mixins/ui-checkbox-group-base';

export default Ember.Component.extend(UiCheckboxGroupBase, {

    /**
     * @function initialize
     * @observes "didInsertElement" event
     * @returns  {void}
     */
    initialize: function(argument) {
        this.setupChangeEvent();
        this.setupChecked();
    }.on('didInsertElement'),

    /**
     * @function setupOptions
     * @observes "options" propety
     * @returns  {void}
     */
    optionsChange: function() {
        this.initOptions();
        // when new options was added
        Ember.run.later(this, function() {
            this.setupChecked();
            this.setupChangeEvent();
        }, 100);
    }.observes('options.[]'),

    setupChangeEvent: function() {
        this.$('input').change(Ember.run.bind(this, function() {
            var newValue = this.$('input:checked').map(function(index, item) {
                return $(item).val();
            });
            this.set('value', newValue.toArray());
        }));
    },

    valueChange: Ember.observer('value.[]', function() {
        this.setupChecked();
    }),

    setupChecked: function() {
        let self = this;
        this.$('input').each(function(index, item) {
            if (self.get('value').indexOf($(item).val()) >= 0) {
                $(item).prop('checked', true);
            }
        });
    }.observes('value')
});