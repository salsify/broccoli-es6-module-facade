var Writer = require('broccoli-writer');
var fs = require('fs');
var path = require('path');

ES6ModuleFacade.prototype = Object.create(Writer.prototype);
ES6ModuleFacade.prototype.constructor = ES6ModuleFacade;

module.exports = ES6ModuleFacade;

function ES6ModuleFacade(options) {
  if (!(this instanceof ES6ModuleFacade)) return new ES6ModuleFacade(options);

  options = options || {};
  for (var key in options) {
    if (options.hasOwnProperty(key)) {
      this[key] = options[key];
    }
  }
}

ES6ModuleFacade.prototype.write = function(readTree, destDir) {
  if (!this.modules) return;

  Object.keys(this.modules).forEach(function(moduleName) {
    fs.writeFileSync(path.join(destDir, moduleName + '.js'), this._exportsFor(moduleName));
  }, this);
};

ES6ModuleFacade.prototype._exportsFor = function(moduleName) {
  var options = this.modules[moduleName],
      footer = '';

  if (options.exports) {
    Object.keys(options.exports).forEach(function(key) {
      footer += 'export var ' + key + ' = ' + options.exports[key] + ';\n';
    });
  }

  if (options.defaultExport) {
    footer += 'export default ' + options.defaultExport + ';\n';
  }

  return footer;
};
