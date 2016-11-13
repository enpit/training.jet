/**
 * Add-artist module
 */
define([
  'ojs/ojcore',
  'knockout',
  'jquery',
  'knockout-postbox',
  'ojs/ojbutton',
  'ojs/ojinputnumber',
  'ojs/ojinputtext',
  'ojs/ojknockout-validation',
  'ojs/ojselectcombobox'
], function (oj, ko, $) {
  /**
   * The view model for the add-artist module
   */
  function AddArtistViewModel () {
    var self = this;

    /*
     * TODO 2: Implementiere die nötigen Observables
     * - 'name' observable
     * - 'genre' observableArray
     * - 'year' observable
     * - wenn gewünscht kannst du den Observables Default-Werte zuweisen: `ko.observable('Default-Value')`
     * TODO 2: Implementiere die nötigen Observables
     * - 
     */

    /*
     * TODO 3: Erstelle ein einfaches Observable für den `InvalidComponentTracker`
     * - erstelle ein einfaches 'tracker' Observable ohne Default-Wert
     */

    /*
     * Die hier bereits vorhandenen 'shouldDisableAdd' und 'isValid' Funktionen
     * implementieren die Logik für das automatische Deaktivieren des
     * Submit-Buttons.
     */
    /**
     * Determines when the add-artist button will be disabled
     *
     * - If there are invalid components currently showing messages
     * this method returns true and the button is disabled.
     * - If there are no visible errors, this method returns false
     * and the button is enabled.
     * E.g., when there are deferred errors on the component the
     * button is enabled.
     *
     * @return {boolean} forms are valid
     */
    self.shouldDisableAdd = function () {
      var trackerObj = ko.utils.unwrapObservable(self.tracker);
      var hasInvalidComponents =
        trackerObj &&
        (trackerObj.invalidShown || self.genre()[0] === 'default');

      return hasInvalidComponents;
    };

    // Returns false if there are components showing errors.
    // Returns true if all components are valid.
    var isValid = function isValid (trackerObj) {
      trackerObj.showMessages();
      return !trackerObj.focusOnFirstInvalid();
    };

    /**
     * Click handler that validates form.
     *
     * If there are deferred errors they are displayed
     * to the end-user by calling the
     * InvalidComponentTracker#showMessages method.
     * Then focus is set on the first invalid component -
     * InvalidComponentTracker#focusOnFirstInvalid and method returns.
     */
    self.save = function () {
      var trackerObj = ko.utils.unwrapObservable(self.tracker);
      if (isValid(trackerObj)) {
        /*
         * TODO 5: Implementierung der `save` Funktion
         * - Logge die gemachten Eingaben per console.log o.ä. (Beispiel für einen API-Call)
         * - stoße die Navigation zurück zur vorherigen View an
         */
      }
    };
  }
  return AddArtistViewModel;
});
