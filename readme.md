# o365

[![License](http://img.shields.io/:license-mit-blue.svg)](LICENSE)
[![GitHub version](https://badge.fury.io/gh/pekkaouli%2Fo365.svg)](https://badge.fury.io/gh/pekkaouli%2Fo365)
[![Dependency Status](https://david-dm.org/pekkaouli/o365.svg)](https://david-dm.org/pekkaouli/o365)
[![devDependency Status](https://david-dm.org/pekkaouli/o365/dev-status.svg)](https://david-dm.org/pekkaouli/o365#info=devDependencies)

# What is this
Modern seed for "legacy" Angular (1.x) applications. With seed this you can use [ES2015](https://babeljs.io/docs/learn-es2015/) to write your frontend application.

## Includes following
* [webpack](http://webpack.github.io) (modules, assets bundling)
* [babel](http://babeljs.io) (ES2015 support)
* [ng-annotate](https://github.com/olov/ng-annotate)
* [UI-Router](https://ui-router.github.io)
* [Angular Material](https://material.angularjs.org)
* [angular-jwt](https://github.com/auth0/angular-jwt)
* karma test runner configuration

## Application specified stuff
* Blocks; Exception handling, Logger, Router
* Auth; Login, Authorization, User roles with routes 
* Common; HTTP error interceptor, 

---

# Installation, configure and usage
## Preconditions
First of all you have to install `npm` and `node.js` to your box - note that `NodeJS 6+` is required. See following links to help you with installation:
* [Installing Node.js via package manager](https://nodejs.org/en/download/package-manager/)
* [Node Version Manager](https://github.com/creationix/nvm#installation)

## Installation
Open your shell/terminal and navigate to root of application folder and run following command:
```bash
npm install
```

## Usage
Application contains following commands that you can use
* `npm run dev-server` => starts dev servers, open [http://localhost:3000](http://localhost:3000)
* `npm run lint` => Lint your code under `.src` folder
* `npm run test` => Run unit tests
* `npm run build` => create build for production deployment, output will be generated to `dist` folder
* `npm run build-dev` => create build for development deployment, output will be generated to `public` folder

---

# Getting started
* [Angular Guide](https://docs.angularjs.org/guide)
* [Angular Style Guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md)
* [Angular 1.x styleguide (ES2015)](https://github.com/toddmotto/angular-styleguide)
* [Tutorial from BabelJS](http://babeljs.io/docs/learn-es2015/)
* [Exploring ES6: Upgrade to the next version of JavaScript by Dr. Axel Rauschmayer](http://exploringjs.com/)
* [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
* [webpack documentation](http://webpack.github.io/docs/) 

---

# Usage advice 

## Directory layout
    ├── build                               # build stats
    ├── public                              # public folder (webroot for dev server)
    │   ├── _assets                         # build results - assets packed by webpack
    │   └── index.html                      # one of app entry points, for dev server
    └── src                                 # app sources
        ├── blocks                          # generic helpers
        │   ├── exception                   # exception handler
        │   ├── logger                      # logger
        │   └── router                      # router helper
        ├── core                            # application core module
        │   ├── interceptors                # core.interceptors module, contains core interceptors
        │   ├── services                    # core.services module, contains core services
        │   ├── 404.html                    # not found page template
        │   ├── core.config.js              # core module configuration
        │   ├── core.module.js              # core module initialize
        │   └── core.routes.js              # core route definitions
        ├── dependencies                    # application dependencies module
        │   ├── dependencies.config.js      # module configuration, configure 3rd party libraries here
        │   └── dependencies.module.js      # module initialize, specify 3rd party libraries here 
        ├── layout                          # layout module for application
        │   ├── footer                      # footer module
        │   ├── header                      # header module
        │   └── sidenav                     # sidenav module
        ├── modules                         # Application modules, this is where you put your own modules
        │   └── about                       # Example about module
        ├── app.config.js                   # configuration for application, contains API URL and VERSION information
        ├── index.js                        # app entry module
        ├── index.scss                      # entry point for appliction SCSS rules 
        └── index.test.js                   # entry point for test karma
