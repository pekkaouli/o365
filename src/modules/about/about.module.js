// Imports
import angular from 'angular';
import routes from './about.routes';

/**
 * @desc  Module initialize.
 *
 * @ngInject
 */
export default angular
  .module('app.modules.about', [])
  .run(routes)
  .name;
