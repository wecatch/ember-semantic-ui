import Component from '@glimmer/component';
import { scheduleOnce } from '@ember/runloop';
import { guidFor } from '@ember/object/internals';

export default class UiPopupContentComponent extends Component {
  elementId = guidFor(this);
  constructor() {
    super(...arguments);
    if (typeof this.args.target) {
      scheduleOnce('afterRender',() => {
        this.args.popup(this.elementId);
      });
    }
  }
}
