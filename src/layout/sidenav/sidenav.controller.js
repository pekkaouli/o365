/**
 * @ngInject
 */
export default class SidenavController {
  /**
   * Constructor of the class.
   *
   * @param {ui.router.state.$state}  $state
   * @param {$mdSidenav}              $mdSidenav
   * @param {MenuItemService}         MenuItemService
   */
  constructor(
    $state, $mdSidenav,
    MenuItemService
  ) {
    this.$mdSidenav = $mdSidenav;
    this.menuItemService = MenuItemService;

    // Attach includes function to controller
    this.isActive = $state.includes;

    this.items = this.menuItemService.getItems();
  }

  // Method to hide left side navigation bar.
  hideSideMenu() {
    this.$mdSidenav('left').close();
  }
}
