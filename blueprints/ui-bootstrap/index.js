/*jshint node:true*/
module.exports = {
  description: 'An Ember-flavoured Bootstrap 4.x eco-system'

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall: function() {
    return this.addBowerPackagesToProject([
      { name: 'bootstrap', target: '#v4.0.0-alpha.2' }
    ]);
	}
};
