import Ember from 'ember';
import moment from 'moment';
import Pikaday from 'pikaday';
import layout from '../templates/components/ui-date-input';


let zh_cn = {
    previousMonth : '上一月',
    nextMonth     : '下一月',
    months        : ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
    weekdays      : ['周日','星期一','星期二','星期三','星期四','星期五','星期六'],
    weekdaysShort : ['日','一','二','三','四','五','六']
};

/**
ui-date-input component

@module components
@namespace components
@class UiDateInput 
@constructor
*/
export default Ember.Component.extend({
    layout: layout,
    /**
    display language, by default is zh_CN 
    @property {String} lang
    @default 'zh_CN'
    */
    lang: 'zh_CN',
    tagName: 'div',
    classNameBindings: ['class'],
    /**
    class apply to this component
    @property {String} class
    @default 'ui input'
    */
    class: 'ui input',
    didInsertElement(){
        let self = this;
        let options = {
            field: self.$('input')[0],
            format: self.format,
            position: self.position,
            onSelect: function () {
                if(typeof self.attrs.update === 'function'){
                    self.attrs.update(this.getMoment().format(self.format));
                }
            }
        }
        if(self.lang === 'zh_CN'){
            options.i18n = zh_cn;
        }
        let picker = new Pikaday(options);
        this.set('picker', picker);
    },
    /**
    pikaday position 'bottom right', 'bottom left', 'top left', 'top right'
    @property {String} position
    @default 'bottom left'
    */
    position: 'bottom left',
    /**
    moment format
    @property {String} format
    @default 'YYYY-MM-DD'
    */
    format: 'YYYY-MM-DD',
    init(){
        this._super(...arguments);
        if(this.value && moment(this.value).isValid()){
            this.set('valueDisplay', moment(this.value).format(this.format));
        }
    },
    willDestory(){
        this._super(...arguments);
        this.picker.destroy();
    }
});
