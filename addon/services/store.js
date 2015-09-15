import Ember from 'ember';

export default Ember.Service.extend({
    modelFor: function(type) {
        var klass = this.container.lookupFactory('model:' + type);
        return klass.create();
    },
    find: function(type, params) {
        return this.modelFor(type).find(params);
    },
    findOne: function(type, _id) {
        return this.modelFor(type).findOne(_id);
    },
    createRecord: function(type) {
        return this.modelFor(type).createRecord();
    },
    deleteRecord: function(type, model) {
        return this.modelFor(type).deleteRecord(model);
    },
    save: function(type, model) {
        return this.modelFor(type).save(model);
    },
    emptyAttrs: function(type, model, filterKeys, unfilterKeys) {
        var emptyKeys = [];
        var filtered = filterKeys || Ember.keys(this.modelFor(type).model);
        var unfiltered = unfilterKeys || [];
        
        var finallyfiltered = filtered.filter(function(item){
            return unfiltered.indexOf(item) === -1;
        });

        Ember.$.each(finallyfiltered, function(index, key) {
            if (typeof key === "string") {
                if (Ember.isEmpty(model.get(key))) {
                    emptyKeys.push(key);
                }
            }
        });
        return emptyKeys;
    }
});
