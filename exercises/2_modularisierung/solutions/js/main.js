/**
  Copyright (c) 2015, 2016, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
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

require(['ojs/ojcore',
         'knockout',
         'jquery',
         'knockout-postbox',
         'ojs/ojknockout',
         'ojs/ojtoolbar',
         'ojs/ojbutton',
         'ojs/ojrouter',
         'ojs/ojmodule'],
function (oj, ko, $) {
  // Speichere die Root-Instanz des oj-router in einer lokalen Variable
  var router = oj.Router.rootInstance;
  // Konfiguriere den Router, sodass die Module 'search' (Label: Suche, Default-Ansicht)
  //                                        und 'artist' (Label: Interpret) bekannt werden.
  // Es sind keine weiteren Attribute wie z.B. Value erforderlich.
  router.configure({
    'search': {label: 'Suche', isDefault: true},
    'artist': {label: 'Interpret'}
  });
  // Erstelle ein leeres Objekt namens 'viewModel', dessen 'router' Attribut auf den zuvor konfigurierten Router zeigt
  var viewModel = {
    router: router
  };

  $(document).ready(function () {
    // Rufe ko.applyBindings erst auf sobald der Router sich synchronisiert hat 
    // (siehe  ggf nochmals in cookbook Simple Router Beispiel)
    oj.Router.sync();
    ko.applyBindings(viewModel, document.getElementById('page'));    
  });
});
