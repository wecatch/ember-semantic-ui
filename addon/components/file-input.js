import Ember from 'ember';
import emberUploader from '../utils/ember-uploader';
import {
    fileObject, humanReadableFileSize
}
from '../utils/file-object';


export default Ember.Component.extend(Ember.Evented, {
    fileObject: null,
    style: '',
    uploader: null,
    url: null,
    method: 'POST',
    extra: {},
    paramName: 'file',
    isUploaded: false,
    isUploading: Ember.computed.alias('uploader.isUploading'),
    autoUpload: true,
    theme: 'green',
    /**
     * @function initialize
     * @observes "didInsertElement" event
     * @returns  {void}
     */
    initialize: function(argument) {
        let self = this;
        this.$('input').change(function(e) {
            let input = e.target;
            self.trigger('filesDidChange', input.files);
        });
    }.on('didInsertElement'),
    filesDidChange: function(files) {
        if (!Ember.isEmpty(files)) {
            this.set('fileObject', fileObject.create({
                fileToUpload: files[0]
            }));
            if (this.get('autoUpload')) {
                this.send('start');
            }
        }
    },
    actions: {
        start: function() {
            let uploader = this.get('uploader'),
                fileObject = this.get('fileObject'),
                self = this;
            if (fileObject) {
                uploader.upload(fileObject.fileToUpload);
                this.sendAction('uploadStart', fileObject);

                //progress event
                uploader.on('progress', function(e) {
                    self.sendAction('uploadProgress', e);
                });

                //didupload event
                uploader.on('didUpload', function(data) {
                    self.set('isUploaded', true);
                    fileObject.set('data', data)
                    self.sendAction('uploadSucess', fileObject);
                });
            }
        },
        abort: function() {
            this.get('uploader').abort();
            self.sendAction('uploadAbort');
        }
    },
    init: function() {
        this._super();
        let url = this.get('url'),
            method = this.get('method'),
            paramName = this.get('paramName');
        this.set('uploader', emberUploader.create({
            url: url,
            paramName: paramName,
            type: method
        }));
    },
});