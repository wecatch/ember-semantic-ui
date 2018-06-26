import Ember from 'ember';
import Controller from '@ember/controller';

export default Controller.extend({
    value: null,
    actions: {
        checkedCheck(checked, value){
            Ember.Logger.log(`${checked} ${value}`);
        }
    }
});
