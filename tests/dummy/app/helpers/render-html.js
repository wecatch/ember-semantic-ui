import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';
import hljs from 'highlight.js';
import handlebars from 'highlight.js/lib/languages/handlebars';
import xml from 'highlight.js/lib/languages/xml';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('handlebars', handlebars);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('javascript', javascript);

export default helper(function renderHtml(positional /*, named*/) {
  let [html, lang] = positional;
  return htmlSafe(hljs.highlight(html, { language: lang }).value);
});
