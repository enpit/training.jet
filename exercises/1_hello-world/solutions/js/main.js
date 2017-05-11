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
    'signals': 'libs/js-signals/signals'
  }
  //endinjector
  ,
  // Shim configurations for modules that do not expose AMD
  shim:
  {
    'jquery':
    {
      exports: ['jQuery', '$']
    }
  }
}
);

require(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojinputtext'],
  function(oj, ko, $) {
    $(document).ready(function() {
      function ViewModel() {
        var self = this;

        /*
         * - erstelle ein Knockout Observable mit dem Namen 'vorname' und
         * setze ihn z.B. auf 'DOAG'
         */
        self.vorname = ko.observable('DOAG');
      }
      var viewModel, element;
      // Hole das div-Element mit der ID 'workshop' aus dem DOM:
      element = document.getElementById('workshop');
      // Instanziiere das View Model:
      viewModel = new ViewModel();
      // Knockout Bindings auf das workshop-div anwenden:
      ko.applyBindings(
        viewModel,
        element
      );
    });
  }
);
