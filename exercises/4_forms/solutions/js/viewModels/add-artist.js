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
     * Erstelle die benötigten Observables um die Daten aus dem Formular zu
     * speichern. Für das Genre wird ein Observable-Array benötigt.
     */
    self.name = ko.observable('');
    self.genre = ko.observableArray(['rock']);
    self.year = ko.observable(new Date().getFullYear());

    /*
     * Erstelle ein einfaches 'tracker' Observable um den Status der Validierung
     * zu speichern.
     */
    self.tracker = ko.observable();

    /*
     * Erstelle die 'validate' Funktion um das Genre-Control zu validieren (der
     * gewählte Wert darf nicht der default-Wert sein). Die Funktion muss in ein
     * Objekt eingeschlossen werden, welches dann von im 'validators' Attribut
     * in der View referenziert wird.
     */
    self.noDefault = {
      validate: function validate (value) {
        return value !== 'default';
      }
    };

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
         * Veröffentliche die gemachten Eingaben per knockout-postbox unter dem
         * Key 'add-artist' und stoße die Navigation zurück zur Search View an.
         */
        ko.postbox.publish('add-artist', {
          name: self.name(),
          genre: self.genre()[0],
          year: self.year()
        });
        window.history.back();
      }
    };
  }
  return AddArtistViewModel;
});
