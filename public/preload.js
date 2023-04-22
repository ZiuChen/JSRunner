const electron = require('electron')
const { Buffer } = require('buffer')
require('ses')

window.preload = {
  electron,
  Buffer,
  require
}
