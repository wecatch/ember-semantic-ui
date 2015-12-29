import Ember from 'ember';

export default Ember.Component.extend({
    classNames: '',
    classNameBindings: ['class'],
    tagName: 'div',
    modelName: '',
    model: null,
    value: null,
    valuePath: 'value',
    labelPath: 'name',
    label: '选中项',
    selectedNames: null,
    formatOptions: function(options){
        let new_options = [];
        let labelPath = this.get('labelPath');
        let valuePath = this.get('valuePath');
        let value = this.initValues();

        for (let i = 0; i < options.length; i++) {
            new_options.push({
                name: options[i][labelPath],
                value: options[i][valuePath],
                selected: value.indexOf(options[i][valuePath]) > -1,
            })
        };
        this.set('model', new_options)
    },

    initialize: function(){
        let labelPath = this.get('labelPath');
        let valuePath = this.get('valuePath');
        let value = this.initValues();
        let selectedNames = this.get('selectedNames');
        let selectedOptions = this.get('selectedOptions');
        if (selectedOptions) {
            for (let i = 0; i < selectedOptions.length; i++) {
                value.pushObject(selectedOptions[i][valuePath])
                selectedNames.pushObject(selectedOptions[i][labelPath])
            };
        }
    }.on('init'),

    refreshVals: function(){
        let value = this.get('value')
        if (!value || value == []) this.initValues();
    }.observes('value'),

    initValues: function(){
        let value = this.get('value');
        if (!value) {
            this.set('selectedNames', [])
            this.set('value', [])
            this.set('model', [])
            value = [];
        }

        return value;
    },
    init: function(){
        this._super(...arguments);
        this.initValues();
    },
    actions: {
        onInputChange(name){
            let that = this;
            if (name.length > 0) {
                this.get('store').find(this.modelName, {name: name}).then(function(options){
                    that.formatOptions(options)
                })
                return;
            }
            that.formatOptions([])
        },

        clearSearch(){
            this.set('model', [])
        },

        removeSelect(name){
            let selectedNames = this.get('selectedNames');
            let index = selectedNames.indexOf(name);
            let model = this.get('model');
            let valuePath = this.get('valuePath');
            let labelPath = this.get('labelPath');
            let value = this.get('value');
            // remove select name
            selectedNames.removeObject(name);

            // remove selected status
            for (let i = 0; i < model.length; i++) {
                if (value[index] == model[i]['value']) {
                    Ember.set(model[i], 'selected', false);
                }
            };

            // remove value
            value.removeObject(value[index]);
        },

        toggleSelect(item){
            Ember.set(item, 'selected', !item.selected)
            let selectedNames = this.get('selectedNames');
            let value = this.initValues();
            let index = selectedNames.indexOf(item.name)
            if (index > -1) {
                selectedNames.removeObject(item.name);
                value.removeObject(item.value);
            } else {
                selectedNames.pushObject(item.name)
                value.pushObject(item.value)
            }
        }
    }
});
