import Ember from 'ember';

export function rawContent(content) {
    let rcontent = Ember.$.trim(content);
    return Ember.String.htmlSafe('<pre>'+rcontent+'</pre>');
}

export default Ember.Helper.helper(rawContent);
