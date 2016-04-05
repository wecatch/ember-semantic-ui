import Ember from 'ember';

export default Ember.Controller.extend({
    value: null,
    actions: {
        checkedCheck(checked, value){
            console.log(`${checked} ${value}`);
        }
    }
});
