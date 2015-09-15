import Ember from 'ember';

export default Ember.Mixin.create(Ember.Evented, {
    rootURL: '',
    rootKey: '',
    url: '',
    primaryKey: '_id',
    api: function() {
        return this.rootURL + this.url;
    }.property('url'),
    save: function(model) {
        var $this = this;
        var primaryKey = this.get('primaryKey');
        var record = {};

        //filter model data
        Ember.$.each(Ember.keys(model), function(index, key) {
            if ($this.model.hasOwnProperty(key)) {
                record[key] = model[key];
            }
        });

        //check if is new data
        var url = this.get('api');
        var method = 'post';
        if (model[primaryKey]) {
            record[primaryKey] = model[primaryKey];
            url = this.get('api') + '/' + model[primaryKey];
            method = 'put';
        }

        return Ember.$.ajax({
            type: method,
            url: url,
            data: record,
            dataType: 'json',
            traditional: true
        }).then(function(data) {
            return data;
        });
    },
    createRecord: function() {
        return Ember.Object.create(this.model);
    },
    deleteRecord: function(model) {
        var $this = this;
        var _id = $this.get('primaryKey');
        return Ember.$.ajax({
            type: 'delete',
            url: $this.get('api') + '/' + model.get(_id),
            dataType: 'json'
        }).then(function(data) {
            return data;
        });
    },
    find: function(params) {
        var $this = this;
        params = $this._filterParams(params);
        return Ember.$.getJSON(this.get('api'), params || {}).then(function(data) {
            var dataList = [];
            Ember.$.each(data.res[$this.get('rootKey')], function(index, i) {
                dataList.push(Ember.Object.create(i));
            });
            return dataList;
        });
    },
    findOne: function(id) {
        var $this = this;
        return Ember.$.getJSON($this.get('api') + '/' + id).then(function(data) {
            return Ember.Object.create(data.res[$this.get('rootKey')]);
        });
    },
    _filterParams: function(params) {
        if (!params) {return;}
        for (var k in params) {
            if (params.hasOwnProperty(k) && !params[k]) {
                delete params[k];
            }
        }
        return params;
    }
});
