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
    console.log('You must manually install Bootstrap 4 for now as I can not get the normal automation going, I guess due to the hash required. ');
    console.log();
    console.log('To install type: bower install --save "bootstrap#v4.0.0-alpha.2"');
    // return Promise.resolve();
    // return this.addBowerPackagesToProject([
    //   { name: '"bootstrap#v4.0.0-alpha.2"' }
    // ]);
	}
};
