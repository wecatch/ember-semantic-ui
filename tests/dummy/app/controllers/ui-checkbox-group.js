import Ember from 'ember';

export default Ember.Controller.extend({
    init(){
        this._super(...arguments);
        this.set('checkvalue', Ember.A());
        this.set('checkvalue2', Ember.A());
        this.set('checkvalue3', Ember.A());
    },
    checkvalueChane: Ember.observer('checkvalue.[],checkvalue2.[],checkvalue3.[]', function function_name() {
        this.set('checkvalueShow', this.checkvalue.toArray());
        this.set('checkvalueShow2', this.checkvalue2.toArray());
        this.set('checkvalueShow3', this.checkvalue3.toArray());

    })
});
