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
      'knockout': 'libs/knockout/knockout.debug',
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
         // TODO 1.1: Importiere das fehlende 'ojs/ojrouter' Modul
         'ojs/ojmodule'],
function (oj, ko, $) {
  // TODO 1.2: Konfiguriere den `ojRouter` für diese Anwendung
  //  - speichere die Root-Instanz des oj-router in einer lokalen Variable
  //  - konfiguriere den Router, sodass die Module 'search' (Label: Suche, Default-Ansicht)
  //    und 'artist' (Label: Interpret) bekannt werden.
  //  - es sind keine weiteren Attribute wie z.B. Value erforderlich.
  //  - erstelle ein leeres Objekt namens 'viewModel', dessen 'router' Attribut auf den zuvor konfigurierten Router zeigt

  $(document).ready(function () {
    // TODO 1.4: Synchronisiere den `ko.applyBindings` Aufruf mit der Initialisierung des Routers
    //  - ergänze den fehlenden Aufruf der `sync` Funktion des Routers 
    //    (siehe ggf. nochmals im Cookbook, Simple Router Beispiel)
    ko.applyBindings(viewModel, document.getElementById('page'));
  });
});
