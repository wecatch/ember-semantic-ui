/* eslint-disable ember/no-jquery */
// this file contains source code from  https://github.com/benefitcloud/ember-uploader
// thanks to this great project

import { isArray } from '@ember/array';
import EmberObject from '@ember/object';
import Evented from '@ember/object/evented';
import { run } from '@ember/runloop';
import $ from 'jquery';
import { Promise } from 'rsvp';
import { tracked } from '@glimmer/tracking';

/**
EmberUploader class

@module utils
@namespace utils
@class EmberUploader
@constructor
*/
export default class EmberUploader extends EmberObject.extend(Evented) {
  constructor({ url, paramName, type, traditional }) {
    super();
    this.url = url;
    this.paramName = paramName ?? 'file';
    this.type = type ?? 'POST';
    this.traditional = traditional ?? 'true';
  }

  /**
   * upload url
   *
   * @property {String} url
   *
   */
  url = null;
  paramNamespace = null;
  /**
   * upload file parameter name
   *
   * @property {String} paramName
   * @default 'file'
   */
  paramName = 'file';
  /**
   * ajax request settings traditional, by default false
   *
   * @property {Boolean} traditional
   * @default true
   */
  traditional = true;

  /**
   * ajax request status
   *
   * @property {Boolean} isUploading
   * @default false
   */
  @tracked isUploading = false;

  /**
   * ajax request type (method), by default it will be POST
   *
   * @property {String} type
   * @default 'POST'
   */
  type = 'POST';

  /**
   * Start upload of files and extra data
   *
   * @param  {object|array} files  One file object or one array of files object
   * @param  {array} extra
   * @return {object}       jquery promise from ajax object
   */
  upload(files, extra) {
    extra = extra || {};
    var data = this.setupFormData(files, extra);
    var url = this.url;
    var type = this.type;
    this.isUploading = true;
    return this.ajax(url, data, type);
  }

  setupFormData(files, extra) {
    var formData = new FormData();

    for (var prop of Object.keys(extra)) {
      formData.append(this.toNamespacedParam(prop), extra[prop]);
    }

    // if is a array of files ...
    if (isArray(files)) {
      var paramName;

      for (var i = files.length - 1; i >= 0; i--) {
        if (this.traditional) {
          paramName = this.toNamespacedParam(this.paramName);
        } else {
          paramName = this.toNamespacedParam(this.paramName) + '[' + i + ']';
        }
        formData.append(paramName, files[i]);
      }
    } else {
      // if has only one file object ...
      formData.append(this.toNamespacedParam(this.paramName), files);
    }

    return formData;
  }

  toNamespacedParam(name) {
    if (this.paramNamespace) {
      return this.paramNamespace + '[' + name + ']';
    }

    return name;
  }

  didUpload(data) {
    this.isUploading = false;
    this.trigger('didUpload', data);
    return data;
  }

  didError(jqXHR, textStatus, errorThrown) {
    this.isUploading = false;
    // Borrowed from Ember Data
    var isObject = jqXHR !== null && typeof jqXHR === 'object';

    if (isObject) {
      jqXHR.then = null;
      if (!jqXHR.errorThrown) {
        if (typeof errorThrown === 'string') {
          jqXHR.errorThrown = new Error(errorThrown);
        } else {
          jqXHR.errorThrown = errorThrown;
        }
      }
    }

    this.trigger('didError', jqXHR, textStatus, errorThrown);

    return jqXHR;
  }

  didProgress(e) {
    e.percent = (e.loaded / e.total) * 100;
    this.trigger('progress', e);
  }

  abort() {
    this.isUploading = false;
    this.trigger('isAborting');
  }

  ajaxSettings(url, params, method) {
    var self = this;
    return {
      url: url,
      type: method || 'POST',
      contentType: false,
      processData: false,
      traditional: self.traditional,
      dataType: 'json',
      xhr: function () {
        var xhr = $.ajaxSettings.xhr();
        xhr.upload.onprogress = function (e) {
          self.didProgress(e);
        };
        self.one('isAborting', function () {
          xhr.abort();
        });
        return xhr;
      },
      data: params,
    };
  }

  ajax(url, params, method) {
    return this._ajax(this.ajaxSettings(url, params, method));
  }

  _ajax(settings) {
    var self = this;

    return new Promise(function (resolve, reject) {
      settings.success = function (data) {
        run(null, resolve, self.didUpload(data));
      };

      settings.error = function (jqXHR, responseText, errorThrown) {
        run(null, reject, self.didError(jqXHR, responseText, errorThrown));
      };

      $.ajax(settings);
    });
  }
}
