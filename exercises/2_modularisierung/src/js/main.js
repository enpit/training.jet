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

require([
    'ojs/ojcore',
    'knockout',
    'jquery',
    'ojs/ojknockout',
    // TODO: Add the ojs/ojtable and ojs/ojarraytabledatasource dependencies to the array
  ],
  function(oj, ko, $) {
    $(document).ready(function() { 
      function ViewModel() {
        var self = this;

        // TODO: create an observable that contains the page's title and assign it to self.title
        
        var options = { idAttribute: 'key' };
        // TODO: create an ArrayTableDataSource, pass it an empty array and the options object, and assign it to self.datasource

        // this $.getJSON call loads the data via jQuerys getJSON function, which returns a promise
        $.getJSON(
          'https://buli-data-xljwsvcith.now.sh/de.1.clubs.json'
        ).then(function success (data) {
            // called when the webservice returns the data
            // TODO: pass the clubs in data.clubs to the data source (use the 'add' function for this)
          }, function error (err) {
            // called when there is an error with the webservice call
            console.error(err);
          }
        );
      }
      var viewModel, element;
      // TODO: fetch the div with the 'workshop' id from the DOM and store it in the 'element' var
      // TODO: instantiate your view model using 'new' and store it in the viewModel var
      // call ko.applyBindings with the viewModel and element parameters
      ko.applyBindings(
        viewModel,
        element
      );
    });
  }
);
