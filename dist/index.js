'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rimrafSync = exports.mkdirpSync = undefined;

var mkdirpSync = exports.mkdirpSync = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(inPath) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', new Promise(function (resolve, reject) {
              (0, _mkdirp2.default)(inPath, function (err) {
                return !err ? resolve() : reject();
              });
            }));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function mkdirpSync(_x) {
    return _ref.apply(this, arguments);
  };
}();

var rimrafSync = exports.rimrafSync = function () {
  var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(inPath) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt('return', new Promise(function (resolve, reject) {
              (0, _rimraf2.default)(inPath, function (err) {
                return !err ? resolve() : reject();
              });
            }));

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function rimrafSync(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

var _rimraf = require('rimraf');

var _rimraf2 = _interopRequireDefault(_rimraf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

;

;