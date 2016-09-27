/**
 * @ngInject
 */
export default class HeaderController {
  /**
   * Constructor of the class
   *
   * @param {ui.router.state.$state}  $state
   * @param {$mdSidenav}              $mdSidenav
   */
  constructor($state, $mdSidenav) {
    this.$state = $state;
    this.$mdSidenav = $mdSidenav;
  }

  /**
   * Method to toggle main side navigation component.
   */
  toggleSidenav() {
    this.$mdSidenav('left').toggle();
  }
}
