import Controller from '@ember/controller';

export default Controller.extend({
  value: null,
  actions: {
    checkedCheck(checked, value) {
      console.log(`${checked} ${value}`);
    },
  },
});
