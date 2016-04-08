/* jshint node: true */
'use strict';
const path = require('path');
const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');
const merge = require('merge');

module.exports = {
  name: 'ui-bootstrap',
  description: 'An Ember-flavoured Bootstrap 4.x eco-system',

  included(app, parentAddon) {
    const target = (parentAddon || app);
    this._super.included(target);
    const addonConfig = this.addonConfig = app.project.config(app.env)['uiBootstrap'] || {};
    const addonBuildConfig = app.options['uiBootstrap'];
    let o = merge({ useSASS: true }, addonConfig, addonBuildConfig);

    if (o.useSASS) {
      const sassOptions = app.options.sassOptions || { includePaths: []};
      const bootstrapPath = path.join(app.bowerDirectory, 'bootstrap/scss');
      sassOptions.includePaths.push(bootstrapPath);
    } else {
      target.import(path.join(app.bowerDirectory, 'bootstrap/dist/css/bootstrap.css'));
    }
    // ui-bootstrap specific
    target.import('vendor/ui-bootstrap/ui-bootstrap.css');
  },

  treeForStyles: function(tree) {
    const bootstrapPath = path.join('bower_components', 'bootstrap/scss');
    const trees = [];
    if(tree) {
      trees.push(tree);
    }
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
