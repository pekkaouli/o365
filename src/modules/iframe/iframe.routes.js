// Imports
import IFrameController from './iframe.controller';
/**
 * @ngInject
 * @param RouterHelper
 */
export default function routing(RouterHelper) {
  const states = [{
    state: 'modules.iframe',
    config: {
      url: '/iframe',
      title: 'IFrame',
      views: {
        'content@': {
          template: require('./iframe.html'),
          controller: IFrameController,
          controllerAs: 'vm',
        },
      },
    },
  }];

  RouterHelper.configureStates(states);
}
