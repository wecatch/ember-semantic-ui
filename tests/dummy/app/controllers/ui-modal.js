import Ember from 'ember';
import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        clickHandler(value){
            Ember.Logger.log(`display: ${this.display}`);
            if(value){
                this.set('transition', value);
            }
            this.set('display', true);
            Ember.Logger.log(`display: ${this.display}`);
        },
        clickHandler1(){
            this.toggleProperty('display1');
        },
        onShow(){
            Ember.Logger.log('callback==>onShow')
        },
        onHide(){
            Ember.Logger.log('callback==>onHide')
        },
        onApprove(){
            Ember.Logger.log('callback==>onApprove');
        },
        onDeny(){
            Ember.Logger.log('callback==>onDeny');
            return false;
        },
    }
});
