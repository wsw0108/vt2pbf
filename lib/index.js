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
 * @return {Buffer} uncompressed, pbf-serialized tile data
 */
module.exports = (layers, options) => {
  options = Object.assign({}, defaults, options);

  const l = Object.keys(layers).reduce((memo, name) => {
    const tile = layers[name];
    const layer = new vtpbf.GeoJSONWrapper(tile.features);
    layer.name = name;
    layer.version = options.name;
    layer.extent = options.extent;
    memo[name] = layer;
    return memo;
  }, {});

  const u8a = vtpbf.fromVectorTileJs({
    layers: l
  });

  return Buffer.from(u8a.buffer);
};
