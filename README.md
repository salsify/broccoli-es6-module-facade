# Broccoli ES6 Module Facade

## Installation

```bash
npm install -D broccoli-es6-module-facade
```

## Example

```javascript
var createES6Facades = require('broccoli-es6-module-facade');

var vendorFacades = createES6Facades({
  description: 'ES6Facades (vendor)'
  modules: {
    jquery: {
      defaultExport: 'jQuery',
      exports: {
        ajax: 'jQuery.ajax',
        Deferred: 'jQuery.Deferred'
      }
    }
  }
});
```

## Configuration

### `createES6Facades(options)`

---

`options.modules` *{Object}* (Required)

A hash keyed with the names of the module facades that should be created. Each value should
itself be a hash with two optional keys:

- `defaultExport` - an expression that will be the default export of the module
- `exports` - a mapping from identifiers to expressions representing the module's other exports

## License

This project is distributed under the MIT license.
