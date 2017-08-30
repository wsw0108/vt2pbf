# vt2pbf [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

> Convert Mapbox Vector Tiles to binary protobuf.

## Installation

```sh
$ npm install --save vt2pbf
```

## Usage

```js
const vt2pbf = require('vt2pbf');

const layers = {
  geojsonLayer: tile
};

// this is default options
const options = {
  version: 2,
  extent: 4096
};

const buffer = vt2pbf(layers, options);
console.log(buffer);
```

## License

MIT © [wsw0108](https://github.com/wsw0108)

[npm-image]: https://badge.fury.io/js/vt2pbf.svg
[npm-url]: https://npmjs.org/package/vt2pbf
[travis-image]: https://travis-ci.org/wsw0108/vt2pbf.svg?branch=master
[travis-url]: https://travis-ci.org/wsw0108/vt2pbf
[daviddm-image]: https://david-dm.org/wsw0108/vt2pbf.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/wsw0108/vt2pbf
[coveralls-image]: https://coveralls.io/repos/wsw0108/vt2pbf/badge.svg
[coveralls-url]: https://coveralls.io/r/wsw0108/vt2pbf
