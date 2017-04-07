import Ember from 'ember';
import emberUploader from '../utils/ember-uploader';
import { fileObject } from '../utils/file-object';


/**
file-input-base mixinx

@module mixins
@namespace mixins
@class FileInputBase
@extends Ember.Evented
@constructor
*/
export default Ember.Mixin.create(Ember.Evented, {
    /**
     * file request ajax setting traditional, by default true
     * @property {boolean} traditional
     * 
     */
    traditional: true,
    /**
     * file object instance see {{#crossLink " file-object"}}{{/crossLink}}
     * @property {Object} fileObject
     * 
     */
    fileObject: null,
    /**
     * style
     * @property {String} style
     * 
     */
    style: '',
    /**
     * ember uploader instance see {{#crossLink "utils.EmberUploader"}}{{/crossLink}}
     * 
     * @property {Object} uploader
     * 
    */
    uploader: null,
    /**
     * upload url
     * 
     * @property {String} url
     * 
    */
    url: null,
    /**
     * upload request method
     * 
     * @property {String} method
     * @default 'POST'
     * 
    */
    method: 'POST',
    /**
     * extra parameters for upload
     * 
     * @property {Object} extra
     * @default null
     * 
    */
    extra: null,
    /**
     * the upload file parameter name
     * 
     * @property {String} paramName
     * @default 'file'
     * 
    */
    paramName: 'file',
    /**
     * the upload file is finished
     * 
     * @property {Boolean} isUploaded
     * @default false
     * 
    */
    isUploaded: false,
    /**
     * the upload request status
     * 
     * @property {Boolean} isUploading
     * @default false
     * 
    */
    isUploading: Ember.computed.alias('uploader.isUploading'),
    /**
     * allow autoUpload
     * 
     * @property {Boolean} autoUpload
     * @default true
     * 
    */
    autoUpload: true,

    /**
     *  multiple file or not, by default false
     * 
     * @property {Boolean} multiple
     * @default false
     * 
    */
    multiple: false,
    
    theme: 'green',
    didInsertElement: function() {
        let self = this;
        this.$('input').change(function(e) {
            let input = e.target;
            self.trigger('filesDidChange', input.files);
        });
    },
    filesDidChange: function(files) {
        if(Ember.isArray(files)){
            this.send('start', files);
        }else if (!Ember.isEmpty(files)) {
            this.set('fileObject', fileObject.create({
                fileToUpload: files[0]
            }));
            if (this.get('autoUpload')) {
                this.send('start');
            }
        }
    },
    actions: {
        /**
         * start upload action
         * 
         * @event start
         * 
         * 
        */
        start: function(files) {
            let { uploader, fileObject, extra} = this.getProperties('uploader', 'fileObject', 'extra');
            let self = this;
            if(files){
                let fa = Ember.A({content: files});
                uploader.upload(files, extra);
                this.sendAction('uploadStart', fa);
                uploader.on('didUpload', function(data) {
                    self.set('isUploaded', true);
                    //empty input file
                    self.$('input').val("");
                    self.sendAction('uploadSuccess', fa, data);
                });
            }else if (fileObject) {
                uploader.upload(fileObject.fileToUpload, extra);
                this.sendAction('uploadStart', fileObject);
                //didupload event
                uploader.on('didUpload', function(data) {
                    self.set('isUploaded', true);
                    fileObject.set('data', data);
                    //empty input file
                    self.$('input').val("");
                    self.sendAction('uploadSuccess', fileObject, data);
                });
            }

            //progress event
            uploader.on('progress', function(e) {
                self.sendAction('uploadProgress', e);
            });

        },
       /**
         * abort upload action
         * 
         * @event abort
         * 
         * 
        */
        abort: function() {
            this.get('uploader').abort();
            this.sendAction('uploadAbort');
            //empty input file
            this.$('input').val("");
        }
    },
    init: function() {
        this._super(...arguments);
        let { url, method, paramName} = this.getProperties('url', 'method', 'paramName');
        this.set('uploader', emberUploader.create({
            url: url,
            paramName: paramName,
            type: method,
            traditional: this.get('traditional')
        }));
    },
    willDestroy(){
        this._super(...arguments);
        this.set('uploader', null);
    }
});
