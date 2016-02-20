# [GrapesJS](http://grapesjs.com)

<p align="center"><img src="http://grapesjs.com/img/grapesjs-demo-template2.jpg" alt="GrapesJS" width="500" align="center"/></p>

GrapesJS is a free and open source Web Template Editor for building HTML templates to be used inside sites, webapps, newsletters or anything else related with HTML.
Be aware that is not a 'Website Builder' but a tool to create only structure and containers for contents. The great thing about GrapesJS is that you can customize it, extend it or even integrate it with your applications.

Try it here: http://grapesjs.com/demo.html


### Features

* Style Manager, for component styling<br/>
<p align="center"><img src="http://grapesjs.com/img/grapesjs-style-manager.png" alt="GrapesJS - Style Manager" height="400" align="center"/></p>

* Layer Manager, that comes handy with nested elements<br/>
<p align="center"><img src="http://grapesjs.com/img/grapesjs-layer-manager.png" alt="GrapesJS - Layer Manager" height="300" align="center"/></p>

* Code Viewer <br/>
<p align="center"><img src="http://grapesjs.com/img/grapesjs-code-viewer.png" alt="GrapesJS - Code Viewer" height="250" align="center"/></p>

* Asset Manager, for uploading and managing images<br/>
<p align="center"><img src="http://grapesjs.com/img/grapesjs-asset-manager.png" alt="GrapesJS - Asset Manager" height="250" align="center"/></p>

* Local and remote storage

* Default built-in commands (basically for creating and managing different components)


### Installation

You can get GrapesJS with `bower install grapesjs` or via `git clone https://github.com/artf/grapesjs.git` to directly use it. For development purpose you should follow instructions below.


### Development

GrapesJS uses [RequireJS](http://requirejs.org/) to organize its files inside `src` folder and [Grunt](http://gruntjs.com/) for build them to `dist`

Clone the repository and enter inside the folder

```sh
$ git clone https://github.com/artf/grapesjs.git
$ cd grapesjs
```

Install bower and grunt globally

```sh
$ npm install -g bower
$ npm install -g grunt
```

Install all necessary dependencies

```sh
$ npm install
```

Build GrapesJS

```sh
$ npm run build
```

Launch server, which also gonna watch some files, and try out the demo on `localhost:8000`

```sh
$ npm run dev
```

Tests are already available inside browser on `localhost:8000/test`

If [Grunt](http://gruntjs.com/) is already installed globally you could change the port by using `grunt dev --port 9000`


### Usage
JQuery is the only hard dependency so you have to include it before use GrapesJS.

```html
<script src="http://code.jquery.com/jquery-2.2.0.min.js"></script>
```
After that include scripts from GrapesJS with all your configurations and render it.

```html
<link rel="stylesheet" href="path/to/grapes.min.css">
<script src="path/to/grapes.min.js"></script>
<div id="gjs"></div>

<script type="text/javascript">
  var gjs  = new GrapesJS({
      container : '#gjs',
  });
  gjs.render();
</script>
```

Unfortunately with the configuration above you wouldn't see a lot. This because GrapesJS it self is simply empty, adding panels, buttons and other stuff will be your job (actually it's not empty but you need buttons to show them up).
The section below will explain some basic configurations but for a more practical example I suggest to look up the code inside this demo: http://grapesjs.com/demo.html


### Configuration

For now I only show up some general settings, for more details check source or demo. Examples will be available soon

```js
var config = {

  // Prefix to use inside local storage name
  storagePrefix:      'wte-',

  // Where to render editor (eg. #myId)
  container:          '',

  // Enable/Disable the possibility to copy (ctrl + c) and paste (ctrl + v) elements
  copyPaste         : true,

  // Enable/Disable undo manager
  undoManager:        true,

  //Indicates which storage to use. Available: local | remote | none
  storageType:        'local',

  //Configurations for Asset Manager (check src/asset_manager/config/config.js)
  assetManager:       {},

  //Configurations for Style Manager (check src/style_manager/config/config.js)
  styleManager:       {},

  //Configurations for Layers (check src/navigator/config/config.js)
  layers:             {},

  //Configurations for Storage Manager (check src/storage_manager/config/config.js)
  storageManager:     {},

  //Configurations for Rich Text Editor (check src/rich_text_editor/config/config.js)
  rte:                {},

  //Configurations for Components (check src/dom_components/config/config.js)
  components:         {},

  //Configurations for Panels (check src/panels/config/config.js)
  panels:             {},

  //Configurations for Commands (check src/commands/config/config.js)
  commands:           {},

};
```


### API

At the moment `render()` is the only available method but others will be public very soon...


### Testing

**ATTENTION: tests are pretty far away from being complete**

Tests are run by [PhantomJS](http://phantomjs.org/) using [Mocha](https://mochajs.org/) (with [Chai](http://chaijs.com/) and [Sinon](http://sinonjs.org/) help)

```sh
$ npm run test
```


### Contributing

Any kind of help is welcome. At the moment there is no generic guidelines so use usual pull requests (with a little bit of parsimony)


## License

BSD 3-clause
