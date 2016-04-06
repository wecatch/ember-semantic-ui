import Ember from 'ember';

export default Ember.Controller.extend({
    value: null,
    currentPopup: null,
    actions: {
        onPopupShow(value, popup){
            this.set('value', new Date());
            this.set('currentPopup', popup);
        },
        save(){
            this.currentPopup.hide();
        },
        cancel(){
            this.currentPopup.hide();
        }
    }
});
