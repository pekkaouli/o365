// Imports
import angular from 'angular';
import angularAnimate from 'angular-animate';
import angularAria from 'angular-aria';
import angularClipboard from 'angular-clipboard';
import angularLoadingBar from 'angular-loading-bar';
import angularMaterial from 'angular-material';
import angularSanitize from 'angular-sanitize';
import uiRouter from 'angular-ui-router';

import config from './dependencies.config';

/**
 * @ngInject
 */
export default angular
  .module('app.dependencies', [
    angularAnimate, angularAria, angularClipboard.name, angularLoadingBar, angularMaterial, angularSanitize,
    uiRouter,
  ])
  .config(config)
  .name;
