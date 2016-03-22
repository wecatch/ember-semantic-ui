import moment from 'moment';
import Ember from 'ember';
import layout from '../templates/components/ui-date-time-input';

const {observer} = Ember;

const minutes=[];

for (var i = 0; i < 60; i++) {
    if(i<10){
        minutes[i] = {'value':'0'+i, 'name':i};
    }else{
        minutes[i] = {'value':i, 'name':i};
    }
};

const hours = [];

for (var i = 0; i < 24; i++) {
    if(i<10){
        hours[i] = {'value':'0'+i, 'name':i};
    }else {
        hours[i] = {'value':i, 'name':i};
    }
};

export default Ember.Component.extend({
    layout,
    minutes:minutes,
    hours:hours,
    value: null,
    rtime: observer('d,h,m', function(){
        let m = moment(`${this.d} ${this.h}:${this.m}`).format('YYYY-MM-DD HH:mm');
        if(typeof this.attrs.update == 'function'){
            this.attrs.update(m);
        }
    }),
    didInitAttrs(){
        let time = moment(this.value);
        this.set('d', time.format('YYYY-MM-DD'));
        this.set('h', time.hour());
        this.set('m', time.minute());
    }
});
