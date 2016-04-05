import Ember from 'ember';

export function rawContent(content) {
    return content[0].join(',')
}

export default Ember.Helper.helper(rawContent);
