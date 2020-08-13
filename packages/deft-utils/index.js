var copy = require('./lib/copy');
var renameKeys = require('./lib/renameKeys');
var {blobTobase64, dataURItoBlob} = require('./lib/blob_base64_convert');

module.exports = {
  copy,
  renameKeys,
  blobTobase64,
  dataURItoBlob,
}

