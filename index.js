/* jshint node: true */
'use strict';
const path = require('path');
const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ui-bootstrap',
  description: 'An Ember-flavoured Bootstrap 4.x eco-system',

  included(app, parentAddon) {
    this._super.included(app);
    const target = (parentAddon || app);
    const bower = target.bowerDirectory;
    const o = app.options['ui-bootstrap'] || { js: false};
    const configMessage = [];
    target.import('vendor/ui-bootstrap/ui-bootstrap.css');

    // Import JS from bootstrap
    if(o.js instanceof Array) {
      o.js.forEach(function(fileName) {
        app.import(bower + 'javascripts/bootstrap/' + fileName + '.js');
      });
      configMessage.push('some JS loaded [' + o.js.join(',') + ']');
    } else if (o.js !== false) {
      app.import(bower + 'javascripts/bootstrap.js');
      configMessage.push('all JS enabled');
    } else {
      configMessage.push('no JS enabled');
    }

    if(o.quiet !== true) {
      this.ui.writeLine('ui-bootstrap config: ' + configMessage.join(', '));
    }
  },

  treeForStyles: function(){
    const bootstrapPath = path.join('bower_components', 'bootstrap/scss');
    const trees = [];
    const existingStyle = this._super.treeForStyles.apply(this, arguments);
    const bootstrap = new Funnel(bootstrapPath, {
      srcDir: '/',
      destDir: '/'
    });
    trees.push(bootstrap);
    if (existingStyle) {
      trees.push(existingStyle);
    }

    return mergeTrees(trees);
  },

  isDevelopingAddon: function () {
    return true;
  }
};
