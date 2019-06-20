"use strict";



define('dummy/app', ['exports', 'dummy/resolver', 'ember-load-initializers', 'dummy/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });


    const App = Ember.Application.extend({
        modulePrefix: _environment.default.modulePrefix,
        podModulePrefix: _environment.default.podModulePrefix,
        Resolver: _resolver.default
    });

    Ember.LinkComponent.reopen({
        click() {
            this._super(...arguments);
            Ember.$('html,body').animate({
                scrollTop: '0px'
            }, 200);
        }
    });

    (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

    exports.default = App;
});
define('dummy/components/code-highlight/component', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });


    const {
        Handlebars: {
            Utils
        }
    } = Ember;

    hljs.configure({ useBR: true, tabReplace: '    ' });

    exports.default = Ember.Component.extend({
        tagName: 'pre',
        // classNameBindings:['lang'],
        lang: 'handlebars',
        didInsertElement() {
            this._super(...arguments);
            hljs.highlightBlock(this.$('code')[0]);
            // hljs.initHighlightingOnLoad();
        },
        codeBlock: Ember.computed('code', {
            get() {
                let code = Utils.escapeExpression(this.attrs.code);
                return Ember.String.htmlSafe(hljs.fixMarkup(code));
            }
        })
    });
});
define("dummy/components/code-highlight/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "YINR2xQ/", "block": "{\"symbols\":[],\"statements\":[[6,\"code\"],[10,\"class\",\"handlebars\"],[8],[0,\"\\n    \"],[1,[20,\"codeBlock\"],false],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/components/code-highlight/template.hbs" } });
});
define('dummy/components/file-input', ['exports', 'ember-semantic-ui/components/file-input'], function (exports, _fileInput) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fileInput.default;
    }
  });
});
define('dummy/components/ui-animated-button', ['exports', 'ember-semantic-ui/components/ui-animated-button'], function (exports, _uiAnimatedButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiAnimatedButton.default;
    }
  });
});
define('dummy/components/ui-button', ['exports', 'ember-semantic-ui/components/ui-button'], function (exports, _uiButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiButton.default;
    }
  });
});
define('dummy/components/ui-checkbox-group', ['exports', 'ember-semantic-ui/components/ui-checkbox-group'], function (exports, _uiCheckboxGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiCheckboxGroup.default;
    }
  });
});
define('dummy/components/ui-checkbox', ['exports', 'ember-semantic-ui/components/ui-checkbox'], function (exports, _uiCheckbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiCheckbox.default;
    }
  });
});
define('dummy/components/ui-column', ['exports', 'ember-semantic-ui/components/ui-column'], function (exports, _uiColumn) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiColumn.default;
    }
  });
});
define('dummy/components/ui-container', ['exports', 'ember-semantic-ui/components/ui-container'], function (exports, _uiContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiContainer.default;
    }
  });
});
define('dummy/components/ui-date-input', ['exports', 'ember-semantic-ui/components/ui-date-input'], function (exports, _uiDateInput) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiDateInput.default;
    }
  });
});
define('dummy/components/ui-date-time-input', ['exports', 'ember-semantic-ui/components/ui-date-time-input'], function (exports, _uiDateTimeInput) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiDateTimeInput.default;
    }
  });
});
define('dummy/components/ui-dropdown-menu', ['exports', 'ember-semantic-ui/components/ui-dropdown-menu'], function (exports, _uiDropdownMenu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiDropdownMenu.default;
    }
  });
});
define('dummy/components/ui-form-input', ['exports', 'ember-semantic-ui/components/ui-form-input'], function (exports, _uiFormInput) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiFormInput.default;
    }
  });
});
define('dummy/components/ui-form', ['exports', 'ember-semantic-ui/components/ui-form'], function (exports, _uiForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiForm.default;
    }
  });
});
define('dummy/components/ui-grid', ['exports', 'ember-semantic-ui/components/ui-grid'], function (exports, _uiGrid) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiGrid.default;
    }
  });
});
define('dummy/components/ui-input-tags', ['exports', 'ember-semantic-ui/components/ui-input-tags'], function (exports, _uiInputTags) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiInputTags.default;
    }
  });
});
define('dummy/components/ui-input', ['exports', 'ember-semantic-ui/components/ui-input'], function (exports, _uiInput) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiInput.default;
    }
  });
});
define('dummy/components/ui-label', ['exports', 'ember-semantic-ui/components/ui-label'], function (exports, _uiLabel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiLabel.default;
    }
  });
});
define('dummy/components/ui-labeled-button', ['exports', 'ember-semantic-ui/components/ui-labeled-button'], function (exports, _uiLabeledButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiLabeledButton.default;
    }
  });
});
define('dummy/components/ui-labeled-input', ['exports', 'ember-semantic-ui/components/ui-labeled-input'], function (exports, _uiLabeledInput) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiLabeledInput.default;
    }
  });
});
define('dummy/components/ui-left-labeled-button', ['exports', 'ember-semantic-ui/components/ui-left-labeled-button'], function (exports, _uiLeftLabeledButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiLeftLabeledButton.default;
    }
  });
});
define('dummy/components/ui-menu', ['exports', 'ember-semantic-ui/components/ui-menu'], function (exports, _uiMenu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiMenu.default;
    }
  });
});
define('dummy/components/ui-message', ['exports', 'ember-semantic-ui/components/ui-message'], function (exports, _uiMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiMessage.default;
    }
  });
});
define('dummy/components/ui-modal-content', ['exports', 'ember-semantic-ui/components/ui-modal-content'], function (exports, _uiModalContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiModalContent.default;
    }
  });
});
define('dummy/components/ui-modal-foot', ['exports', 'ember-semantic-ui/components/ui-modal-foot'], function (exports, _uiModalFoot) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiModalFoot.default;
    }
  });
});
define('dummy/components/ui-modal-title', ['exports', 'ember-semantic-ui/components/ui-modal-title'], function (exports, _uiModalTitle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiModalTitle.default;
    }
  });
});
define('dummy/components/ui-modal', ['exports', 'ember-semantic-ui/components/ui-modal'], function (exports, _uiModal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiModal.default;
    }
  });
});
define('dummy/components/ui-multi-select', ['exports', 'ember-semantic-ui/components/ui-multi-select'], function (exports, _uiMultiSelect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiMultiSelect.default;
    }
  });
});
define('dummy/components/ui-pointing-label', ['exports', 'ember-semantic-ui/components/ui-pointing-label'], function (exports, _uiPointingLabel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiPointingLabel.default;
    }
  });
});
define('dummy/components/ui-popup-content', ['exports', 'ember-semantic-ui/components/ui-popup-content'], function (exports, _uiPopupContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiPopupContent.default;
    }
  });
});
define('dummy/components/ui-popup', ['exports', 'ember-semantic-ui/components/ui-popup'], function (exports, _uiPopup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiPopup.default;
    }
  });
});
define('dummy/components/ui-progress', ['exports', 'ember-semantic-ui/components/ui-progress'], function (exports, _uiProgress) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiProgress.default;
    }
  });
});
define('dummy/components/ui-radio-group', ['exports', 'ember-semantic-ui/components/ui-radio-group'], function (exports, _uiRadioGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiRadioGroup.default;
    }
  });
});
define('dummy/components/ui-radio', ['exports', 'ember-semantic-ui/components/ui-radio'], function (exports, _uiRadio) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiRadio.default;
    }
  });
});
define('dummy/components/ui-row', ['exports', 'ember-semantic-ui/components/ui-row'], function (exports, _uiRow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiRow.default;
    }
  });
});
define('dummy/components/ui-segment', ['exports', 'ember-semantic-ui/components/ui-segment'], function (exports, _uiSegment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiSegment.default;
    }
  });
});
define('dummy/components/ui-select', ['exports', 'ember-semantic-ui/components/ui-select'], function (exports, _uiSelect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiSelect.default;
    }
  });
});
define('dummy/components/ui-tab-menu', ['exports', 'ember-semantic-ui/components/ui-tab-menu'], function (exports, _uiTabMenu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiTabMenu.default;
    }
  });
});
define('dummy/components/ui-tab-segment', ['exports', 'ember-semantic-ui/components/ui-tab-segment'], function (exports, _uiTabSegment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiTabSegment.default;
    }
  });
});
define('dummy/components/ui-text-container', ['exports', 'ember-semantic-ui/components/ui-text-container'], function (exports, _uiTextContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiTextContainer.default;
    }
  });
});
define('dummy/components/ui-uploader', ['exports', 'ember-semantic-ui/components/ui-uploader'], function (exports, _uiUploader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiUploader.default;
    }
  });
});
define('dummy/components/ui-vertical-menu', ['exports', 'ember-semantic-ui/components/ui-vertical-menu'], function (exports, _uiVerticalMenu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uiVerticalMenu.default;
    }
  });
});
define('dummy/controllers/application', ['exports', 'dummy/config/environment'], function (exports, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        routeName: Ember.computed('currentPath', {
            get() {
                return Ember.String.capitalize(Ember.String.camelize(this.get('currentPath')));
            }
        }),
        host: Ember.computed('routeName', {
            get() {
                let host = window.location.origin + _environment.default.baseURL;
                let routeName = this.get('routeName');
                if (routeName === 'Index' || routeName === 'Layout') {
                    return '';
                }

                let p = `docs/classes/components.${routeName}.html`;
                return `${host}${p}`;
            }
        })
    });
});
define('dummy/controllers/ui-button', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        value: null,
        actions: {
            clickMe(value) {
                alert(value);
            }
        }
    });
});
define('dummy/controllers/ui-checkbox-group', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        init() {
            this._super(...arguments);
            this.set('checkvalue', Ember.A());
            this.set('checkvalue2', Ember.A());
            this.set('checkvalue3', Ember.A());
        },
        checkvalueChane: Ember.observer('checkvalue.[],checkvalue2.[],checkvalue3.[]', function function_name() {
            this.set('checkvalueShow', this.checkvalue.toArray());
            this.set('checkvalueShow2', this.checkvalue2.toArray());
            this.set('checkvalueShow3', this.checkvalue3.toArray());
        })
    });
});
define('dummy/controllers/ui-checkbox', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        value: null,
        actions: {
            checkedCheck(checked, value) {
                Ember.Logger.log(`${checked} ${value}`);
            }
        }
    });
});
define('dummy/controllers/ui-form-input', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        result: Ember.A(),
        actions: {
            onchange(e) {
                this.send('log', e);
            },
            onfocus(e) {
                this.send('log', e);
            },
            onfocusin(e) {
                this.send('log', e);
            },
            onfocusout(e) {
                this.send('log', e);
            },
            log(e) {
                this.result.insertAt(0, { 'type': e.type, 'value': e.target.value, 'time': new Date().toTimeString() });
            }
        }
    });
});
define('dummy/controllers/ui-input-tags', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        value: Ember.A(['google']),
        valueShow: Ember.computed('value.[]', {
            get() {
                return this.value.join(',');
            }
        }),
        value1Show: Ember.computed('value1.[]', {
            get() {
                return this.value1 && this.value1.join(',');
            }
        }),
        value2Show: Ember.computed('value2.[]', {
            get() {
                return this.value2 && this.value2.join(',');
            }
        }),
        actions: {
            changeValue2() {
                this.set('value2', Ember.A(['google']));
                Ember.run.later(this, function () {
                    this.get('value2').addObject('apple');
                }, 1000);
            }
        }
    });
});
define('dummy/controllers/ui-input', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        result: 0,
        actions: {
            onfocus(e) {
                this.send('log', e);
            },
            log() {
                this.set('result', this.result + 1);
            }
        }
    });
});
define('dummy/controllers/ui-modal', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        actions: {
            clickHandler(value) {
                Ember.Logger.log(`display: ${this.display}`);
                if (value) {
                    this.set('transition', value);
                }
                this.set('display', true);
                Ember.Logger.log(`display: ${this.display}`);
            },
            clickHandler1() {
                this.toggleProperty('display1');
            },
            onShow() {
                Ember.Logger.log('callback==>onShow');
            },
            onHide() {
                Ember.Logger.log('callback==>onHide');
            },
            onApprove() {
                Ember.Logger.log('callback==>onApprove');
            },
            onDeny() {
                Ember.Logger.log('callback==>onDeny');
                return false;
            }
        }
    });
});
define('dummy/controllers/ui-multi-select', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        value: Ember.A(),
        valueShow: Ember.computed('value', function () {
            Ember.Logger.log(this.value.toArray());
            // return this.value.toArray();
        })
    });
});
define('dummy/controllers/ui-popup', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        value: null,
        currentPopup: null,
        actions: {
            onPopupShow(value, popup) {
                this.set('value', new Date());
                this.set('currentPopup', popup);
            },
            save() {
                this.currentPopup.hide();
            },
            cancel() {
                this.currentPopup.hide();
            }
        }
    });
});
define('dummy/controllers/ui-progress', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        value: 0,
        actions: {
            plus() {
                this.set('value', this.value + 5);
            },
            minus() {
                this.set('value', this.value - 5);
            }
        }
    });
});
define('dummy/controllers/ui-select', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        value: ''
    });
});
define('dummy/ember-semantic-ui/tests/addon.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | addon');

  QUnit.test('addon/components/file-input.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/file-input.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/ui-animated-button.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/ui-animated-button.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/ui-button.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/ui-button.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/ui-checkbox-group.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/ui-checkbox-group.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/ui-checkbox.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/ui-checkbox.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/ui-column.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/ui-column.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/ui-container.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/ui-container.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/ui-date-input.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/ui-date-input.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/ui-date-time-input.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'addon/components/ui-date-time-input.js should pass ESLint\n\n55:24 - Do not use this.attrs (ember/no-attrs-in-components)\n56:18 - Do not use this.attrs (ember/no-attrs-in-components)');
  });

  QUnit.test('addon/components/ui-dropdown-menu.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'addon/components/ui-dropdown-menu.js should pass ESLint\n\n46:18 - Do not use this.attrs (ember/no-attrs-in-components)');
  });

  QUnit.test('addon/components/ui-form-input.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/ui-form-input.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/ui-form.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/ui-form.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/ui-grid.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/ui-grid.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/ui-input-tags.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'addon/components/ui-input-tags.js should pass ESLint\n\n66:24 - Do not use this.attrs (ember/no-attrs-in-components)\n67:18 - Do not use this.attrs (ember/no-attrs-in-components)\n72:24 - Do not use this.attrs (ember/no-attrs-in-components)\n73:18 - Do not use this.attrs (ember/no-attrs-in-components)');
  });

  QUnit.test('addon/components/ui-input.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/ui-input.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/ui-label.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/ui-label.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/ui-labeled-button.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/ui-labeled-button.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/ui-left-labeled-button.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/ui-left-labeled-button.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/ui-menu.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/ui-menu.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/ui-message.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'addon/components/ui-message.js should pass ESLint\n\n107:28 - Do not use this.attrs (ember/no-attrs-in-components)\n108:22 - Do not use this.attrs (ember/no-attrs-in-components)');
  });

  QUnit.test('addon/components/ui-modal-content.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/ui-modal-content.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/ui-modal-foot.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/ui-modal-foot.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/ui-modal-title.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/ui-modal-title.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/ui-modal.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'addon/components/ui-modal.js should pass ESLint\n\n22:28 - Do not use this.attrs (ember/no-attrs-in-components)\n23:22 - Do not use this.attrs (ember/no-attrs-in-components)\n25:17 - Use closure actions, unless you need bubbling (ember/closure-actions)\n33:28 - Do not use this.attrs (ember/no-attrs-in-components)\n34:22 - Do not use this.attrs (ember/no-attrs-in-components)\n36:17 - Use closure actions, unless you need bubbling (ember/closure-actions)');
  });

  QUnit.test('addon/components/ui-multi-select.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/ui-multi-select.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/ui-pointing-label.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/ui-pointing-label.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/ui-popup-content.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'addon/components/ui-popup-content.js should pass ESLint\n\n28:12 - Unexpected constant condition. (no-constant-condition)\n28:24 - Do not use this.attrs (ember/no-attrs-in-components)\n30:22 - Do not use this.attrs (ember/no-attrs-in-components)');
  });

  QUnit.test('addon/components/ui-popup.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'addon/components/ui-popup.js should pass ESLint\n\n22:15 - Do not use this.attrs (ember/no-attrs-in-components)');
  });

  QUnit.test('addon/components/ui-progress.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/ui-progress.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/ui-radio-group.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/ui-radio-group.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/ui-radio.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/ui-radio.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/ui-row.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/ui-row.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/ui-segment.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/ui-segment.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/ui-select.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/ui-select.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/ui-tab-menu.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/ui-tab-menu.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/ui-tab-segment.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/ui-tab-segment.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/ui-text-container.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/ui-text-container.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/ui-uploader.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'addon/components/ui-uploader.js should pass ESLint\n\n69:13 - Use closure actions, unless you need bubbling (ember/closure-actions)\n89:13 - Use closure actions, unless you need bubbling (ember/closure-actions)');
  });

  QUnit.test('addon/components/ui-vertical-menu.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/ui-vertical-menu.js should pass ESLint\n\n');
  });

  QUnit.test('addon/mixins/file-input-base.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'addon/mixins/file-input-base.js should pass ESLint\n\n145:17 - Use closure actions, unless you need bubbling (ember/closure-actions)\n154:17 - Use closure actions, unless you need bubbling (ember/closure-actions)\n180:13 - Use closure actions, unless you need bubbling (ember/closure-actions)');
  });

  QUnit.test('addon/mixins/ui-button-base.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'addon/mixins/ui-button-base.js should pass ESLint\n\n28:24 - Do not use this.attrs (ember/no-attrs-in-components)\n29:18 - Do not use this.attrs (ember/no-attrs-in-components)\n31:13 - Use closure actions, unless you need bubbling (ember/closure-actions)');
  });

  QUnit.test('addon/mixins/ui-checkbox-base.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'addon/mixins/ui-checkbox-base.js should pass ESLint\n\n78:13 - Use closure actions, unless you need bubbling (ember/closure-actions)\n82:24 - Do not use this.attrs (ember/no-attrs-in-components)\n84:22 - Do not use this.attrs (ember/no-attrs-in-components)\n86:22 - Do not use this.attrs (ember/no-attrs-in-components)');
  });

  QUnit.test('addon/mixins/ui-checkbox-group-base.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/ui-checkbox-group-base.js should pass ESLint\n\n');
  });

  QUnit.test('addon/mixins/ui-input-base.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'addon/mixins/ui-input-base.js should pass ESLint\n\n102:19 - Do not use this.attrs (ember/no-attrs-in-components)\n103:9 - Do not use this.attrs (ember/no-attrs-in-components)\n114:19 - Do not use this.attrs (ember/no-attrs-in-components)\n115:10 - Do not use this.attrs (ember/no-attrs-in-components)\n120:19 - Do not use this.attrs (ember/no-attrs-in-components)\n121:10 - Do not use this.attrs (ember/no-attrs-in-components)\n126:19 - Do not use this.attrs (ember/no-attrs-in-components)\n127:10 - Do not use this.attrs (ember/no-attrs-in-components)\n132:19 - Do not use this.attrs (ember/no-attrs-in-components)\n133:10 - Do not use this.attrs (ember/no-attrs-in-components)');
  });

  QUnit.test('addon/mixins/ui-label-base.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/ui-label-base.js should pass ESLint\n\n');
  });

  QUnit.test('addon/mixins/ui-segment-base.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/ui-segment-base.js should pass ESLint\n\n');
  });

  QUnit.test('addon/mixins/ui-select-base.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/mixins/ui-select-base.js should pass ESLint\n\n');
  });

  QUnit.test('addon/utils/ember-uploader.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/ember-uploader.js should pass ESLint\n\n');
  });

  QUnit.test('addon/utils/file-object.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/file-object.js should pass ESLint\n\n');
  });
});
define('dummy/ember-semantic-ui/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app/components/file-input.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/file-input.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/ui-animated-button.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/ui-animated-button.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/ui-button.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/ui-button.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/ui-checkbox-group.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/ui-checkbox-group.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/ui-checkbox.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/ui-checkbox.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/ui-column.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/ui-column.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/ui-container.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/ui-container.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/ui-date-input.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/ui-date-input.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/ui-date-time-input.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/ui-date-time-input.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/ui-dropdown-menu.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/ui-dropdown-menu.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/ui-form-input.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/ui-form-input.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/ui-form.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/ui-form.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/ui-grid.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/ui-grid.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/ui-input-tags.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/ui-input-tags.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/ui-input.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/ui-input.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/ui-label.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/ui-label.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/ui-labeled-button.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/ui-labeled-button.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/ui-labeled-input.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/ui-labeled-input.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/ui-left-labeled-button.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/ui-left-labeled-button.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/ui-menu.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/ui-menu.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/ui-message.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/ui-message.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/ui-modal-content.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/ui-modal-content.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/ui-modal-foot.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/ui-modal-foot.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/ui-modal-title.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/ui-modal-title.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/ui-modal.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/ui-modal.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/ui-multi-select.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/ui-multi-select.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/ui-pointing-label.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/ui-pointing-label.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/ui-popup-content.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/ui-popup-content.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/ui-popup.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/ui-popup.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/ui-progress.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/ui-progress.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/ui-radio-group.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/ui-radio-group.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/ui-radio.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/ui-radio.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/ui-row.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/ui-row.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/ui-segment.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/ui-segment.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/ui-select.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/ui-select.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/ui-tab-menu.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/ui-tab-menu.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/ui-tab-segment.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/ui-tab-segment.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/ui-text-container.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/ui-text-container.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/ui-uploader.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/ui-uploader.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/ui-vertical-menu.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/ui-vertical-menu.js should pass ESLint\n\n');
  });

  QUnit.test('app/utils/ember-uploader.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/ember-uploader.js should pass ESLint\n\n');
  });

  QUnit.test('app/utils/file-object.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/file-object.js should pass ESLint\n\n');
  });
});
define('dummy/helpers/code-show', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Helper.extend({
    code: Ember.inject.service(),
    compute(params) {
      let code = Ember.get(this, 'code');
      let name = params[0];
      let index = params[1];
      return code.code[name][index];
    }
  });
});
define('dummy/helpers/raw-content', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.rawContent = rawContent;
    function rawContent(content) {
        let rcontent = Ember.$.trim(content);
        return Ember.String.htmlSafe('<pre>' + rcontent + '</pre>');
    }

    exports.default = Ember.Helper.helper(rawContent);
});
define('dummy/helpers/show-array', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.rawContent = rawContent;
    function rawContent(content) {
        return content[0].join(',');
    }

    exports.default = Ember.Helper.helper(rawContent);
});
define('dummy/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('dummy/initializers/export-application-global', ['exports', 'dummy/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('dummy/initializers/init-options', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    const application = arguments[1] || arguments[0];
    application.inject('controller', 'options', 'service:options');
  }

  exports.default = {
    name: 'init-options',
    initialize: initialize
  };
});
define('dummy/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('dummy/router', ['exports', 'dummy/config/environment'], function (exports, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });


    const Router = Ember.Router.extend({
        location: _environment.default.locationType,
        rootURL: _environment.default.rootURL
    });

    Router.map(function () {
        this.route('ui-container');
        this.route('ui-text-container');
        this.route('layout');

        this.route('ui-message');

        this.route('ui-button');
        this.route('ui-animated-button');
        this.route('ui-labeled-button');
        this.route('ui-left-labeled-button');

        this.route('ui-dropdown');

        this.route('ui-dropdown-menu');
        this.route('ui-menu');
        this.route('ui-vertical-menu');
        this.route('ui-tab-menu');

        this.route('ui-select');
        this.route('ui-multi-select');

        this.route('ui-input');
        this.route('ui-input-tags');
        this.route('ui-date-input');
        this.route('ui-date-time-input');

        this.route('ui-segment');

        this.route('ui-checkbox');
        this.route('ui-checkbox-group');
        this.route('ui-radio-group');

        this.route('ui-label');
        this.route('ui-pointing-label');

        this.route('ui-form');
        this.route('ui-form-input');

        this.route('ui-modal');
        this.route('ui-popup');

        this.route('ui-progress');

        this.route('file-input');
        this.route('ui-uploader');
    });

    exports.default = Router;
});
define('dummy/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('dummy/services/code', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });


    const uiButton = [`{{#ui-button theme="basic"}}button{{/ui-button}}`, `{{#ui-button theme="basic" loading=true}}button{{/ui-button}}`, `{{#ui-button disabled="true" }}button{{/ui-button}}`, `{{#ui-button theme="primary" }}button{{/ui-button}}`, `{{#ui-button theme="secondary" }}button{{/ui-button}}`, `{{#ui-button theme="red" }}button{{/ui-button}}`, `
{{#ui-button theme="compact" action=(action "clickMe" 'value') }}
    <i class="icon heart"></i>
    heart
{{/ui-button}}`];

    const uiAnimatedButton = [`
{{#ui-animated-button as |ab| }}
    <div class="{{ab.visible}}">Next</div>
    <div class="{{ab.hidden}}">
        <i class="right arrow icon"></i>
    </div>
{{/ui-animated-button}}`];

    const uiCheckboxGroup = [`
{{#ui-checkbox-group theme="inline fields" value=checkvalue as |valueChange| }}
    <label>choose company</label>
    <div class="field" >
        {{#ui-checkbox  value="apple" action=(action valueChange) }}apple{{/ui-checkbox}}
    </div>
    <div class="field" >
        {{#ui-checkbox  value="google" action=(action valueChange) }}google{{/ui-checkbox}}
    </div>
    <div class="field" >
        {{#ui-checkbox  value="dropbox" action=(action valueChange) }}dropbox{{/ui-checkbox}}
    </div>
{{/ui-checkbox-group}}`, `{{ui-checkbox-group theme="grouped fields" label="choose company" options=options value=value }}`, `{{ui-checkbox-group label="choose company" theme="inline fields" options=options value=value }}`];

    const uiCheckbox = [`
{{#ui-checkbox checked=isChecked }}normal{{/ui-checkbox}}
{{#ui-pointing-label theme="basic blue" direction="left"}}
    {{isChecked}}
{{/ui-pointing-label}}`, `{{#ui-checkbox checked=true }}normal{{/ui-checkbox}}`, `{{#ui-checkbox theme="toggle"}}toggle{{/ui-checkbox}}`, `{{#ui-checkbox checked=true theme="toggle"}}toggle{{/ui-checkbox}}`, `{{#ui-checkbox theme="slider"}}slider{{/ui-checkbox}}`, `{{ui-checkbox value='i am checked' checked=true action=(action "someAction") update=(action (mut value))}}`];

    const uiDropdownMenu = [`
{{#ui-dropdown-menu}}
    <div class="text">File</div>
    <i class="dropdown icon"></i>
    <div class="menu">
        <div class="item">New</div>
        <div class="item">
          <span class="description">ctrl + o</span>
          Open...
        </div>
        <div class="item">
          <span class="description">ctrl + s</span>
          Save as...
        </div>
        <div class="item">
          <span class="description">ctrl + r</span>
          Rename
        </div>
        <div class="item">Make a copy</div>
        <div class="item">
          <i class="folder icon"></i>
          Move to folder
        </div>
        <div class="item">
          <i class="trash icon"></i>
          Move to trash
        </div>
        <div class="divider"></div>
        <div class="item">Download As...</div>
        <div class="item">
          <i class="dropdown icon"></i>
          Publish To Web
          <div class="menu">
            <div class="item">Google Docs</div>
            <div class="item">Google Drive</div>
            <div class="item">Dropbox</div>
            <div class="item">Adobe Creative Cloud</div>
            <div class="item">Private FTP</div>
            <div class="item">Another Service...</div>
          </div>
        </div>
        <div class="item">E-mail Collaborators</div>
    </div>
{{/ui-dropdown-menu}}`];

    // const uiDropDown = [];

    const uiFormInput = [`
<div class="ui form">
    {{#ui-form-input}}email{{/ui-form-input}}
</div>
`, `
<div class="ui form">
{{#ui-form-input onChange=(action 'onchange') onFocus=(action 'onfocus') onFocusin=(action 'onfocusin') onFocusout=(action 'onfocusout') }}email{{/ui-form-input}}
</div>
`];

    const uiForm = [`
{{#ui-form }}
    {{ui-form-input}}
    {{#ui-button}}save{{/ui-button}}
{{/ui-form}}`, `
{{#ui-form loading=true }}
   {{ui-form-input}}
   {{#ui-button}}save{{/ui-button}}
{{/ui-form}}`, `
{{#ui-form success=true }}
  {{#ui-form-input}}email{{/ui-form-input}}
  <div class="ui success message">
      <div class="header">Form Completed</div>
      <p>You're all signed up for the newsletter.</p>
  </div>
  {{#ui-button}}save{{/ui-button}}
{{/ui-form}}`, `
{{#ui-form error=true }}
    {{#ui-form-input}}email{{/ui-form-input}}
    <div class="ui error message">
        <div class="header">Form Completed</div>
        <p>You're all signed up for the newsletter.</p>
    </div>
    {{#ui-button}}save{{/ui-button}}
{{/ui-form}}`, `
{{#ui-form theme="fluid" }}
    {{#ui-form-input}}email{{/ui-form-input}}
    {{#ui-button}}save{{/ui-button}}
{{/ui-form}}
`, `
{{#ui-form theme="huge" }}
    {{#ui-form-input}}email{{/ui-form-input}}
    {{#ui-button}}save{{/ui-button}}
{{/ui-form}}`];

    const uiInput = [];

    const uiInputTags = [`{{ui-input-tags value=value}}`, `{{ui-input-tags update=(action (mut value)) }}`];

    const uiLabel = [`                 
{{#ui-label theme="rblue image" }}
     i am label
    <div class="detail" >detail</div>
{{/ui-label}}`, `
{{#ui-label theme="raised segment" }}
      <div class="ribbon" >i am label</div>
{{/ui-label}}`, `{{#ui-label theme="basic" }}label{{/ui-label}}`, `{{#ui-label theme="basic red" }}label{{/ui-label}}`, `{{#ui-label theme="red" }}label{{/ui-label}}`, `
{{#ui-label theme="red image" }}
  <img src="//www.baidu.com/img/bd_logo1.png">
   baidu
{{/ui-label}}`];

    const uiPointingLabel = [`
{{#ui-pointing-label theme="red" direction="left" }}
    below label
{{/ui-pointing-label}}`, `
{{#ui-pointing-label theme="tag blue" direction="below" }}
    label
{{/ui-pointing-label}}`, `
{{#ui-pointing-label direction="below" }}
    below label
{{/ui-pointing-label}}`, `
{{#ui-pointing-label direction="left" }}
    left label
{{/ui-pointing-label}}`, `
{{#ui-pointing-label direction="right" }}
    right lbale
{{/ui-pointing-label}}`];

    const uiLabeledButton = [`
{{#ui-labeled-button}}
    {{#ui-button theme="primary" }}
        <i class="heart icon" ></i>
    {{/ui-button}}
    {{#ui-label theme="basic" }}2,148{{/ui-label}}
{{/ui-labeled-button}}`, `
{{#ui-labeled-button}}
  {{#ui-button theme="red" }}
      <i class="heart icon" ></i>
  {{/ui-button}}
  {{#ui-pointing-label theme="basic red" direction="left" }}2,148{{/ui-pointing-label}}
{{/ui-labeled-button}}`, `
{{#ui-labeled-button}}
    {{#ui-button theme="basic blue" }}
        <i class="heart icon" ></i>
    {{/ui-button}}
    {{#ui-pointing-label theme="basic blue" direction="left" }}2,148{{/ui-pointing-label}}
{{/ui-labeled-button}}`];

    const uiLeftLabeledButton = [`
{{#ui-left-labeled-button}}
  {{#ui-pointing-label theme="basic blue" direction="right" }}2,148{{/ui-pointing-label}}
  {{#ui-button theme="blue" }}
      <i class="heart icon" ></i>
  {{/ui-button}}
{{/ui-left-labeled-button}}`];

    const uiMessage = [`{{#ui-message type="info" header="这是一条提示消息"}}{{/ui-message}}`, `{{#ui-message type="success" header="这是一条成功消息"}}{{/ui-message}}`, `{{#ui-message type="error" header="这是一条错误消息"}}{{/ui-message}}`, `{{#ui-message type="warning" header="这是一条警告消息"}}{{/ui-message}}`, `{{#ui-message header="这是一条消息"}}{{/ui-message}}`, `{{#ui-message header="这是超大号消息" size="massive"}}{{/ui-message}}`, `{{#ui-message close=true header="这是一条可清除的消息"}}{{/ui-message}}`, `{{#ui-message header="这是一条可自动消除的消息" timeout=20000 }}{{/ui-message}}`, `
{{#ui-message header="这是一条带内容的消息"}}
    <ul>
      <li>
        <p>第一点</p>
      </li>
      <li>
        <p>第二点</p>
      </li>
    </ul>
{{/ui-message}}`];

    const uiModal = [`
{{#ui-modal show=display onShow=(action "onShow") onApprove=(action "onApprove") onHide=(action "onHide") onDeny=(action "onDeny") transition=transition }}
    {{#ui-modal-title }}modal 1{{/ui-modal-title}}
    {{#ui-modal-content theme="image"}}
      <div class="ui small image" >
        <img src="//www.baidu.com/img/bd_logo1.png">
      </div>
      <div class="description" >
        <div class="ui header" >
          <p>first role</p>
        </div>
      </div>
    {{/ui-modal-content}}
    {{#ui-modal-foot}}
      <div class="ui black deny button">
          Nope
      </div>
      <div class="ui positive right labeled icon button">
          Yep, that's me <i class="checkmark icon"></i>
      </div>
    {{/ui-modal-foot}}
  {{/ui-modal}}`];

    const uiMultiSelect = [`
{{#ui-multi-select label="品牌选择" options=options value=value}}
    <label>品牌选择</label>
{{/ui-multi-select}}`];

    const uiProgress = [`
{{ui-progress percent=value }}
{{ui-progress percent=value class="indicating" }}
{{ui-progress percent=value class="red" }}
`];

    const uiRadioGroup = [`
{{#ui-radio-group theme="grouped" value=checkvalue name="co1" as |vc| }}
  <label>choose company</label>
  <div class="field" >
      {{#ui-radio  value="apple" action=vc }}apple{{/ui-radio}}
  </div>
  <div class="field" >
      {{#ui-radio  value="google" action=vc }}google{{/ui-radio}}
  </div>
  <div class="field" >
      {{#ui-radio  value="dropbox" action=vc }}dropbox{{/ui-radio}}
  </div>
  <div class="field">
      {{checkvalue}}
  </div>
{{/ui-radio-group}}`, `
 {{ui-radio-group name="co3" labelPath="name" label="choose company" theme="inline fields" options=options value=value }}
`];

    const uiSegment = [];

    const uiSelect = [`
{{ui-select label="select brand" placeholder="select brand" search=true options=options value=value}}
`];

    const uiTabMenu = [`
{{#ui-tab-menu tabs='first,second' active='first' }}
  
{{/ui-tab-menu}}
{{#ui-tab-segment tab='first' active=true}}
  first
{{/ui-tab-segment}}
{{#ui-tab-segment tab='second'}}
  second
{{/ui-tab-segment}}
`];

    const fileInput = [`{{file-input url="/upload" autoUpload=false extra=extra uploadProgress="uploadProgress" fileObject=fileObject uploadStart="uploadStart" uploadSucess="uploadSucess" }}`];

    const uiUploader = [`
{{ui-uploader multiple=true url="/upload" autoUpload=true uploadStart="uploadStart" uploadProgress="uploadProgress" uploadSucess="uploadSucess" deleteFile="deleteFile" }}
`];

    const uiDateTimeInput = [`{{ui-date-time-input value='2016-03-04 12:12' update=(action (mut value))}}`, `
<div class="ui form">
{{#ui-date-time-input value=value update=(action (mut value)) class="three fields" as |datetime| }}
      <div class="field">
          <label>日期</label>
          {{component datetime.date  }}
      </div>
      <div class="field">
          <label>小时</label>
          {{component datetime.hour}}
      </div>
      <div class="field">
          <label>分钟</label>
          {{component datetime.minute}}
      </div>
{{/ui-date-time-input}}
</div>
`];

    const uiPopup = [`
{{#ui-popup popup=target tagName='button' class="ui button" onShow=(action "onPopupShow" 'hello pop')}}show me{{/ui-popup}}
{{#ui-popup-content target=(mut target) }}
    <div class="header">
        {{value}}
    </div>
{{/ui-popup-content}}
`, `
{{#ui-popup popup=target1 tagName='button' event='click' hoverable=true class="ui button" onShow=(action "onPopupShow" 'hello pop')}}show me{{/ui-popup}}
{{#ui-popup-content target=(mut target1) class="fluid"}}
    <div class="ui grid">
        <div class="ui form six column">
          <div class="field">
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div class="field">
              <button class="ui button save" {{action "save"}} >save</button>
              <button class="ui button cancel" {{action "cancel"}} >cancel</button>
          </div>
        </div>
    </div>
{{/ui-popup-content}}
`, `
{{#ui-popup tagName='span' hoverable=true title='i am popup title' content='i am popup content'}}show me{{/ui-popup}}
`];

    const layout = [`
{{#ui-grid}}
    {{#ui-column wide=4 }}
        <div class="ui segment">
           left
        </div>
    {{/ui-column}}
    {{#ui-column wide=12 }}
        <div class="ui segment">
           main content
        </div>
    {{/ui-column}}
{{/ui-grid}}
`, `
{{#ui-grid}}
    {{#ui-row}}
      {{#ui-column wide=16 }}
        {{#ui-menu}}
          <div class="item">
            Home
          </div>
        {{/ui-menu}}
      {{/ui-column}}
    {{/ui-row}}
    {{#ui-column wide=4 }}
        <div class="ui segment">
           left
        </div>
    {{/ui-column}}
    {{#ui-column wide=12 }}
        <div class="ui segment">
           main content
        </div>
    {{/ui-column}}
{{/ui-grid}}

`];

    const code = {
        'ui-uploader': uiUploader,
        'ui-tab-menu': uiTabMenu,
        'ui-select': uiSelect,
        'ui-segment': uiSegment,
        'ui-radio-group': uiRadioGroup,
        'ui-progress': uiProgress,
        'ui-multi-select': uiMultiSelect,
        'ui-modal': uiModal,
        'ui-message': uiMessage,
        'ui-left-labeled-button': uiLeftLabeledButton,
        'ui-labeled-button': uiLabeledButton,
        'ui-label': uiLabel,
        'ui-pointing-label': uiPointingLabel,
        'ui-input-tags': uiInputTags,
        'ui-input': uiInput,
        'ui-form': uiForm,
        'ui-form-input': uiFormInput,
        'ui-button': uiButton,
        'ui-animated-button': uiAnimatedButton,
        'ui-checkbox-group': uiCheckboxGroup,
        'ui-checkbox': uiCheckbox,
        'ui-dropdown-menu': uiDropdownMenu,
        'file-input': fileInput,
        'ui-date-time-input': uiDateTimeInput,
        'ui-popup': uiPopup,
        'layout': layout
    };

    exports.default = Ember.Service.extend({
        code: code
    });
});
define('dummy/services/options', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Service.extend({
        init() {
            this._super(...arguments);
            this.options = [{ 'name': 'google', 'value': 'google' }, { 'name': 'apple', 'value': 'apple' }, { 'name': 'dropbox', 'value': 'dropbox' }, { 'name': 'twitter', 'value': 'twitter' }, { 'name': 'facebook', 'value': 'facebook' }];
        }
    });
});
define("dummy/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Ml6c6qPF", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"ui container\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"ui grid\"],[8],[0,\"\\n\"],[4,\"ui-column\",null,[[\"wide\"],[4]],{\"statements\":[[0,\"        \"],[6,\"div\"],[10,\"class\",\"four wide column\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"ui visible secondary vertical menu\"],[10,\"style\",\"top:70px;left:inherit\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui red header item\"],[8],[0,\"\\n                    Layout\\n                \"],[9],[0,\"\\n                \"],[4,\"link-to\",[\"ui-container\"],[[\"class\"],[\"item\"]],{\"statements\":[[0,\"ui-container\"]],\"parameters\":[]},null],[0,\" \\n                \"],[4,\"link-to\",[\"ui-text-container\"],[[\"class\"],[\"item\"]],{\"statements\":[[0,\"ui-text-container\"]],\"parameters\":[]},null],[0,\"\\n                \"],[4,\"link-to\",[\"layout\"],[[\"class\"],[\"item\"]],{\"statements\":[[0,\"layout\"]],\"parameters\":[]},null],[0,\" \\n\\n                \"],[6,\"div\"],[10,\"class\",\"ui red header item\"],[8],[0,\"\\n                    Button\\n                \"],[9],[0,\"\\n                \"],[4,\"link-to\",[\"ui-button\"],[[\"class\"],[\"item\"]],{\"statements\":[[0,\"ui-button\"]],\"parameters\":[]},null],[0,\" \\n                \"],[4,\"link-to\",[\"ui-animated-button\"],[[\"class\"],[\"item\"]],{\"statements\":[[0,\"ui-animated-button\"]],\"parameters\":[]},null],[0,\" \\n                \"],[4,\"link-to\",[\"ui-labeled-button\"],[[\"class\"],[\"item\"]],{\"statements\":[[0,\"ui-labeled-button\"]],\"parameters\":[]},null],[0,\"\\n                \"],[4,\"link-to\",[\"ui-left-labeled-button\"],[[\"class\"],[\"item\"]],{\"statements\":[[0,\"ui-left-labeled-button\"]],\"parameters\":[]},null],[0,\" \\n\\n                \"],[6,\"div\"],[10,\"class\",\"ui red header item\"],[8],[0,\"\\n                    Menu\\n                \"],[9],[0,\"\\n                \"],[4,\"link-to\",[\"ui-menu\"],[[\"class\"],[\"item\"]],{\"statements\":[[0,\"ui-menu\"]],\"parameters\":[]},null],[0,\" \\n                \"],[4,\"link-to\",[\"ui-vertical-menu\"],[[\"class\"],[\"item\"]],{\"statements\":[[0,\"ui-vertical-menu\"]],\"parameters\":[]},null],[0,\" \\n                \"],[4,\"link-to\",[\"ui-tab-menu\"],[[\"class\"],[\"item\"]],{\"statements\":[[0,\"ui-tab-menu\"]],\"parameters\":[]},null],[0,\" \\n                \"],[4,\"link-to\",[\"ui-dropdown-menu\"],[[\"class\"],[\"item\"]],{\"statements\":[[0,\"ui-dropdown-menu\"]],\"parameters\":[]},null],[0,\" \\n                \\n                \"],[6,\"div\"],[10,\"class\",\"ui red header item\"],[8],[0,\"\\n                    Select\\n                \"],[9],[0,\"\\n                \"],[4,\"link-to\",[\"ui-select\"],[[\"class\"],[\"item\"]],{\"statements\":[[0,\"ui-select\"]],\"parameters\":[]},null],[0,\" \\n                \"],[4,\"link-to\",[\"ui-multi-select\"],[[\"class\"],[\"item\"]],{\"statements\":[[0,\"ui-multi-select\"]],\"parameters\":[]},null],[0,\" \\n                \\n                \"],[6,\"div\"],[10,\"class\",\"ui red header item\"],[8],[0,\"\\n                    Input\\n                \"],[9],[0,\"\\n                \"],[4,\"link-to\",[\"ui-input\"],[[\"class\"],[\"item\"]],{\"statements\":[[0,\"ui-input\"]],\"parameters\":[]},null],[0,\"\\n                \"],[4,\"link-to\",[\"ui-date-input\"],[[\"class\"],[\"item\"]],{\"statements\":[[0,\"ui-date-input\"]],\"parameters\":[]},null],[0,\"\\n                \"],[4,\"link-to\",[\"ui-date-time-input\"],[[\"class\"],[\"item\"]],{\"statements\":[[0,\"ui-date-time-input\"]],\"parameters\":[]},null],[0,\" \\n                \"],[4,\"link-to\",[\"ui-input-tags\"],[[\"class\"],[\"item\"]],{\"statements\":[[0,\"ui-input-tags\"]],\"parameters\":[]},null],[0,\" \\n                \\n                \"],[6,\"div\"],[10,\"class\",\"ui red header item\"],[8],[0,\"\\n                    Segment\\n                \"],[9],[0,\"\\n                \"],[4,\"link-to\",[\"ui-segment\"],[[\"class\"],[\"item\"]],{\"statements\":[[0,\"ui-segment\"]],\"parameters\":[]},null],[0,\" \\n                                \\n                \"],[6,\"div\"],[10,\"class\",\"ui red header item\"],[8],[0,\"\\n                    Checkbox\\n                \"],[9],[0,\"\\n                \"],[4,\"link-to\",[\"ui-checkbox\"],[[\"class\"],[\"item\"]],{\"statements\":[[0,\"ui-checkbox\"]],\"parameters\":[]},null],[0,\" \\n                \"],[4,\"link-to\",[\"ui-checkbox-group\"],[[\"class\"],[\"item\"]],{\"statements\":[[0,\"ui-checkbox-group\"]],\"parameters\":[]},null],[0,\" \\n                \"],[4,\"link-to\",[\"ui-radio-group\"],[[\"class\"],[\"item\"]],{\"statements\":[[0,\"ui-radio-group\"]],\"parameters\":[]},null],[0,\" \\n                \\n                \"],[6,\"div\"],[10,\"class\",\"ui red header item\"],[8],[0,\"\\n                    Label\\n                \"],[9],[0,\"\\n                \"],[4,\"link-to\",[\"ui-label\"],[[\"class\"],[\"item\"]],{\"statements\":[[0,\"ui-label\"]],\"parameters\":[]},null],[0,\" \\n                \"],[4,\"link-to\",[\"ui-pointing-label\"],[[\"class\"],[\"item\"]],{\"statements\":[[0,\"ui-pointing-label\"]],\"parameters\":[]},null],[0,\" \\n                \\n                \"],[6,\"div\"],[10,\"class\",\"ui red header item\"],[8],[0,\"\\n                    Form\\n                \"],[9],[0,\"\\n                \"],[4,\"link-to\",[\"ui-form\"],[[\"class\"],[\"item\"]],{\"statements\":[[0,\"ui-form\"]],\"parameters\":[]},null],[0,\" \\n                \"],[4,\"link-to\",[\"ui-form-input\"],[[\"class\"],[\"item\"]],{\"statements\":[[0,\"ui-form-input\"]],\"parameters\":[]},null],[0,\" \\n                \\n                \"],[6,\"div\"],[10,\"class\",\"ui red header item\"],[8],[0,\"\\n                    Modal\\n                \"],[9],[0,\"\\n                \"],[4,\"link-to\",[\"ui-modal\"],[[\"class\"],[\"item\"]],{\"statements\":[[0,\"ui-modal\"]],\"parameters\":[]},null],[0,\"\\n                \\n                \"],[6,\"div\"],[10,\"class\",\"ui red header item\"],[8],[0,\"\\n                    Popup\\n                \"],[9],[0,\"\\n                \"],[4,\"link-to\",[\"ui-popup\"],[[\"class\"],[\"item\"]],{\"statements\":[[0,\"ui-popup\"]],\"parameters\":[]},null],[0,\" \\n\\n                \\n                \"],[6,\"div\"],[10,\"class\",\"ui red header item\"],[8],[0,\"\\n                    Progress\\n                \"],[9],[0,\"\\n                \"],[4,\"link-to\",[\"ui-progress\"],[[\"class\"],[\"item\"]],{\"statements\":[[0,\"ui-progress\"]],\"parameters\":[]},null],[0,\"\\n\\n                \"],[6,\"div\"],[10,\"class\",\"ui red header item\"],[8],[0,\"\\n                    Message\\n                \"],[9],[0,\"\\n                \"],[4,\"link-to\",[\"ui-message\"],[[\"class\"],[\"item\"]],{\"statements\":[[0,\"ui-message\"]],\"parameters\":[]},null],[0,\" \\n\\n                \"],[6,\"div\"],[10,\"class\",\"ui red header item\"],[8],[0,\"\\n                    File\\n                \"],[9],[0,\"\\n                \"],[4,\"link-to\",[\"file-input\"],[[\"class\"],[\"item\"]],{\"statements\":[[0,\"file-input\"]],\"parameters\":[]},null],[0,\" \\n                \"],[4,\"link-to\",[\"ui-uploader\"],[[\"class\"],[\"item\"]],{\"statements\":[[0,\"ui-uploader\"]],\"parameters\":[]},null],[0,\" \\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"ui-column\",null,[[\"wide\"],[12]],{\"statements\":[[4,\"if\",[[22,[\"host\"]]],null,{\"statements\":[[0,\"            \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n                \"],[6,\"a\"],[11,\"href\",[27,[[20,\"host\"]]]],[10,\"target\",\"_blank\"],[8],[0,\"See \"],[1,[20,\"routeName\"],false],[0,\" Doc\"],[9],[0,\"\\n            \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[1,[20,\"outlet\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/application.hbs" } });
});
define("dummy/templates/components/hightlight-code", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ZoD6U/HP", "block": "{\"symbols\":[\"&default\"],\"statements\":[[13,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/hightlight-code.hbs" } });
});
define("dummy/templates/file-input", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "y/h0YqKo", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"ui container\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"ui dividing header\"],[8],[0,\"file input\"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"ui two column grid\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"ui form\"],[8],[0,\"\\n                    \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n                        \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"file-input\",0],null]]]],false],[0,\"\\n                    \"],[9],[0,\"\\n                    \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n                        \"],[1,[26,\"file-input\",null,[[\"url\",\"autoUpload\",\"extra\",\"uploadProgress\",\"fileObject\",\"uploadStart\",\"uploadSucess\"],[\"/upload\",false,[22,[\"extra\"]],\"uploadProgress\",[22,[\"fileObject\"]],\"uploadStart\",\"uploadSucess\"]]],false],[0,\"\\n\"],[0,\"                    \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/file-input.hbs" } });
});
define("dummy/templates/layout", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "kMCCFE1G", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"ui header\"],[8],[0,\"\\n  left menu + right content\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"ui divider\"],[8],[9],[0,\"\\n\"],[4,\"ui-grid\",null,null,{\"statements\":[[4,\"ui-column\",null,[[\"wide\"],[4]],{\"statements\":[[0,\"        \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n           left\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"ui-column\",null,[[\"wide\"],[12]],{\"statements\":[[0,\"        \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n           main content\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[6,\"div\"],[10,\"style\",\"height:20px;\"],[8],[9],[0,\"\\n\"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"layout\",0],null]]]],false],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"ui header\"],[8],[0,\"\\n  example \\n\"],[9],[0,\"\\n\"],[4,\"ui-container\",null,null,{\"statements\":[[4,\"ui-grid\",null,null,{\"statements\":[[4,\"ui-column\",null,[[\"wide\"],[6]],{\"statements\":[[4,\"ui-vertical-menu\",null,null,{\"statements\":[[0,\"              \"],[6,\"a\"],[10,\"class\",\"active teal item\"],[8],[0,\"\\n                Inbox\\n                \"],[6,\"div\"],[10,\"class\",\"ui teal pointing left label\"],[8],[0,\"1\"],[9],[0,\"\\n              \"],[9],[0,\"\\n              \"],[6,\"a\"],[10,\"class\",\"item\"],[8],[0,\"\\n                Spam\\n                \"],[6,\"div\"],[10,\"class\",\"ui label\"],[8],[0,\"51\"],[9],[0,\"\\n              \"],[9],[0,\"\\n              \"],[6,\"a\"],[10,\"class\",\"item\"],[8],[0,\"\\n                Updates\\n                \"],[6,\"div\"],[10,\"class\",\"ui label\"],[8],[0,\"1\"],[9],[0,\"\\n              \"],[9],[0,\"\\n              \"],[6,\"div\"],[10,\"class\",\"item\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui transparent icon input\"],[8],[0,\"\\n                  \"],[6,\"input\"],[10,\"placeholder\",\"Search mail...\"],[10,\"type\",\"text\"],[8],[9],[0,\"\\n                  \"],[6,\"i\"],[10,\"class\",\"search icon\"],[8],[9],[0,\"\\n                \"],[9],[0,\"\\n              \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[4,\"ui-column\",null,[[\"wide\"],[10]],{\"statements\":[[4,\"ui-segment\",null,null,{\"statements\":[[4,\"ui-form\",null,null,{\"statements\":[[0,\"                        \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n                            \"],[6,\"label\"],[10,\"for\",\"\"],[8],[0,\"name\"],[9],[0,\"\\n                            \"],[6,\"input\"],[10,\"type\",\"text\"],[8],[9],[0,\"\\n                        \"],[9],[0,\"\\n                        \"],[6,\"button\"],[10,\"class\",\"ui button\"],[8],[0,\"submit\"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"ui header\"],[8],[0,\"\\n    top menu+left menu + right content\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"ui divider\"],[8],[9],[0,\"\\n\"],[4,\"ui-grid\",null,null,{\"statements\":[[4,\"ui-row\",null,null,{\"statements\":[[4,\"ui-column\",null,[[\"wide\"],[16]],{\"statements\":[[4,\"ui-menu\",null,null,{\"statements\":[[0,\"          \"],[6,\"div\"],[10,\"class\",\"item\"],[8],[0,\"\\n            Home\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null],[4,\"ui-column\",null,[[\"wide\"],[4]],{\"statements\":[[0,\"        \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n           left\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"ui-column\",null,[[\"wide\"],[12]],{\"statements\":[[0,\"        \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n           main content\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[6,\"div\"],[10,\"style\",\"height:20px;\"],[8],[9],[0,\"\\n\"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"layout\",1],null]]]],false],[0,\"\\n\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/layout.hbs" } });
});
define("dummy/templates/ui-animated-button", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "V6Plj3/m", "block": "{\"symbols\":[\"ab\"],\"statements\":[[6,\"div\"],[10,\"class\",\"ui grid\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"ui segments\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-animated-button\",0],null]]]],false],[0,\"\\n                \"],[9],[0,\"          \\n                \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n\"],[4,\"ui-animated-button\",null,null,{\"statements\":[[0,\"                        \"],[6,\"div\"],[11,\"class\",[27,[[21,1,[\"visible\"]]]]],[8],[0,\"Next\"],[9],[0,\"\\n                        \"],[6,\"div\"],[11,\"class\",[27,[[21,1,[\"hidden\"]]]]],[8],[0,\"\\n                            \"],[6,\"i\"],[10,\"class\",\"right arrow icon\"],[8],[9],[0,\"\\n                        \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/ui-animated-button.hbs" } });
});
define("dummy/templates/ui-button", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "AkLG1bpv", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"ui grid\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"ui segments\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-button\",0],null]]]],false],[0,\"\\n                \"],[9],[0,\"           \\n                \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n                     \"],[4,\"ui-button\",null,[[\"theme\"],[\"basic\"]],{\"statements\":[[0,\"button\"]],\"parameters\":[]},null],[0,\"\\n                \"],[9],[0,\"\\n\\n                \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-button\",1],null]]]],false],[0,\"\\n                \"],[9],[0,\"           \\n                \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n                     \"],[4,\"ui-button\",null,[[\"theme\",\"loading\"],[\"basic\",true]],{\"statements\":[[0,\"button\"]],\"parameters\":[]},null],[0,\"\\n                \"],[9],[0,\"\\n\\n                \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-button\",2],null]]]],false],[0,\"\\n                \"],[9],[0,\"           \\n                \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n                     \"],[4,\"ui-button\",null,[[\"disabled\"],[true]],{\"statements\":[[0,\"button\"]],\"parameters\":[]},null],[0,\"\\n                \"],[9],[0,\"\\n\\n                \\n                \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-button\",3],null]]]],false],[0,\"\\n                \"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n                    \"],[4,\"ui-button\",null,[[\"theme\"],[\"primary\"]],{\"statements\":[[0,\"button\"]],\"parameters\":[]},null],[0,\"\\n                \"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-button\",4],null]]]],false],[0,\"\\n                \"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n                    \"],[4,\"ui-button\",null,[[\"theme\"],[\"secondary\"]],{\"statements\":[[0,\"button\"]],\"parameters\":[]},null],[0,\"\\n                \"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-button\",5],null]]]],false],[0,\"\\n                \"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n                    \"],[4,\"ui-button\",null,[[\"theme\"],[\"red\"]],{\"statements\":[[0,\"button\"]],\"parameters\":[]},null],[0,\"\\n                \"],[9],[0,\"\\n\\n                \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-button\",6],null]]]],false],[0,\"\\n                \"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n\"],[4,\"ui-button\",null,[[\"theme\",\"action\"],[\"compact\",[26,\"action\",[[21,0,[]],\"clickMe\",\"value\"],null]]],{\"statements\":[[0,\"                        \"],[6,\"i\"],[10,\"class\",\"icon heart\"],[8],[9],[0,\"\\n                        heart\\n\"]],\"parameters\":[]},null],[0,\"                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/ui-button.hbs" } });
});
define("dummy/templates/ui-checkbox-group", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "h1Yisz8V", "block": "{\"symbols\":[\"valueChange\"],\"statements\":[[6,\"div\"],[10,\"class\",\"ui grid\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"ui segments\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-checkbox-group\",0],null]]]],false],[0,\"\\n                \"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n                    \"],[6,\"div\"],[10,\"class\",\"ui form\"],[8],[0,\"\\n\"],[4,\"ui-checkbox-group\",null,[[\"theme\",\"value\"],[\"inline fields\",[22,[\"checkvalue\"]]]],{\"statements\":[[0,\"                            \"],[6,\"label\"],[8],[0,\"choose company\"],[9],[0,\"\\n                            \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n                                \"],[4,\"ui-checkbox\",null,[[\"value\",\"action\"],[\"apple\",[26,\"action\",[[21,0,[]],[21,1,[]]],null]]],{\"statements\":[[0,\"apple\"]],\"parameters\":[]},null],[0,\"\\n                            \"],[9],[0,\"\\n                            \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n                                \"],[4,\"ui-checkbox\",null,[[\"value\",\"action\"],[\"google\",[26,\"action\",[[21,0,[]],[21,1,[]]],null]]],{\"statements\":[[0,\"google\"]],\"parameters\":[]},null],[0,\"\\n                            \"],[9],[0,\"\\n                            \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n                                \"],[4,\"ui-checkbox\",null,[[\"value\",\"action\"],[\"dropbox\",[26,\"action\",[[21,0,[]],[21,1,[]]],null]]],{\"statements\":[[0,\"dropbox\"]],\"parameters\":[]},null],[0,\"\\n                            \"],[9],[0,\"\\n                            \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n                                \"],[1,[20,\"checkvalueShow\"],false],[0,\"\\n                            \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"                    \"],[9],[0,\"\\n                \"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-checkbox-group\",1],null]]]],false],[0,\"\\n                \"],[9],[0,\"\\n\\n                \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n                    \"],[6,\"div\"],[10,\"class\",\"ui form\"],[8],[0,\"\\n                        \"],[4,\"ui-checkbox-group\",null,[[\"theme\",\"label\",\"options\",\"value\"],[\"grouped fields\",\"choose company\",[22,[\"options\",\"options\"]],[22,[\"checkvalue2\"]]]],{\"statements\":[],\"parameters\":[]},null],[0,\"\\n                        \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n                            \"],[1,[20,\"checkvalueShow2\"],false],[0,\"\\n                        \"],[9],[0,\"\\n                    \"],[9],[0,\"\\n                \"],[9],[0,\"\\n                \\n                \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-checkbox-group\",2],null]]]],false],[0,\"\\n                \"],[9],[0,\"\\n\\n                \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n                    \"],[6,\"div\"],[10,\"class\",\"ui form\"],[8],[0,\"\\n                        \"],[4,\"ui-checkbox-group\",null,[[\"label\",\"theme\",\"options\",\"value\"],[\"choose company\",\"inline fields\",[22,[\"options\",\"options\"]],[22,[\"checkvalue3\"]]]],{\"statements\":[],\"parameters\":[]},null],[0,\"\\n                        \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n                            \"],[1,[20,\"checkvalueShow3\"],false],[0,\"\\n                        \"],[9],[0,\"\\n                    \"],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/ui-checkbox-group.hbs" } });
});
define("dummy/templates/ui-checkbox", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "DKk4uFS1", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"ui grid\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"ui segments\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-checkbox\",0],null]]]],false],[0,\"\\n                \"],[9],[0,\"           \\n                \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n                    \"],[4,\"ui-checkbox\",null,[[\"checked\"],[[22,[\"isChecked\"]]]],{\"statements\":[[0,\"normal\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"ui-pointing-label\",null,[[\"theme\",\"direction\"],[\"basic blue\",\"left\"]],{\"statements\":[[0,\"                        \"],[1,[20,\"isChecked\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                \"],[9],[0,\"\\n\\n                \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-checkbox\",1],null]]]],false],[0,\"\\n                \"],[9],[0,\"           \\n                \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n                    \"],[4,\"ui-checkbox\",null,[[\"checked\"],[true]],{\"statements\":[[0,\"normal\"]],\"parameters\":[]},null],[0,\"\\n                \"],[9],[0,\"\\n\\n                \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-checkbox\",2],null]]]],false],[0,\"\\n                \"],[9],[0,\"           \\n                \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n                    \"],[4,\"ui-checkbox\",null,[[\"theme\"],[\"toggle\"]],{\"statements\":[[0,\"toggle\"]],\"parameters\":[]},null],[0,\"\\n                \"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-checkbox\",3],null]]]],false],[0,\"\\n                \"],[9],[0,\"           \\n                \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n                    \"],[4,\"ui-checkbox\",null,[[\"checked\",\"theme\"],[true,\"toggle\"]],{\"statements\":[[0,\"toggle\"]],\"parameters\":[]},null],[0,\"\\n                \"],[9],[0,\"\\n\\n                \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-checkbox\",4],null]]]],false],[0,\"\\n                \"],[9],[0,\"           \\n                \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n                    \"],[4,\"ui-checkbox\",null,[[\"theme\"],[\"slider\"]],{\"statements\":[[0,\"slider\"]],\"parameters\":[]},null],[0,\"\\n                \"],[9],[0,\"\\n\\n\\n                \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-checkbox\",5],null]]]],false],[0,\"\\n                \"],[9],[0,\"           \\n                \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n                    \"],[1,[26,\"ui-checkbox\",null,[[\"value\",\"action\",\"checked\",\"update\"],[\"i am checked\",[26,\"action\",[[21,0,[]],\"checkedCheck\"],null],true,[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"value\"]]],null]],null]]]],false],[0,\"\\n                    \"],[1,[20,\"value\"],false],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/ui-checkbox.hbs" } });
});
define("dummy/templates/ui-container", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "s7Yst440", "block": "{\"symbols\":[],\"statements\":[[4,\"ui-container\",null,null,{\"statements\":[[6,\"style\"],[10,\"type\",\"text/css\"],[8],[0,\"\\n    .t {\\n        margin-top: 50px !important;\\n        margin-top: -1rem;\\n        margin-bottom: -1rem;\\n        margin-left: 0.5rem !important;\\n        margin-right: -1rem;\\n    }\\n\\n    .t .column {\\n        position: relative;\\n        display: inline-block;\\n        width: 6.25%;\\n        padding-left: 1rem;\\n        padding-right: 1rem;\\n        vertical-align: top;\\n        background-color: #ccc;\\n        margin-right: 10px;\\n    }\\n\"],[9],[0,\"\\n  \"],[6,\"pre\"],[8],[0,\"\\n    \"],[0,\"{{#ui-container}}\"],[0,\"{{/ui-container}}\\n  \"],[9],[0,\"\\n   \"],[6,\"div\"],[10,\"class\",\"ui grid t\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"column \"],[8],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[9],[0,\"\\n   \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/ui-container.hbs" } });
});
define("dummy/templates/ui-date-input", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "zpX5zngk", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"ui grid\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"ui segments\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[6,\"code\"],[10,\"class\",\"code xml\"],[8],[0,\"\\n                        \"],[0,\"{{ui-date-input update=(action (mut value))}}\\n                    \"],[9],[0,\"\\n                \"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n                    \"],[1,[26,\"ui-date-input\",null,[[\"value\",\"update\"],[\"2016-03-04\",[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"value\"]]],null]],null]]]],false],[0,\"\\n                    \"],[6,\"span\"],[8],[1,[20,\"value\"],false],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/ui-date-input.hbs" } });
});
define("dummy/templates/ui-date-time-input", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Show7NFP", "block": "{\"symbols\":[\"datetime\"],\"statements\":[[6,\"div\"],[10,\"class\",\"ui grid\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"ui segments\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-date-time-input\",0],null]]]],false],[0,\"\\n                \"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n                    \"],[1,[26,\"ui-date-time-input\",null,[[\"value\",\"update\"],[\"2016-03-04 12:12\",[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"value\"]]],null]],null]]]],false],[0,\"\\n                    \"],[6,\"span\"],[8],[1,[20,\"value\"],false],[9],[0,\"\\n                \"],[9],[0,\"\\n\\n                \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-date-time-input\",1],null]]]],false],[0,\"\\n                \"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n                    \"],[6,\"div\"],[10,\"class\",\"ui form\"],[8],[0,\"\\n\"],[4,\"ui-date-time-input\",null,[[\"update\",\"class\"],[[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"value2\"]]],null]],null],\"three fields\"]],{\"statements\":[[0,\"                            \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n                                \"],[6,\"label\"],[8],[0,\"日期\"],[9],[0,\"\\n                                \"],[1,[26,\"component\",[[21,1,[\"date\"]]],null],false],[0,\"\\n                            \"],[9],[0,\"\\n                            \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n                                \"],[6,\"label\"],[8],[0,\"小时\"],[9],[0,\"\\n                                \"],[1,[26,\"component\",[[21,1,[\"hour\"]]],null],false],[0,\"\\n                            \"],[9],[0,\"\\n                            \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n                                \"],[6,\"label\"],[8],[0,\"分钟\"],[9],[0,\"\\n                                \"],[1,[26,\"component\",[[21,1,[\"minute\"]]],null],false],[0,\"\\n                            \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"                    \"],[9],[0,\"\\n                    \"],[6,\"span\"],[8],[1,[20,\"value2\"],false],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/ui-date-time-input.hbs" } });
});
define("dummy/templates/ui-dropdown-menu", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "NTH23nWT", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"ui grid\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"ui segments\"],[8],[0,\"\\n              \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                  \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-dropdown-menu\",0],null]]]],false],[0,\"\\n              \"],[9],[0,\"\\n              \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n\"],[4,\"ui-dropdown-menu\",null,null,{\"statements\":[[0,\"                    \"],[6,\"div\"],[10,\"class\",\"text\"],[8],[0,\"File\"],[9],[0,\"\\n                    \"],[6,\"i\"],[10,\"class\",\"dropdown icon\"],[8],[9],[0,\"\\n                    \"],[6,\"div\"],[10,\"class\",\"menu\"],[8],[0,\"\\n                        \"],[6,\"div\"],[10,\"class\",\"item\"],[8],[0,\"New\"],[9],[0,\"\\n                        \"],[6,\"div\"],[10,\"class\",\"item\"],[8],[0,\"\\n                          \"],[6,\"span\"],[10,\"class\",\"description\"],[8],[0,\"ctrl + o\"],[9],[0,\"\\n                          Open...\\n                        \"],[9],[0,\"\\n                        \"],[6,\"div\"],[10,\"class\",\"item\"],[8],[0,\"\\n                          \"],[6,\"span\"],[10,\"class\",\"description\"],[8],[0,\"ctrl + s\"],[9],[0,\"\\n                          Save as...\\n                        \"],[9],[0,\"\\n                        \"],[6,\"div\"],[10,\"class\",\"item\"],[8],[0,\"\\n                          \"],[6,\"span\"],[10,\"class\",\"description\"],[8],[0,\"ctrl + r\"],[9],[0,\"\\n                          Rename\\n                        \"],[9],[0,\"\\n                        \"],[6,\"div\"],[10,\"class\",\"item\"],[8],[0,\"Make a copy\"],[9],[0,\"\\n                        \"],[6,\"div\"],[10,\"class\",\"item\"],[8],[0,\"\\n                          \"],[6,\"i\"],[10,\"class\",\"folder icon\"],[8],[9],[0,\"\\n                          Move to folder\\n                        \"],[9],[0,\"\\n                        \"],[6,\"div\"],[10,\"class\",\"item\"],[8],[0,\"\\n                          \"],[6,\"i\"],[10,\"class\",\"trash icon\"],[8],[9],[0,\"\\n                          Move to trash\\n                        \"],[9],[0,\"\\n                        \"],[6,\"div\"],[10,\"class\",\"divider\"],[8],[9],[0,\"\\n                        \"],[6,\"div\"],[10,\"class\",\"item\"],[8],[0,\"Download As...\"],[9],[0,\"\\n                        \"],[6,\"div\"],[10,\"class\",\"item\"],[8],[0,\"\\n                          \"],[6,\"i\"],[10,\"class\",\"dropdown icon\"],[8],[9],[0,\"\\n                          Publish To Web\\n                          \"],[6,\"div\"],[10,\"class\",\"menu\"],[8],[0,\"\\n                            \"],[6,\"div\"],[10,\"class\",\"item\"],[8],[0,\"Google Docs\"],[9],[0,\"\\n                            \"],[6,\"div\"],[10,\"class\",\"item\"],[8],[0,\"Google Drive\"],[9],[0,\"\\n                            \"],[6,\"div\"],[10,\"class\",\"item\"],[8],[0,\"Dropbox\"],[9],[0,\"\\n                            \"],[6,\"div\"],[10,\"class\",\"item\"],[8],[0,\"Adobe Creative Cloud\"],[9],[0,\"\\n                            \"],[6,\"div\"],[10,\"class\",\"item\"],[8],[0,\"Private FTP\"],[9],[0,\"\\n                            \"],[6,\"div\"],[10,\"class\",\"item\"],[8],[0,\"Another Service...\"],[9],[0,\"\\n                          \"],[9],[0,\"\\n                        \"],[9],[0,\"\\n                        \"],[6,\"div\"],[10,\"class\",\"item\"],[8],[0,\"E-mail Collaborators\"],[9],[0,\"\\n                    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"              \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/ui-dropdown-menu.hbs" } });
});
define("dummy/templates/ui-dropdown", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Q31xlEdB", "block": "{\"symbols\":[],\"statements\":[[1,[20,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/ui-dropdown.hbs" } });
});
define("dummy/templates/ui-form-input", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "16BoK/q6", "block": "{\"symbols\":[\"item\"],\"statements\":[[6,\"div\"],[10,\"class\",\"ui grid\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"ui segments\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-form-input\",0],null]]]],false],[0,\"\\n                \"],[9],[0,\"\\n\\n                \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n                    \"],[6,\"div\"],[10,\"class\",\"ui form\"],[8],[0,\"\\n                        \"],[4,\"ui-form-input\",null,null,{\"statements\":[[0,\"email\"]],\"parameters\":[]},null],[0,\"\\n                    \"],[9],[0,\"\\n                \"],[9],[0,\"\\n\\n                \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-form-input\",1],null]]]],false],[0,\"\\n                \"],[9],[0,\"\\n\\n                \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n                    \"],[6,\"div\"],[10,\"class\",\"ui form\"],[8],[0,\"\\n                    \"],[4,\"ui-form-input\",null,[[\"onChange\",\"onFocus\",\"onFocusin\",\"onFocusout\"],[[26,\"action\",[[21,0,[]],\"onchange\"],null],[26,\"action\",[[21,0,[]],\"onfocus\"],null],[26,\"action\",[[21,0,[]],\"onfocusin\"],null],[26,\"action\",[[21,0,[]],\"onfocusout\"],null]]],{\"statements\":[[0,\"email\"]],\"parameters\":[]},null],[0,\"\\n                    \"],[9],[0,\"\\n                    \"],[6,\"table\"],[10,\"class\",\"ui table\"],[8],[0,\"\\n                        \"],[6,\"thead\"],[8],[0,\"\\n                            \"],[6,\"tr\"],[8],[0,\"\\n                                \"],[6,\"th\"],[8],[0,\"type\"],[9],[0,\"\\n                                \"],[6,\"th\"],[8],[0,\"value\"],[9],[0,\"\\n                                \"],[6,\"th\"],[8],[0,\"time\"],[9],[0,\"\\n                            \"],[9],[0,\"\\n                        \"],[9],[0,\"\\n                        \"],[6,\"tbody\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"result\"]]],null,{\"statements\":[[0,\"                            \"],[6,\"tr\"],[8],[0,\"\\n                                \"],[6,\"td\"],[8],[1,[21,1,[\"type\"]],false],[9],[0,\"\\n                                \"],[6,\"td\"],[8],[1,[21,1,[\"value\"]],false],[9],[0,\"\\n                                \"],[6,\"td\"],[8],[1,[21,1,[\"time\"]],false],[9],[0,\"\\n                            \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"                        \"],[9],[0,\"\\n                    \"],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/ui-form-input.hbs" } });
});
define("dummy/templates/ui-form", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "IjhcclIr", "block": "{\"symbols\":[],\"statements\":[[1,[20,\"outlet\"],false],[0,\"\\n\\n\"],[6,\"h4\"],[10,\"class\",\"ui header\"],[8],[0,\"form\"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"html ui top attached segment\"],[8],[0,\"\\n\"],[4,\"ui-form\",null,null,{\"statements\":[[0,\"        \"],[4,\"ui-form-input\",null,null,{\"statements\":[[0,\"email\"]],\"parameters\":[]},null],[0,\"\\n        \"],[4,\"ui-button\",null,null,{\"statements\":[[0,\"save\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"ui instructive bottom attached segment\"],[8],[0,\"\\n    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-form\",0],null]]]],false],[0,\"\\n\"],[9],[0,\"\\n\\n\\n\"],[6,\"h4\"],[10,\"class\",\"ui header\"],[8],[0,\"form loading\"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"html ui top attached segment\"],[8],[0,\"\\n\"],[4,\"ui-form\",null,[[\"loading\"],[true]],{\"statements\":[[0,\"        \"],[4,\"ui-form-input\",null,null,{\"statements\":[[0,\"email\"]],\"parameters\":[]},null],[0,\"\\n        \"],[4,\"ui-button\",null,null,{\"statements\":[[0,\"save\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"ui instructive bottom attached segment\"],[8],[0,\"\\n    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-form\",1],null]]]],false],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[6,\"h4\"],[10,\"class\",\"ui header\"],[8],[0,\"form success\"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"html ui top attached segment\"],[8],[0,\"\\n\"],[4,\"ui-form\",null,[[\"success\"],[true]],{\"statements\":[[0,\"        \"],[4,\"ui-form-input\",null,null,{\"statements\":[[0,\"email\"]],\"parameters\":[]},null],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"ui success message\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"header\"],[8],[0,\"Form Completed\"],[9],[0,\"\\n            \"],[6,\"p\"],[8],[0,\"You're all signed up for the newsletter.\"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[4,\"ui-button\",null,null,{\"statements\":[[0,\"save\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"ui instructive bottom attached segment\"],[8],[0,\"\\n    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-form\",2],null]]]],false],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[6,\"h4\"],[10,\"class\",\"ui header\"],[8],[0,\"form error\"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"html ui top attached segment\"],[8],[0,\"\\n\"],[4,\"ui-form\",null,[[\"error\"],[true]],{\"statements\":[[0,\"        \"],[4,\"ui-form-input\",null,null,{\"statements\":[[0,\"email\"]],\"parameters\":[]},null],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"ui error message\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"header\"],[8],[0,\"Form Completed\"],[9],[0,\"\\n            \"],[6,\"p\"],[8],[0,\"You're all signed up for the newsletter.\"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[4,\"ui-button\",null,null,{\"statements\":[[0,\"save\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"ui instructive bottom attached segment\"],[8],[0,\"\\n    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-form\",3],null]]]],false],[0,\"\\n\"],[9],[0,\"\\n\\n\\n\"],[6,\"h4\"],[10,\"class\",\"ui header\"],[8],[0,\"fluid form \"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"html ui top attached segment\"],[8],[0,\"\\n\"],[4,\"ui-form\",null,[[\"theme\"],[\"fluid\"]],{\"statements\":[[0,\"        \"],[4,\"ui-form-input\",null,null,{\"statements\":[[0,\"email\"]],\"parameters\":[]},null],[0,\"\\n        \"],[4,\"ui-button\",null,null,{\"statements\":[[0,\"save\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"ui instructive bottom attached segment\"],[8],[0,\"\\n    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-form\",4],null]]]],false],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[6,\"h4\"],[10,\"class\",\"ui header\"],[8],[0,\"huge form \"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"html ui top attached segment\"],[8],[0,\"\\n\"],[4,\"ui-form\",null,[[\"theme\"],[\"huge\"]],{\"statements\":[[0,\"        \"],[4,\"ui-form-input\",null,null,{\"statements\":[[0,\"email\"]],\"parameters\":[]},null],[0,\"\\n        \"],[4,\"ui-button\",null,null,{\"statements\":[[0,\"save\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"ui instructive bottom attached segment\"],[8],[0,\"\\n    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-form\",5],null]]]],false],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/ui-form.hbs" } });
});
define("dummy/templates/ui-input-tags", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "TKapAWez", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"ui grid\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"ui segments\"],[8],[0,\"\\n              \\n              \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                  \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-input-tags\",0],null]]]],false],[0,\"\\n              \"],[9],[0,\"\\n              \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n                \"],[1,[26,\"ui-input-tags\",null,[[\"value\"],[[22,[\"value\"]]]]],false],[0,\"\\n                \"],[6,\"p\"],[8],[1,[20,\"valueShow\"],false],[9],[0,\"\\n              \"],[9],[0,\"\\n\\n              \\n              \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                  \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-input-tags\",1],null]]]],false],[0,\"\\n              \"],[9],[0,\"\\n              \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n                  \"],[1,[26,\"ui-input-tags\",null,[[\"update\"],[[26,\"action\",[[21,0,[]],[26,\"mut\",[[22,[\"value1\"]]],null]],null]]]],false],[0,\"\\n                  \"],[6,\"p\"],[8],[1,[20,\"value1Show\"],false],[9],[0,\"\\n              \"],[9],[0,\"\\n\\n\\n              \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui form segment\"],[8],[0,\"\\n                    \"],[1,[26,\"ui-input-tags\",null,[[\"value\"],[[22,[\"value2\"]]]]],false],[0,\"\\n                    \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n                      \"],[1,[20,\"value2Show\"],false],[0,\"\\n                    \"],[9],[0,\"\\n                    \"],[4,\"ui-button\",null,[[\"action\"],[[26,\"action\",[[21,0,[]],\"changeValue2\"],null]]],{\"statements\":[[0,\"dynamic change value\"]],\"parameters\":[]},null],[0,\"\\n                \"],[9],[0,\"\\n              \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/ui-input-tags.hbs" } });
});
define("dummy/templates/ui-input", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "K/2wbw24", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"ui grid\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"ui segments\"],[8],[0,\"\\n\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"code\"],[10,\"class\",\"code xml\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[0,\"{{#ui-input focus=true}}\"],[0,\"{{/ui-input}}\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[4,\"ui-input\",null,[[\"focus\"],[true]],{\"statements\":[],\"parameters\":[]},null],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\n\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"code\"],[10,\"class\",\"code xml\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[0,\"{{#ui-input theme=\\\"icon\\\" loading=true}}\"],[6,\"i\"],[10,\"class\",\"search icon\"],[8],[9],[0,\"{{/ui-input}}\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[4,\"ui-input\",null,[[\"theme\",\"loading\"],[\"icon\",true]],{\"statements\":[[6,\"i\"],[10,\"class\",\"search icon\"],[8],[9]],\"parameters\":[]},null],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\n\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"code\"],[10,\"class\",\"code xml\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[0,\"{{#ui-input error=true}}\"],[0,\"{{/ui-input}}\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[4,\"ui-input\",null,[[\"error\"],[true]],{\"statements\":[],\"parameters\":[]},null],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\n\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"code\"],[10,\"class\",\"code xml\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[0,\"{{#ui-input disabled=true}}\"],[0,\"{{/ui-input}}\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[4,\"ui-input\",null,[[\"disabled\",\"value\"],[true,\"search\"]],{\"statements\":[],\"parameters\":[]},null],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\n\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"code\"],[10,\"class\",\"code xml\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[0,\"{{#ui-input readonly=true}}\"],[0,\"{{/ui-input}}\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[4,\"ui-input\",null,[[\"readonly\",\"value\"],[true,\"search\"]],{\"statements\":[],\"parameters\":[]},null],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\n\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"code\"],[10,\"class\",\"code xml\"],[8],[0,\"\\n\\t\\t                \"],[0,\"{{#ui-input onFocus=(action 'onfocus')}}\"],[0,\"{{/ui-input}}\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"label\"],[10,\"for\",\"\"],[8],[0,\"email\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[4,\"ui-input\",null,[[\"onFocus\"],[[26,\"action\",[[21,0,[]],\"onfocus\"],null]]],{\"statements\":[],\"parameters\":[]},null],[0,\"\\n\\t\\t\\t\\t\\t\"],[1,[20,\"result\"],false],[0,\" focus\\n\\t\\t\\t\\t\"],[9],[0,\"\\n          \\t\"],[9],[0,\"\\n\\n          \\t\"],[6,\"div\"],[10,\"class\",\"ui segments\"],[8],[0,\"\\n          \\t\\t\"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n\"],[4,\"ui-input\",null,[[\"theme\",\"value\"],[\"fluid icon\",\"search\"]],{\"statements\":[[0,\"\\t\\t\\t\\t\\t\\t\\t\"],[6,\"i\"],[10,\"class\",\"search icon\"],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\t\\t\\t\\t\"],[9],[0,\"\\n\\n\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"html ui segment\"],[8],[0,\"\\n\"],[4,\"ui-input\",null,[[\"theme\",\"value\"],[\"fluid action\",\"fluid\"]],{\"statements\":[[0,\"\\t\\t\\t\\t\\t\\t\"],[4,\"ui-button\",null,null,{\"statements\":[[0,\"search\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\t\\t\\t\\t\"],[9],[0,\"\\n\\n\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"html ui segment\"],[8],[0,\"\\n\"],[4,\"ui-input\",null,[[\"theme\",\"value\"],[\"mini icon\",\"search\"]],{\"statements\":[[0,\"\\t\\t\\t\\t\\t\\t\"],[6,\"i\"],[10,\"class\",\"search icon\"],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\t\\t\\t\\t\"],[9],[0,\"\\n\\n\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"html ui segment\"],[8],[0,\"\\n\"],[4,\"ui-input\",null,[[\"theme\",\"value\"],[\"small icon\",\"search\"]],{\"statements\":[[0,\"\\t\\t\\t\\t\\t\\t\"],[6,\"i\"],[10,\"class\",\"search icon\"],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\t\\t\\t\\t\"],[9],[0,\"\\n\\n\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"html ui segment\"],[8],[0,\"\\n\"],[4,\"ui-input\",null,[[\"theme\",\"value\"],[\"big icon\",\"search\"]],{\"statements\":[[0,\"\\t\\t\\t\\t\\t\\t\"],[6,\"i\"],[10,\"class\",\"search icon\"],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\t\\t\\t\\t\"],[9],[0,\"\\n\\n\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"html ui segment\"],[8],[0,\"\\n\"],[4,\"ui-input\",null,[[\"theme\",\"value\"],[\"huge icon\",\"search\"]],{\"statements\":[[0,\"\\t\\t\\t\\t\\t\\t\"],[6,\"i\"],[10,\"class\",\"search icon\"],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\t\\t\\t\\t\"],[9],[0,\"\\n          \\t\"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/ui-input.hbs" } });
});
define("dummy/templates/ui-label", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Ztts/gca", "block": "{\"symbols\":[],\"statements\":[[1,[20,\"outlet\"],false],[0,\"\\n\\n\"],[6,\"div\"],[10,\"class\",\"ui grid\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"ui segments\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-label\",0],null]]]],false],[0,\"\\n                \"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n\"],[4,\"ui-label\",null,[[\"theme\"],[\"rblue image\"]],{\"statements\":[[0,\"                         i am label\\n                        \"],[6,\"div\"],[10,\"class\",\"detail\"],[8],[0,\"detail\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                \"],[9],[0,\"\\n\\n                 \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-label\",1],null]]]],false],[0,\"\\n                \"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n\"],[4,\"ui-label\",null,[[\"theme\"],[\"raised segment\"]],{\"statements\":[[0,\"                        \"],[6,\"div\"],[10,\"class\",\"ribbon\"],[8],[0,\"i am label\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                \"],[9],[0,\"\\n\\n                \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-label\",2],null]]]],false],[0,\"\\n                \"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n                   \"],[4,\"ui-label\",null,[[\"theme\"],[\"basic\"]],{\"statements\":[[0,\"label\"]],\"parameters\":[]},null],[0,\"\\n                \"],[9],[0,\"\\n                \\n                \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-label\",3],null]]]],false],[0,\"\\n                \"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n                    \"],[4,\"ui-label\",null,[[\"theme\"],[\"basic red\"]],{\"statements\":[[0,\"label\"]],\"parameters\":[]},null],[0,\"\\n                \"],[9],[0,\"\\n\\n                \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-label\",4],null]]]],false],[0,\"\\n                \"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n                    \"],[4,\"ui-label\",null,[[\"theme\"],[\"red\"]],{\"statements\":[[0,\"label\"]],\"parameters\":[]},null],[0,\"\\n                \"],[9],[0,\"\\n\\n                \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-label\",5],null]]]],false],[0,\"\\n                \"],[9],[0,\"\\n\\n                \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n\"],[4,\"ui-label\",null,[[\"theme\"],[\"red image\"]],{\"statements\":[[0,\"                        \"],[6,\"img\"],[10,\"src\",\"https://www.baidu.com/img/bd_logo1.png\"],[8],[9],[0,\"\\n                        baidu\\n\"]],\"parameters\":[]},null],[0,\"                \"],[9],[0,\"\\n\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/ui-label.hbs" } });
});
define("dummy/templates/ui-labeled-button", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "InOTo2rM", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"ui grid\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"ui segments\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-labeled-button\",0],null]]]],false],[0,\"\\n                \"],[9],[0,\"           \\n                 \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n\"],[4,\"ui-labeled-button\",null,null,{\"statements\":[[4,\"ui-button\",null,[[\"theme\"],[\"primary\"]],{\"statements\":[[0,\"                            \"],[6,\"i\"],[10,\"class\",\"heart icon\"],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                        \"],[4,\"ui-label\",null,[[\"theme\"],[\"basic\"]],{\"statements\":[[0,\"2,148\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                \"],[9],[0,\"\\n\\n                \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-labeled-button\",1],null]]]],false],[0,\"\\n                \"],[9],[0,\"           \\n                 \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n\"],[4,\"ui-labeled-button\",null,null,{\"statements\":[[4,\"ui-button\",null,[[\"theme\"],[\"red\"]],{\"statements\":[[0,\"                            \"],[6,\"i\"],[10,\"class\",\"heart icon\"],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                        \"],[4,\"ui-pointing-label\",null,[[\"theme\",\"direction\"],[\"basic red\",\"left\"]],{\"statements\":[[0,\"2,148\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                \"],[9],[0,\"\\n\\n                \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-labeled-button\",2],null]]]],false],[0,\"\\n                \"],[9],[0,\"           \\n                \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n\"],[4,\"ui-labeled-button\",null,null,{\"statements\":[[4,\"ui-button\",null,[[\"theme\"],[\"basic blue\"]],{\"statements\":[[0,\"                            \"],[6,\"i\"],[10,\"class\",\"heart icon\"],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                        \"],[4,\"ui-pointing-label\",null,[[\"theme\",\"direction\"],[\"basic blue\",\"left\"]],{\"statements\":[[0,\"2,148\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n            \\n\\n\\n\\n\\n\\n\\n  \"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/ui-labeled-button.hbs" } });
});
define("dummy/templates/ui-labeled-input", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "57erdrEU", "block": "{\"symbols\":[],\"statements\":[[1,[20,\"outlet\"],false],[0,\"\\n\\n\"],[6,\"h4\"],[10,\"class\",\"ui header\"],[8],[0,\"focus\"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"html ui top attached segment\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"ui labeled input\"],[8],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"ui label\"],[8],[0,\"\\n        http://\\n      \"],[9],[0,\"\\n\"],[0,\"    \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\\n\"],[6,\"h4\"],[10,\"class\",\"ui header\"],[8],[0,\"right labeled\"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"html ui top attached segment\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"ui right labeled input\"],[8],[0,\"\\n\"],[4,\"ui-dropdown\",null,[[\"theme\"],[\"label\"]],{\"statements\":[[0,\"            \"],[6,\"div\"],[10,\"class\",\"text\"],[8],[0,\".com\"],[9],[0,\"\\n            \"],[6,\"i\"],[10,\"class\",\"dropdown icon\"],[8],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"menu\"],[8],[0,\"\\n              \"],[6,\"div\"],[10,\"class\",\"item\"],[8],[0,\".com\"],[9],[0,\"\\n              \"],[6,\"div\"],[10,\"class\",\"item\"],[8],[0,\".net\"],[9],[0,\"\\n              \"],[6,\"div\"],[10,\"class\",\"item\"],[8],[0,\".org\"],[9],[0,\"\\n            \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/ui-labeled-input.hbs" } });
});
define("dummy/templates/ui-left-labeled-button", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "e9GxJlav", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"ui grid\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"ui segments\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-left-labeled-button\",0],null]]]],false],[0,\"\\n                \"],[9],[0,\"           \\n                \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n\"],[4,\"ui-left-labeled-button\",null,null,{\"statements\":[[0,\"                        \"],[4,\"ui-pointing-label\",null,[[\"theme\",\"direction\"],[\"basic blue\",\"right\"]],{\"statements\":[[0,\"2,148\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"ui-button\",null,[[\"theme\"],[\"blue\"]],{\"statements\":[[0,\"                            \"],[6,\"i\"],[10,\"class\",\"heart icon\"],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9],[0,\"\\n\\n            \\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/ui-left-labeled-button.hbs" } });
});
define("dummy/templates/ui-menu", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Ja/Iqylb", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"ui container\"],[8],[0,\"\\n\"],[4,\"ui-menu\",null,null,{\"statements\":[[0,\"      \"],[6,\"a\"],[10,\"class\",\"active teal item\"],[8],[0,\"\\n        Inbox\\n        \"],[6,\"div\"],[10,\"class\",\"ui teal pointing left label\"],[8],[0,\"1\"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"a\"],[10,\"class\",\"item\"],[8],[0,\"\\n        Spam\\n        \"],[6,\"div\"],[10,\"class\",\"ui label\"],[8],[0,\"51\"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"a\"],[10,\"class\",\"item\"],[8],[0,\"\\n        Updates\\n        \"],[6,\"div\"],[10,\"class\",\"ui label\"],[8],[0,\"1\"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"item\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"ui transparent icon input\"],[8],[0,\"\\n          \"],[6,\"input\"],[10,\"placeholder\",\"Search mail...\"],[10,\"type\",\"text\"],[8],[9],[0,\"\\n          \"],[6,\"i\"],[10,\"class\",\"search icon\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[9]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/ui-menu.hbs" } });
});
define("dummy/templates/ui-message", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "msEdujSB", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"ui container\"],[8],[0,\"\\n\\t\"],[6,\"div\"],[10,\"class\",\"ui list\"],[8],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"item\"],[8],[0,\"\\n            \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-message\",0],null]]]],false],[0,\"\\n\\t\\t\"],[9],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"item\"],[8],[0,\"\\n\\t\\t\\t\"],[4,\"ui-message\",null,[[\"type\",\"header\"],[\"info\",\"这是一条提示消息\"]],{\"statements\":[],\"parameters\":[]},null],[0,\"\\n\\t\\t\"],[9],[0,\"\\n\\t\\t\\n\\t\\t\"],[6,\"br\"],[8],[9],[6,\"br\"],[8],[9],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"item\"],[8],[0,\"\\n            \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-message\",1],null]]]],false],[0,\"\\n\\t\\t\"],[9],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"item\"],[8],[0,\"\\n\\t\\t\\t\"],[4,\"ui-message\",null,[[\"type\",\"header\"],[\"success\",\"这是一条成功消息\"]],{\"statements\":[],\"parameters\":[]},null],[0,\"\\n\\t\\t\"],[9],[0,\"\\n\\t\\t\\n\\t\\t\"],[6,\"br\"],[8],[9],[6,\"br\"],[8],[9],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"item\"],[8],[0,\"\\n            \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-message\",2],null]]]],false],[0,\"\\n\\t\\t\"],[9],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"item\"],[8],[0,\"\\n\\t\\t\\t\"],[4,\"ui-message\",null,[[\"type\",\"header\"],[\"error\",\"这是一条错误消息\"]],{\"statements\":[],\"parameters\":[]},null],[0,\"\\n\\t\\t\"],[9],[0,\"\\n\\t\\t\\n\\t\\t\"],[6,\"br\"],[8],[9],[6,\"br\"],[8],[9],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"item\"],[8],[0,\"\\n            \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-message\",3],null]]]],false],[0,\"\\n\\t\\t\"],[9],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"item\"],[8],[0,\"\\n\\t\\t\\t\"],[4,\"ui-message\",null,[[\"type\",\"header\"],[\"warning\",\"这是一条警告消息\"]],{\"statements\":[],\"parameters\":[]},null],[0,\"\\n\\t\\t\"],[9],[0,\"\\n\\t\\t\\n\\t\\t\"],[6,\"br\"],[8],[9],[6,\"br\"],[8],[9],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"item\"],[8],[0,\"\\n            \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-message\",4],null]]]],false],[0,\"\\n\\t\\t\"],[9],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"item\"],[8],[0,\"\\n\\t\\t\\t\"],[4,\"ui-message\",null,[[\"header\"],[\"这是一条消息\"]],{\"statements\":[],\"parameters\":[]},null],[0,\"\\n\\t\\t\"],[9],[0,\"\\n\\t\\t\\n\\t\\t\"],[6,\"br\"],[8],[9],[6,\"br\"],[8],[9],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"item\"],[8],[0,\"\\n            \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-message\",5],null]]]],false],[0,\"\\n\\t\\t\"],[9],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"item\"],[8],[0,\"\\n\\t\\t\\t\"],[4,\"ui-message\",null,[[\"header\",\"size\"],[\"这是超大号消息\",\"massive\"]],{\"statements\":[],\"parameters\":[]},null],[0,\"\\n\\t\\t\"],[9],[0,\"\\n\\t\\t\\n\\t\\t\"],[6,\"br\"],[8],[9],[6,\"br\"],[8],[9],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"item\"],[8],[0,\"\\n            \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-message\",6],null]]]],false],[0,\"\\n\\t\\t\"],[9],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"item\"],[8],[0,\"\\n\\t\\t\\t\"],[4,\"ui-message\",null,[[\"close\",\"header\"],[true,\"这是一条可清除的消息\"]],{\"statements\":[],\"parameters\":[]},null],[0,\"\\n\\t\\t\"],[9],[0,\"\\n\\t\\t\\n\\t\\t\"],[6,\"br\"],[8],[9],[6,\"br\"],[8],[9],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"item\"],[8],[0,\"\\n            \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-message\",7],null]]]],false],[0,\"\\n\\t\\t\"],[9],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"item\"],[8],[0,\"\\n\\t\\t\\t\"],[4,\"ui-message\",null,[[\"header\",\"timeout\"],[\"这是一条可自动消除的消息\",20000]],{\"statements\":[],\"parameters\":[]},null],[0,\"\\n\\t\\t\"],[9],[0,\"\\n\\t\\t\\n\\t\\t\"],[6,\"br\"],[8],[9],[6,\"br\"],[8],[9],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"item\"],[8],[0,\"\\n            \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-message\",8],null]]]],false],[0,\"\\n\\t\\t\"],[9],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"item\"],[8],[0,\"\\n\"],[4,\"ui-message\",null,[[\"header\"],[\"这是一条带内容的消息\"]],{\"statements\":[[0,\"\\t\\t\\t\\t\"],[6,\"ul\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"li\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"p\"],[8],[0,\"第一点\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"li\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"p\"],[8],[0,\"第二点\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\t\\t\"],[9],[0,\"\\n\\t\"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/ui-message.hbs" } });
});
define("dummy/templates/ui-modal", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ISluFvI6", "block": "{\"symbols\":[],\"statements\":[[1,[20,\"outlet\"],false],[0,\"\\n\\n\"],[6,\"div\"],[10,\"class\",\"ui grid\"],[8],[0,\"\\n\\t\"],[6,\"div\"],[10,\"class\",\"column\"],[8],[0,\"\\n\\t\\t\"],[6,\"div\"],[10,\"class\",\"ui items\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"h3\"],[8],[0,\"normal\"],[9],[0,\"\\n\\t\\t\\t\"],[4,\"ui-button\",null,[[\"action\"],[[26,\"action\",[[21,0,[]],\"clickHandler\"],null]]],{\"statements\":[[0,\"click me\"]],\"parameters\":[]},null],[0,\"\\n\\t\\t\\t\"],[4,\"ui-button\",null,[[\"action\"],[[26,\"action\",[[21,0,[]],\"clickHandler\",\"horizontal flip\"],null]]],{\"statements\":[[0,\"Horizontal Flip\"]],\"parameters\":[]},null],[0,\"\\n\\t\\t\\t\"],[4,\"ui-button\",null,[[\"action\"],[[26,\"action\",[[21,0,[]],\"clickHandler\",\"vertical flip\"],null]]],{\"statements\":[[0,\"Vertical Flip\"]],\"parameters\":[]},null],[0,\"\\n\\t\\t\\t\"],[4,\"ui-button\",null,[[\"action\"],[[26,\"action\",[[21,0,[]],\"clickHandler\",\"fade up\"],null]]],{\"statements\":[[0,\"Fade Up\"]],\"parameters\":[]},null],[0,\"\\n\\t\\t\\t\"],[4,\"ui-button\",null,[[\"action\"],[[26,\"action\",[[21,0,[]],\"clickHandler\",\"fade\"],null]]],{\"statements\":[[0,\"Fade\"]],\"parameters\":[]},null],[0,\"\\n\\t\\t\\t\"],[4,\"ui-button\",null,[[\"action\"],[[26,\"action\",[[21,0,[]],\"clickHandler\",\"scale\"],null]]],{\"statements\":[[0,\"Scale\"]],\"parameters\":[]},null],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"item\"],[8],[0,\"\\n                \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-modal\",0],null]]]],false],[0,\"\\n\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"item\"],[8],[0,\"\\n\"],[4,\"ui-modal\",null,[[\"show\",\"onShow\",\"onApprove\",\"onHide\",\"onDeny\",\"transition\"],[[22,[\"display\"]],[26,\"action\",[[21,0,[]],\"onShow\"],null],[26,\"action\",[[21,0,[]],\"onApprove\"],null],[26,\"action\",[[21,0,[]],\"onHide\"],null],[26,\"action\",[[21,0,[]],\"onDeny\"],null],[22,[\"transition\"]]]],{\"statements\":[[0,\"\\t\\t\\t\\t\\t\"],[4,\"ui-modal-title\",null,null,{\"statements\":[[0,\"modal 1\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"ui-modal-content\",null,[[\"theme\"],[\"image\"]],{\"statements\":[[0,\"\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"ui small image\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"img\"],[10,\"src\",\"//www.baidu.com/img/bd_logo1.png\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"description\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"ui header\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[6,\"p\"],[8],[0,\"first role\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"ui-modal-foot\",null,null,{\"statements\":[[0,\"\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"ui black deny button\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t    Nope\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"ui positive right labeled icon button\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t    Yep, that's me \"],[6,\"i\"],[10,\"class\",\"checkmark icon\"],[8],[9],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\t\\t    \"],[9],[0,\"\\n\\t\\t\"],[9],[0,\"\\n\\t\"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/ui-modal.hbs" } });
});
define("dummy/templates/ui-multi-select", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "cx+SD+ui", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"ui grid\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"ui segments\"],[8],[0,\"\\n            \\t\"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-multi-select\",0],null]]]],false],[0,\"\\n            \\t\"],[9],[0,\"\\n            \\t\"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"meta\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[1,[20,\"valueShow\"],false],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n\"],[4,\"ui-multi-select\",null,[[\"label\",\"options\",\"value\"],[\"品牌选择\",[22,[\"options\",\"options\"]],[22,[\"value\"]]]],{\"statements\":[[0,\"                        \"],[6,\"label\"],[8],[0,\"品牌选择\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \\t\"],[9],[0,\"\\n\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/ui-multi-select.hbs" } });
});
define("dummy/templates/ui-pointing-label", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "UA23YPUp", "block": "{\"symbols\":[],\"statements\":[[1,[20,\"outlet\"],false],[0,\"\\n\\n\"],[6,\"div\"],[10,\"class\",\"ui grid\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"ui segments\"],[8],[0,\"\\n                 \\n                 \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-pointing-label\",0],null]]]],false],[0,\"\\n                \"],[9],[0,\"           \\n                \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n\"],[4,\"ui-pointing-label\",null,[[\"theme\",\"direction\"],[\"red\",\"left\"]],{\"statements\":[[0,\"                        below label\\n\"]],\"parameters\":[]},null],[0,\"                \"],[9],[0,\"\\n                \\n                \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-pointing-label\",1],null]]]],false],[0,\"\\n                \"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n\"],[4,\"ui-pointing-label\",null,[[\"theme\",\"direction\"],[\"tag blue\",\"below\"]],{\"statements\":[[0,\"                        label\\n\"]],\"parameters\":[]},null],[0,\"                \"],[9],[0,\"\\n\\n\\n                 \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-pointing-label\",2],null]]]],false],[0,\"\\n                \"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n\"],[4,\"ui-pointing-label\",null,[[\"direction\"],[\"below\"]],{\"statements\":[[0,\"                        below label\\n\"]],\"parameters\":[]},null],[0,\"                \"],[9],[0,\"\\n\\n\\n                 \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-pointing-label\",3],null]]]],false],[0,\"\\n                \"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n\"],[4,\"ui-pointing-label\",null,[[\"direction\"],[\"left\"]],{\"statements\":[[0,\"                        left label\\n\"]],\"parameters\":[]},null],[0,\"                \"],[9],[0,\"\\n\\n                 \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-pointing-label\",4],null]]]],false],[0,\"\\n                \"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n\"],[4,\"ui-pointing-label\",null,[[\"direction\"],[\"right\"]],{\"statements\":[[0,\"                        right lbale\\n\"]],\"parameters\":[]},null],[0,\"                \"],[9],[0,\"\\n\\n           \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/ui-pointing-label.hbs" } });
});
define("dummy/templates/ui-popup", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "0+GQ/GAb", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"ui grid\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"ui segments\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-popup\",0],null]]]],false],[0,\"\\n                \"],[9],[0,\"\\n\\n                \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n                    \"],[4,\"ui-popup\",null,[[\"popup\",\"tagName\",\"class\",\"onShow\"],[[22,[\"target\"]],\"button\",\"ui button\",[26,\"action\",[[21,0,[]],\"onPopupShow\",\"hello pop\"],null]]],{\"statements\":[[0,\"show me\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"ui-popup-content\",null,[[\"target\"],[[26,\"mut\",[[22,[\"target\"]]],null]]],{\"statements\":[[0,\"                        \"],[6,\"div\"],[10,\"class\",\"header\"],[8],[0,\"\\n                            \"],[1,[20,\"value\"],false],[0,\"\\n                        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                \"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-popup\",1],null]]]],false],[0,\"\\n                \"],[9],[0,\"\\n\\n                \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[4,\"ui-popup\",null,[[\"popup\",\"tagName\",\"event\",\"hoverable\",\"class\",\"onShow\"],[[22,[\"target1\"]],\"button\",\"click\",true,\"ui button\",[26,\"action\",[[21,0,[]],\"onPopupShow\",\"hello pop\"],null]]],{\"statements\":[[0,\"show me\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"ui-popup-content\",null,[[\"target\",\"class\"],[[26,\"mut\",[[22,[\"target1\"]]],null],\"fluid\"]],{\"statements\":[[0,\"                        \"],[6,\"div\"],[10,\"class\",\"ui grid\"],[8],[0,\"\\n                            \"],[6,\"div\"],[10,\"class\",\"ui form six column\"],[8],[0,\"\\n                              \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n                                \"],[6,\"textarea\"],[10,\"name\",\"\"],[10,\"id\",\"\"],[10,\"cols\",\"30\"],[10,\"rows\",\"10\"],[8],[9],[0,\"\\n                              \"],[9],[0,\"\\n                              \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n                                  \"],[6,\"button\"],[10,\"class\",\"ui button save\"],[3,\"action\",[[21,0,[]],\"save\"]],[8],[0,\"save\"],[9],[0,\"\\n                                  \"],[6,\"button\"],[10,\"class\",\"ui button cancel\"],[3,\"action\",[[21,0,[]],\"cancel\"]],[8],[0,\"cancel\"],[9],[0,\"\\n                              \"],[9],[0,\"\\n                            \"],[9],[0,\"\\n                        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                \"],[9],[0,\" \\n\\n                \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-popup\",2],null]]]],false],[0,\"\\n                \"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[4,\"ui-popup\",null,[[\"tagName\",\"hoverable\",\"title\",\"content\"],[\"span\",true,\"i am popup title\",\"i am popup content\"]],{\"statements\":[[0,\"show me\"]],\"parameters\":[]},null],[0,\"\\n                \"],[9],[0,\"      \\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/ui-popup.hbs" } });
});
define("dummy/templates/ui-progress", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "3E6e/8+P", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"ui container\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"ui dividing header\"],[8],[0,\"ui progress\"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n        \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-progress\",0],null]]]],false],[0,\"\\n    \"],[9],[0,\"\\n    \"],[1,[26,\"ui-progress\",null,[[\"percent\"],[[22,[\"value\"]]]]],false],[0,\"\\n    \"],[1,[26,\"ui-progress\",null,[[\"percent\",\"class\"],[[22,[\"value\"]],\"indicating\"]]],false],[0,\"\\n    \"],[1,[26,\"ui-progress\",null,[[\"percent\",\"class\"],[[22,[\"value\"]],\"red\"]]],false],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"ui grid\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n            \"],[6,\"button\"],[10,\"class\",\"ui green button\"],[3,\"action\",[[21,0,[]],\"plus\"]],[8],[0,\"+\"],[9],[0,\"\\n            \"],[6,\"button\"],[10,\"class\",\"ui button\"],[3,\"action\",[[21,0,[]],\"minus\"]],[8],[0,\"-\"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/ui-progress.hbs" } });
});
define("dummy/templates/ui-radio-group", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "/K6wh7yH", "block": "{\"symbols\":[\"vc\"],\"statements\":[[6,\"div\"],[10,\"class\",\"ui grid\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"ui segments\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-radio-group\",0],null]]]],false],[0,\"\\n                \"],[9],[0,\"           \\n                \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n                    \"],[6,\"div\"],[10,\"class\",\"ui form\"],[8],[0,\"\\n\"],[4,\"ui-radio-group\",null,[[\"theme\",\"value\",\"name\"],[\"grouped\",[22,[\"checkvalue\"]],\"co1\"]],{\"statements\":[[0,\"                            \"],[6,\"label\"],[8],[0,\"choose company\"],[9],[0,\"\\n                        \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n                            \"],[4,\"ui-radio\",null,[[\"value\",\"action\"],[\"apple\",[21,1,[]]]],{\"statements\":[[0,\"apple\"]],\"parameters\":[]},null],[0,\"\\n                        \"],[9],[0,\"\\n                        \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n                            \"],[4,\"ui-radio\",null,[[\"value\",\"action\"],[\"google\",[21,1,[]]]],{\"statements\":[[0,\"google\"]],\"parameters\":[]},null],[0,\"\\n                        \"],[9],[0,\"\\n                        \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n                            \"],[4,\"ui-radio\",null,[[\"value\",\"action\"],[\"dropbox\",[21,1,[]]]],{\"statements\":[[0,\"dropbox\"]],\"parameters\":[]},null],[0,\"\\n                        \"],[9],[0,\"\\n                        \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n                            \"],[1,[20,\"checkvalue\"],false],[0,\"\\n                        \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"                    \"],[9],[0,\"\\n                \"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-radio-group\",1],null]]]],false],[0,\"\\n                \"],[9],[0,\"           \\n                \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n                    \"],[6,\"div\"],[10,\"class\",\"ui form\"],[8],[0,\"\\n\"],[4,\"ui-radio-group\",null,[[\"name\",\"labelPath\",\"label\",\"theme\",\"options\",\"value\"],[\"co3\",\"name\",\"choose company\",\"inline fields\",[22,[\"options\",\"options\"]],[22,[\"checkvalue3\"]]]],{\"statements\":[],\"parameters\":[]},null],[0,\"                        \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n                            \"],[1,[20,\"checkvalue3\"],false],[0,\"\\n                        \"],[9],[0,\"\\n                    \"],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/ui-radio-group.hbs" } });
});
define("dummy/templates/ui-radio", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "zoVFUuck", "block": "{\"symbols\":[],\"statements\":[[1,[20,\"outlet\"],false],[0,\"\\n\\n\\n\"],[6,\"div\"],[10,\"class\",\"ui container\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"ui dividing header\"],[8],[0,\"ui radio\"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"ui two column grid\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui compact segment\"],[8],[0,\"\\n                    \"],[0,\"{{#ui-radio}}normal\"],[0,\"{{/ui-radio}}\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[0,\"\\n                \"],[4,\"ui-radio\",null,null,{\"statements\":[[0,\"normal\"]],\"parameters\":[]},null],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui compact segment\"],[8],[0,\"\\n                    \"],[0,\"{{#ui-radio checked=true }}normal\"],[0,\"{{/ui-radio}}\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[0,\"\\n                \"],[4,\"ui-radio\",null,[[\"checked\"],[true]],{\"statements\":[[0,\"normal\"]],\"parameters\":[]},null],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui compact segment\"],[8],[0,\"\\n                    \"],[0,\"{{#ui-radio theme=\\\"toggle\\\"}}toggle\"],[0,\"{{/ui-radio}}\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[0,\"\\n                \"],[4,\"ui-radio\",null,[[\"theme\"],[\"toggle\"]],{\"statements\":[[0,\"toggle\"]],\"parameters\":[]},null],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui compact segment\"],[8],[0,\"\\n                    \"],[0,\"{{#ui-radio checked=true theme=\\\"toggle\\\"}}toggle\"],[0,\"{{/ui-radio}}\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[0,\"\\n                \"],[4,\"ui-radio\",null,[[\"checked\",\"theme\"],[true,\"toggle\"]],{\"statements\":[[0,\"toggle\"]],\"parameters\":[]},null],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui compact segment\"],[8],[0,\"\\n                    \"],[0,\"{{#ui-radio theme=\\\"slider\\\" }}slider\"],[0,\"{{/ui-radio}}\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[0,\"\\n                \"],[4,\"ui-radio\",null,[[\"theme\"],[\"slider\"]],{\"statements\":[[0,\"slider\"]],\"parameters\":[]},null],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"ui dividing header\"],[8],[0,\"useage\"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"ui two column grid\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui compact segment\"],[8],[0,\"\\n                    \"],[0,\"{{#ui-radio checked=true  theme=\\\"slider\\\" }}slider\"],[0,\"{{/ui-radio}}\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[0,\"\\n                \"],[4,\"ui-radio\",null,[[\"checked\",\"value\",\"theme\"],[[22,[\"isChecked\"]],\"apple\",\"slider\"]],{\"statements\":[[0,\"slider\"]],\"parameters\":[]},null],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui left pointing  label\"],[8],[1,[20,\"isChecked\"],false],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/ui-radio.hbs" } });
});
define("dummy/templates/ui-segment", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "LMSvS7kj", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"ui grid\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"ui segments\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[0,\"{{#ui-segment tab='second'}}second\"],[0,\"{{/ui-segment}}\\n                \"],[9],[0,\"           \\n                \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n\"],[4,\"ui-segment\",null,[[\"tab\"],[\"second\"]],{\"statements\":[[0,\"                        second\\n\"]],\"parameters\":[]},null],[0,\"                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/ui-segment.hbs" } });
});
define("dummy/templates/ui-select", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "A7M7tl1s", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"ui grid\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"ui segments\"],[8],[0,\"\\n            \\t\"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-select\",0],null]]]],false],[0,\"\\n            \\t\"],[9],[0,\"\\n            \\t\"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\"],[6,\"div\"],[10,\"class\",\"meta\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[1,[20,\"value\"],false],[0,\"\\n\\t\\t\\t\\t\\t\"],[9],[0,\"\\n            \\t\\t\"],[1,[26,\"ui-select\",null,[[\"label\",\"placeholder\",\"search\",\"options\",\"value\"],[\"select brand\",\"select brand\",true,[22,[\"options\",\"options\"]],[26,\"mut\",[[22,[\"value\"]]],null]]]],false],[0,\"\\n            \\t\"],[9],[0,\"\\n\\t\\t\\t\"],[9],[0,\"\\n\\t\\t\"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/ui-select.hbs" } });
});
define("dummy/templates/ui-tab-menu", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "X6iPtdFe", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"ui grid\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"ui segments\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"ui secondary segment\"],[8],[0,\"\\n                    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-tab-menu\",0],null]]]],false],[0,\"\\n                \"],[9],[0,\"           \\n                \"],[6,\"div\"],[10,\"class\",\"ui segment\"],[8],[0,\"\\n\"],[4,\"ui-tab-menu\",null,[[\"tabs\",\"active\"],[\"first,second\",\"first\"]],{\"statements\":[[0,\"                \\t\\t\\n\"]],\"parameters\":[]},null],[4,\"ui-tab-segment\",null,[[\"tab\",\"active\"],[\"first\",true]],{\"statements\":[[0,\"                \\t\\tfirst\\n\"]],\"parameters\":[]},null],[4,\"ui-tab-segment\",null,[[\"tab\"],[\"second\"]],{\"statements\":[[0,\"                \\t\\tsecond\\n\"]],\"parameters\":[]},null],[0,\"                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/ui-tab-menu.hbs" } });
});
define("dummy/templates/ui-text-container", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "W/008/AD", "block": "{\"symbols\":[],\"statements\":[[4,\"ui-text-container\",null,null,{\"statements\":[[0,\"  \"],[6,\"pre\"],[8],[0,\"\\n    \"],[0,\"{{#ui-text-container}}hello ember-semantic-ui\"],[0,\"{{/ui-text-container}}\\n  \"],[9],[0,\"\\n  \"],[6,\"p\"],[8],[0,\"hello ember-semantic-ui\"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/ui-text-container.hbs" } });
});
define("dummy/templates/ui-uploader", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ShhzhsdY", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"ui container\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"ui dividing header\"],[8],[0,\"ui uploader\"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"ui grid\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"column\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"ui form\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"field\"],[8],[0,\"\\n                    \"],[1,[26,\"code-highlight\",null,[[\"code\"],[[26,\"code-show\",[\"ui-uploader\",0],null]]]],false],[0,\"\\n                \"],[9],[0,\"\\n                \"],[4,\"ui-uploader\",null,[[\"multiple\",\"url\",\"autoUpload\",\"uploadStart\",\"uploadProgress\",\"uploadSucess\",\"deleteFile\"],[true,\"/upload\",true,\"uploadStart\",\"uploadProgress\",\"uploadSucess\",\"deleteFile\"]],{\"statements\":[],\"parameters\":[]},null],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/ui-uploader.hbs" } });
});
define("dummy/templates/ui-vertical-menu", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "6obXstHD", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"ui container\"],[8],[0,\"\\n\"],[4,\"ui-vertical-menu\",null,[[\"class\"],[\"text\"]],{\"statements\":[[0,\"      \"],[6,\"a\"],[10,\"class\",\"active teal item\"],[8],[0,\"\\n        Inbox\\n        \"],[6,\"div\"],[10,\"class\",\"ui teal pointing left label\"],[8],[0,\"1\"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"a\"],[10,\"class\",\"item\"],[8],[0,\"\\n        Spam\\n        \"],[6,\"div\"],[10,\"class\",\"ui label\"],[8],[0,\"51\"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"a\"],[10,\"class\",\"item\"],[8],[0,\"\\n        Updates\\n        \"],[6,\"div\"],[10,\"class\",\"ui label\"],[8],[0,\"1\"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \"],[6,\"div\"],[10,\"class\",\"item\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"ui transparent icon input\"],[8],[0,\"\\n          \"],[6,\"input\"],[10,\"placeholder\",\"Search mail...\"],[10,\"type\",\"text\"],[8],[9],[0,\"\\n          \"],[6,\"i\"],[10,\"class\",\"search icon\"],[8],[9],[0,\"\\n        \"],[9],[0,\"\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[9]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/ui-vertical-menu.hbs" } });
});
define('dummy/utils/ember-uploader', ['exports', 'ember-semantic-ui/utils/ember-uploader'], function (exports, _emberUploader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberUploader.default;
    }
  });
});
define('dummy/utils/file-object', ['exports', 'ember-semantic-ui/utils/file-object'], function (exports, _fileObject) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fileObject.default;
    }
  });
});


define('dummy/config/environment', [], function() {
  var exports = {'default': {"modulePrefix":"dummy","environment":"gh-pages","rootURL":"/ember-semantic-ui/","locationType":"hash","EmberENV":{"FEATURES":{}},"APP":{"rootElement":"#ember-semantic-ui-demo"},"exportApplicationGlobal":true}};Object.defineProperty(exports, '__esModule', {value: true});return exports;
});

if (!runningTests) {
  require("dummy/app")["default"].create({"rootElement":"#ember-semantic-ui-demo"});
}
//# sourceMappingURL=dummy.map
