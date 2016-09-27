// Imports
import angular from 'angular';
import routes from './iframe.routes';

/**
 * @desc  Module initialize.
 *
 * @ngInject
 */
export default angular
  .module('app.modules.iframe', [])
  .run(routes)
  .name;
