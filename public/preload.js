const electron = require('electron')
const { Buffer } = require('buffer')
const vm = require('vm')

window.preload = {
  electron,
  Buffer,
  require,
  vm
}
