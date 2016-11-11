/**
  Copyright (c) 2015, 2016, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
'use strict';

/**
 * Example of Require.js boostrap javascript
 */

requirejs.config(
  {
    baseUrl: 'js',

    // Path mappings for the logical module names
    paths:
    //injector:mainReleasePaths
    {
      'knockout': 'libs/knockout/knockout-3.4.0.debug',
      'jquery': 'libs/jquery/jquery-3.1.0',
      'jqueryui-amd': 'libs/jquery/jqueryui-amd-1.12.0',
      'promise': 'libs/es6-promise/es6-promise',
      'hammerjs': 'libs/hammer/hammer-2.0.8',
      'ojdnd': 'libs/dnd-polyfill/dnd-polyfill-1.0.0',
      'ojs': 'libs/oj/v2.1.0/debug',
      'ojL10n': 'libs/oj/v2.1.0/ojL10n',
      'ojtranslations': 'libs/oj/v2.1.0/resources',
      'text': 'libs/require/text',
      'signals': 'libs/js-signals/signals',
      'knockout-postbox': 'libs/knockout-postbox/knockout-postbox',
      'spotify': 'spotify'
    }
    //endinjector
    ,
    // Shim configurations for modules that do not expose AMD
    shim:
    {
      jquery:
      {
        exports: ['jQuery', '$']
      }
    }
  }
);

require(['ojs/ojcore', 'knockout', 'jquery', 'knockout-postbox',
         'ojs/ojknockout', 'ojs/ojtoolbar', 'ojs/ojbutton', 'ojs/ojrouter',
         'ojs/ojmodule'],
function (oj, ko, $) {
  // Retrieve the router static instance and configure the states
  var router = oj.Router.rootInstance;
  router.configure({
    'search': {label: 'Suche', isDefault: true},
    'artist': {label: 'Interpret'},
    'album': {label: 'Album'},
    'add-artist': {label: 'Add Artist'}
  });

  ko.postbox.subscribe('add-artist', function onAddArtist (newArtist) {
    // normally, you would save the artist to a database (e.g. via REST call)
    // for now, just print the artist to the user
    alert(JSON.stringify(newArtist));
  });

  var viewModel = {
    router: router
  };

  $(document).ready(function () {
    oj.Router.sync().then(function () {
      ko.applyBindings(viewModel, document.getElementById('page'));
    });
  });
});
