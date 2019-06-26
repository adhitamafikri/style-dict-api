const { series } = require('gulp');
const StyleDictionary = require('style-dictionary').extend('./src/config/style-dictionary.json');

function runningNotif(cb) {
  console.log('Gulp running tasks!');
  cb();
}

function build(cb) {
  console.log('building styles...');
  StyleDictionary.buildAllPlatforms();
  cb();
}

exports.default = series(runningNotif, build);
