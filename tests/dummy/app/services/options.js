import Service from '@ember/service';

export default class OptionService extends Service {
  constructor() {
    super(...arguments);
    this.options = [
      { name: 'google', value: 'google' },
      { name: 'apple', value: 'apple' },
      { name: 'dropbox', value: 'dropbox' },
      { name: 'twitter', value: 'twitter' },
      { name: 'facebook', value: 'facebook' },
    ];
  }
}
