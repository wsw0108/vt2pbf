const vtpbf = require('vt-pbf');

const defaults = {
  version: 2,
  extent: 4096
};

/**
 * Convert geojson-vt-created tile(s) to pbf.
 *
 * @param {Object} layers - An object mapping layer names to geojson-vt-created vector tile objects
 * @param {Object} options - Options to specfic version/extent
 * @param {Number} options.version - Version of vector-tile spec used
 * @param {Number} options.extent - Extent of the vector tile
 * @return {Buffer} uncompressed, pbf-serialized tile data
 */
module.exports = (layers, options) => {
  options = Object.assign({}, defaults, options);

  const l = Object.keys(layers).reduce((memo, name) => {
    const tile = layers[name];
    const layer = new vtpbf.GeoJSONWrapper(tile.features);
    layer.name = name;
    layer.version = options.version;
    layer.extent = options.extent;
    memo[name] = layer;
    return memo;
  }, {});

  return vtpbf.fromVectorTileJs({
    layers: l
  });
};
