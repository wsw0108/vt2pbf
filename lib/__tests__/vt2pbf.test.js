const assert = require('assert');
const geojsonvt = require('geojson-vt');
const Pbf = require('pbf');
const VectorTile = require('@mapbox/vector-tile').VectorTile;
const vt2pbf = require('../');

const data = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'Point',
      coordinates: [-10, 10]
    }
  }]
};

describe('vt2pbf', function () {
  it('options passed take effect', function () {
    const options = {
      version: 2,
      extent: 8192
    };
    const index = geojsonvt(data, {
      extent: options.extent
    });
    const tile = index.getTile(1, 0, 0);
    const buf = vt2pbf({
      testLayer: tile
    }, options);

    const vt = new VectorTile(new Pbf(buf));
    const layer = vt.layers.testLayer;

    assert(layer.version === options.version, 'version should be equal');
    assert(layer.extent === options.extent, 'extent should be equal');
  });
});
