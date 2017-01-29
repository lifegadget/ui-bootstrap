/*jshint node:true*/
module.exports = {
  description: 'An Ember-flavoured Bootstrap 4.x eco-system',

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }
  normalizeEntityName: function() {

  },

  afterInstall: function() {
    return this.addPackagesToProject([
      {name: 'bootstrap', target: '4.0.0-alpha.6'}
    ]);

	}
};
