/**
 * @desc  This file contains core route + state change event handling.
 * @ngInject
 *
 * @param {*}                       $rootScope
 * @param {ui.router.state.$state}  $state
 * @param {RouterHelper}            RouterHelper
 */
export default (
  $rootScope, $state,
  RouterHelper
) => {
  const states = [{
    state: '404',
    config: {
      url: '/404',
      title: '404',
      parent: 'layout',
      views: {
        'content@': {
          template: require('./404.html'),
        },
      },
    },
  }];

  // Configure default routes + otherwise route
  RouterHelper.configureStates(states, '/404');

  // Add success handler for route change
  $rootScope.$on('$stateChangeSuccess', (event, toState) => {
    $rootScope.containerClass = toState.containerClass;
  });
};
