/*jshint node:true*/
module.exports = {
  description: '',
  normalizeEntityName: function() {}, // no-op since we're just adding dependencies

  afterInstall: function() {
    return this.addBowerPackageToProject('semantic');
  }
};
