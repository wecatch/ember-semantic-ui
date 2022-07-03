import Controller from '@ember/controller';

export default Controller.extend({
  value: '',
  options: [
    {
      name: 'Google',
      value: 'Google'
    },
    {
      name: 'Apple',
      value: 'Apple'
    },
  ]
});
