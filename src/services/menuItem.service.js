// Imports
import MenuItem from './../entities/menuItem';

/**
 * @desc  MenuItemService class.
 * @ngInject
 */
export default class MenuItemService {
  /**
   * Constructor of the class.
   *
   * @param {ui.router.state.$state}  $state
   * @param {$mdSidenav}              $mdSidenav
   */
  constructor($state, $mdSidenav) {
    this.$state = $state;
    this.$mdSidenav = $mdSidenav;

    // Actual menu items
    this.items = [
      {
        title: 'Tietoja',
        state: 'modules.about',
      },
      {
        title: 'IFrame',
        state: 'modules.iframe',
      },
    ].map(item => new MenuItem(item));
  }

  /**
   * Getter method for all menu items.
   *
   * @returns {MenuItem[]}
   */
  getItems() {
    const iterator = (item: MenuItem) => {
      if (item.items.length) {
        item.items.filter(iterator);

        if (item.items.length === 0) {
          return false;
        }
      }

      return true;
    };

    return this.items.filter(iterator);
  }

  /**
   * Method to change application state to another one.
   *
   * @param {MenuItem}  item
   * @param {Object}    [params]
   * @returns {promise}
   */
  goToPage(item: MenuItem, params: Object = {}) {
    const parameters = (Object.is({}, params) && !Object.is({}, item.params)) ? item.params : params;

    this.$mdSidenav('left').close();

    return (this.$state.current.name === item.state) ? this.$state.reload() : this.$state.go(item.state, parameters);
  }
}
