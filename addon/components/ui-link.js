import Ember from 'ember';

export default Ember.Component.extend({
    classNames: 'ui field',
    classNameBindings: ['class'],
    tagName: 'div',
    display_model: [],
    actions: {
        addLink(){
            let model = this.get('model');
            let new_url = {name: '', value: ''}
            model.pushObject(new_url);
        },
        removeLink(item){
            let model = this.get('model');
            model.removeObject(item)
        },
    },

    initialize: function(){
    }.on('init'),
});
