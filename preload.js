const electron = require('electron')
const { Buffer } = require('buffer')
const vm = require('vm')
const fs = require('fs/promises')
const path = require('path')

window.preload = {
  electron,
  Buffer,
  require,
  fs,
  path,
  vm,
  __dirname
}
