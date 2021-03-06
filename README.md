# FiX

Fix is the best application to learn physics, learns playing.

  - Games
  - Cooperative games
  - Simulations

### Version
0.0.1

## Requirements

- Install Node
    - on OSX install [home brew](http://brew.sh/) and type `brew install node`
    - on Windows install [chocolatey](https://chocolatey.org/)
        - More tips on [Windows with node](http://jpapa.me/winnode)
        - open command prompt as administrator
            - type `choco install nodejs`
            - type `choco install nodejs.install`
    - On OSX you can alleviate the need to run as sudo by [following these instructions](http://jpapa.me/nomoresudo). I highly recommend this step on OSX
- Open terminal
- Type `npm install -g node-inspector bower gulp`

## Quick Start
Clone this repo and run the content locally
```bash
npm install
bower install
gulp serve
```

### Use Gulp tasks

* `gulp` or `gulp build` to build an optimized version of your application in `/dist`
* `gulp serve` to launch a browser sync server on your source files
* `gulp serve:dist` to launch a server on your optimized application
* `gulp test` to launch your unit tests with Karma
* `gulp test:auto` to launch your unit tests with Karma in watch mode
* `gulp protractor` to launch your e2e tests with Protractor
* `gulp protractor:dist` to launch your e2e tests with Protractor on the dist files
* 

### Tech

Fix uses a number of open source projects to work properly:

* [AngularJS] - HTML enhanced for web apps!
* [Angular Material] - An implementation of Material Design in Angular.js.
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework
* [Gulp] - the streaming build system


[node.js]:http://nodejs.org
[express]:http://expressjs.com
[AngularJS]:http://angularjs.org
[Angular Material]:https://material.angularjs.org/
[Gulp]:http://gulpjs.com
