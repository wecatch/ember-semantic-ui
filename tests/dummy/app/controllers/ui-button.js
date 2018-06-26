import Controller from '@ember/controller';

export default Controller.extend({
    value: null,
    actions: {
        clickMe(value){
            alert(value);
        }
    }
});
