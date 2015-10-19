import Ember from 'ember';
import emberUploader from '../utils/ember-uploader';
import {
    fileObject, humanReadableFileSize
}
from '../utils/file-object';

export default Ember.Component.extend({
    actions: {
        start: function(obj) {
            let url = this.get('url'),
                self = this;

            obj.uploader = emberUploader.create({
                url: url
            });

            obj.uploadPromise = obj.uploader.upload(obj.fileToUpload);

            self.sendAction('uploadStart', obj);
            obj.set('isUploading', Ember.computed.alias('uploader.isUploading'));

            obj.uploader.on('progress', function(e) {
                obj.set('percent', parseInt(e.percent));
                self.sendAction('uploadProgress', e);
            });

            obj.uploader.on('didUpload', function(data) {
                obj.set('isUploaded', true);
                obj.set('data', data);

                self.sendAction('uploadSucess', obj);
            });
        },
        abort: function(obj) {
            this.sendAction('uploadAbort', obj);
            if (obj.uploader) {
                try {
                    obj.uploader.abort();
                } catch (e) {

                }
            } else {
                this.get('queue').removeObject(obj);
            }
        },
        deleteFile: function(obj) {
            this.get('queue').removeObject(obj);
            this.sendAction('deleteFile', obj);
        }
    },
    /**
     * The upload url
     *
     * @property {Ember.String} url
     * @default  ""
     */
    url: '',

    /**
     * The root component element
     *
     * @property {Ember.String} tagName
     * @default  "div"
     */
    tagName: 'div',

    /**
     * A array contain class names apply to root element
     *
     * @property {Ember.Array} classNames
     * @default  ""
     */
    classNames: ['ui', 'segment'],

    /**
     * To  allow  file autoUpload
     *
     * @property {Ember.Boolean} forceIframeTransport
     * @default  false
     */
    autoUpload: true,

    /**
     * upload file queue
     *
     * @property {Ember.Array} queue
     * @default  []
     */
    queue: [],

    /**
     * upload multiple file
     *
     * @property {Ember.Boolean} multiple
     * @default  []
     */
    multiple: false,

    /**
     * @function initialize
     * @observes "didInsertElement" event
     * @returns  {void}
     */
    initialize: function(argument) {
        let self = this;
        this.$('input').change(function(e) {
            let input = e.target,
                obj = null;
            if (!Ember.isEmpty(input.files)) {
                for (let i = input.files.length - 1; i >= 0; i--) {
                    let obj = fileObject.create({
                        fileToUpload: input.files[i]
                    });
                    self.queue.pushObject(obj);
                    if (self.autoUpload) {
                        self.send('start', obj);
                    }
                }

                //$(this).after($(this).clone().val(""));
                $(this).val("");
            }
        });
        if (this.get('multiple')) {
            this.$('input').attr('multiple', 'multiple');
        }
    }.on('didInsertElement'),
    /**
     * @function inputStyle
     * 
     * @returns  {string}
     */
    inputStyle: function() {
        let style_array = [
            'opacity: 0',
            'width:100% !important',
            'overflow:hidden',
            'position:relative',
            'left:-100%',
            'display:block',
        ]
        return style_array.join(';');
    }.property(),

    /**
     * @function labelStyle
     * 
     * @returns  {string}
     */
    labelStyle: function() {
        let style_array = [
            'height: 6.25em',
            'line-height: 5.25em',
            'text-align: center',
        ]
        return style_array.join(';');
    }.property(),
});