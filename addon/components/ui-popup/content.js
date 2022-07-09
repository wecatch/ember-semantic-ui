import Component from '@glimmer/component';
import { scheduleOnce, bind } from '@ember/runloop';
import { guidFor } from '@ember/object/internals';

export default class UiPopupContentComponent extends Component {
  elementId = guidFor(this);
  constructor() {
    super(...arguments);
    scheduleOnce('afterRender', bind(this, this.attachPop));
  }

  attachPop() {
    if (this.args.onAttach) {
      this.args.onAttach(this.elementId);
    }
  }
}
