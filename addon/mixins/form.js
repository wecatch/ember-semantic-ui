import Ember from "ember";

var FormMixin = Ember.Mixin.create({
    isSaving: false,
    isSuccess: false,
    isError: false,
    needs: ['application'],
    application: function() {
        return this.get('controllers.application');
    }.property(),
    actions: {
        saveForm: function(record) {
            var $this = this;
            var error = '你的网络有问题或网站的服务出了问题';
            this.store.save($this.modelName, record).then(function(data) {
                $this.set('isSaving', false);
                if (data.code === 0) {
                    $this.set('isSuccess', true);
                    $this.set('msg', '修改成功');
                    $this.send('_actionEdit', false);
                    $this.send('_actionCreate', false);
                    try {
                        $this.send('successCallback');
                    } catch (e) {}
                } else {
                    $this.set('isError', true);
                    $this.set('msg', data.msg || error);
                    try {
                        $this.send('errorCallback');
                    } catch (e) {}
                }
            }, function(reason) {
                $this.set('isSaving', false);
                $this.set('isSuccess', false);
                $this.set('isError', true);
                $this.set('msg', error);
                try {
                    $this.send('errorCallback');
                } catch (e) {
                    console.log(reason);
                }
            });
        },
        createForm: function() {
            this.send('_actionCreate', true);
        },
        edit: function() {
            this.send('_actionEdit', true);
        },
        create: function() {
            this.set('model', this.store.createRecord(this.modelName));
            this.send('createForm');
        },
        delete: function() {
            var $this = this;
            this.store.deleteRecord($this.modelName, $this.get('model')).then(function(data) {
                if (data.code === 0) {
                    $this.get('parentController').get("content").removeObject($this.get('model'));
                }
            });
        },
        _actionCreate: function(status) {
            this.set('isSaving', false);
            this.set('isError', false);
            this.set('isSuccess', false);
            this.set('isEditMode', false);
            var modal = "#" + this.get('formModalId');
            if (status) {
                Ember.$(modal).modal('show');
            } else {
                Ember.$(modal).modal('hide');
            }
        },
        _actionEdit: function(status) {
            this.set('isSaving', false);
            this.set('isError', false);
            this.set('isSuccess', false);
            this.set('isCreateMode', false);
            var modal = '#' + this.get('_id');
            if (status) {
                Ember.$(modal).modal('show');
            } else {
                Ember.$(modal).modal('hide');
            }
        }
    },
    isSuccessObserver: Ember.immediateObserver('isSuccess', function() {
        if (this.get('isSuccess')) {
            this.set('isError', false);
            this.set('isSaving', false);
        }
    }),
    isErrorObserver: Ember.immediateObserver('isError', function() {
        if (this.get('isError')) {
            this.set('isSuccess', false);
            this.set('isSaving', false);
        }
    }),
    isSavingObserver: Ember.immediateObserver('isSaving', function() {
        if (this.get('isSaving')) {
            this.set('isSuccess', false);
            this.set('isError', false);
        }
    }),
    formModalId: function() {
        return 'form-' + this.modelName;
    }.property(),
    isTip: function() {
        return this.get('isSuccess') || this.get('isError');
    }.property('isSuccess', 'isError'),
    isEditMode: false,
    isCreateMode: false,
    isEditModeObserver: Ember.immediateObserver('isEditMode', function() {
        this.send('_actionEdit', this.get('isEditMode'));
    }),
    isCreateModeObserver: Ember.immediateObserver('isCreateMode', function() {
        this.send('_actionCreate', this.get('isCreateMode'));
    }),
    msg: '',
});


Ember.FormController = Ember.Controller.extend(FormMixin);


export default FormMixin;