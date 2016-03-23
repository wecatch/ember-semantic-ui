import moment from 'moment';
import Ember from 'ember';
import layout from '../templates/components/ui-date-time-input';

const {observer} = Ember;

const minutes=[];

for (var i = 0; i < 60; i++) {
    minutes[i] = {'value':i, 'name':i};
};

const hours = [];

for (var i = 0; i < 24; i++) {
    hours[i] = {'value':i, 'name':i};
};

export default Ember.Component.extend({
    layout,
    minutes:minutes,
    hours:hours,
    value: null,
    classNameBindings: ['class'],
    class: '',
    rtime: observer('d,h,m', function(){
        let hour = this.h;
        let minute = this.m;
        let date = moment(this.d);
        let options = {
            year: date.year(), 
            month: date.month(), 
            day: date.day(),
            hour: hour,
            minute: minute,
        }
        let time = moment(options).format('YYYY-MM-DD HH:mm');
        if(typeof this.attrs.update == 'function'){
            this.attrs.update(time);
        }
    }),
    didInitAttrs(){
        if(this.value && moment(this.value).isValid()){
            let time = moment(this.value);
            this.set('d', time.format('YYYY-MM-DD'));
            this.set('h', time.hour());
            this.set('m', time.minute());
        }
    }
});
