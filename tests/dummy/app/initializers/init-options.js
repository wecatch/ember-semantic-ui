export function initialize() {
  const application = arguments[1] || arguments[0];
  application.inject('controller', 'options', 'service:options');
}

export default {
  name: 'init-options',
  initialize: initialize,
};
