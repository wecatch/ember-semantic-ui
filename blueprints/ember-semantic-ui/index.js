/*jshint node:true*/
module.exports = {
  description: '',
  normalizeEntityName: function() {}, // no-op since we're just adding dependencies

  afterInstall: function() {
    var self = this;
    return this.addBowerPackageToProject('moment').then(function(){
        return self.addBowerPackageToProject('pikaday');  
    }).then(function(){
        return self.addBowerPackageToProject('semantic');
    });
  }
};
