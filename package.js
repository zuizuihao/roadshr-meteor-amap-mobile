Package.describe({
  name: 'roadshr:meteor-amap-mobile',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.3.2.4');
  api.use('ecmascript');
  api.export('AMapMobileAPI', 'client');
  api.addFiles('meteor-amap-mobile.js', 'client');
});

Cordova.depends({
  "com.roadshr.cordova.amapplugin": "file:///Volumes/G/roadshr/amap-phonegap-plugin",
  "cordova-plugin-device": "1.1.2"
});

Package.onTest(function (api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('roadshr:meteor-amap-mobile');
  api.mainModule('meteor-amap-mobile-tests.js');
});
