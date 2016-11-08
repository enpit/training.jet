/**
 * Add-artist module
 */
define([
  'ojs/ojcore',
  'knockout',
  'jquery',
  '../spotify',
  'knockout-postbox',
  'ojs/ojbutton',
  'ojs/ojinputnumber',
  'ojs/ojinputtext',
  'ojs/ojknockout-validation',
  'ojs/ojselectcombobox'
], function (oj, ko, $, spotify) {
  /**
   * The view model for the add-artist module
   */
  function AddArtistViewModel () {
    var self = this;

    self.name = ko.observable('');
    self.genre = ko.observableArray(['rock']);
    self.year = ko.observable(new Date().getFullYear());

    self.tracker = ko.observable();

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
        ko.postbox.publish('add-artist', {
          name: self.name(),
          genre: self.genre()[0],
          year: self.year()
        });
        window.history.back();
      }
    };

    /**
     * Custom validator for the genre select-control
     */
    self.noDefault = {
      validate: function validate (value) {
        return value !== 'default';
      }
    };     
  }
  return AddArtistViewModel;
});
