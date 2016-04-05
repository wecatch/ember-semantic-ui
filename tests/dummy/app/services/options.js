import Ember from 'ember';

export default Ember.Service.extend({
    options: [
        {'name':'google', 'value':'google'},
        {'name':'apple', 'value':'apple'},
        {'name':'dropbox', 'value':'dropbox'},
        {'name':'twitter', 'value':'twitter'},
        {'name':'facebook', 'value':'facebook'},
    ]
});
