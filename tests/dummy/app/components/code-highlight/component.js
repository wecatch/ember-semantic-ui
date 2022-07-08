// import Ember from 'ember';
import { action } from '@ember/object';
import { htmlSafe } from '@ember/template';
import hljs from 'highlight.js';
import Component from '@glimmer/component';

// import Handlebars from 'handlebars';

// const { Utils } = Handlebars;

hljs.configure({ useBR: true, tabReplace: '    ' });

export default class CodeHighlightComponent extends Component {
  get lang() {
    return this.args.lang ?? 'handlebars';
  }

  @action
  register(element) {
    hljs.highlightElement(element);
  }

  get codeBlock() {
    if (this.args.code) {
      return htmlSafe(
        hljs.highlightAuto(this.args.code, ['handlebars', 'javascript']).value
      );
    }

    return '';
  }
}
