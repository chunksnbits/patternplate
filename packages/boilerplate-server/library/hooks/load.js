'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = loadHooks;

var _path = require('path');

var _requireAll = require('require-all');

var _requireAll2 = _interopRequireDefault(_requireAll);

var _default = require('./default');

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function loadHooks(application, path) {
	let modules = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

	const rawAppHooks = (0, _requireAll2.default)(path);
	const enabledHooks = selectEnabledHooks(application);

	const appHooks = Object.entries(rawAppHooks).map(entry => {
		var _entry = _slicedToArray(entry, 2);

		const name = _entry[0];
		const hook = _entry[1];

		const mod = hook.index || hook;
		const requirePath = (0, _path.resolve)(path, name);
		return _extends({}, mod, { name: name, requirePath: requirePath });
	}).map(hook => Object.assign(hook, { requirePath: (0, _path.resolve)(path, hook.name) }));

	const moduleHooks = modules ? Object.values(enabledHooks).filter(moduleName => typeof moduleName === 'string').map(moduleName => {
		const requirePath = require.resolve(moduleName);
		const mod = require(moduleName);
		mod.requirePath = requirePath;
		return mod;
	}) : [];

	return [].concat(_toConsumableArray(appHooks), _toConsumableArray(moduleHooks)).filter(Boolean).map(hook => (0, _default2.default)(application, hook.name, hook));
}

function selectEnabledHooks(application) {
	const config = application.configuration || {};
	const hooks = config.hooks || {};
	const enabled = hooks.enabled || {};
	return enabled;
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9saWJyYXJ5L2hvb2tzL2xvYWQuanMiXSwibmFtZXMiOlsibG9hZEhvb2tzIiwiYXBwbGljYXRpb24iLCJwYXRoIiwibW9kdWxlcyIsInJhd0FwcEhvb2tzIiwiZW5hYmxlZEhvb2tzIiwic2VsZWN0RW5hYmxlZEhvb2tzIiwiYXBwSG9va3MiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwiZW50cnkiLCJuYW1lIiwiaG9vayIsIm1vZCIsImluZGV4IiwicmVxdWlyZVBhdGgiLCJhc3NpZ24iLCJtb2R1bGVIb29rcyIsInZhbHVlcyIsImZpbHRlciIsIm1vZHVsZU5hbWUiLCJyZXF1aXJlIiwicmVzb2x2ZSIsIkJvb2xlYW4iLCJjb25maWciLCJjb25maWd1cmF0aW9uIiwiaG9va3MiLCJlbmFibGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2tCQUt3QkEsUzs7QUFMeEI7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7QUFFZSxTQUFTQSxTQUFULENBQW1CQyxXQUFuQixFQUFnQ0MsSUFBaEMsRUFBdUQ7QUFBQSxLQUFqQkMsT0FBaUIseURBQVAsS0FBTzs7QUFDckUsT0FBTUMsY0FBYywwQkFBV0YsSUFBWCxDQUFwQjtBQUNBLE9BQU1HLGVBQWVDLG1CQUFtQkwsV0FBbkIsQ0FBckI7O0FBRUEsT0FBTU0sV0FBV0MsT0FBT0MsT0FBUCxDQUFlTCxXQUFmLEVBQ2ZNLEdBRGUsQ0FDWEMsU0FBUztBQUFBLDhCQUNRQSxLQURSOztBQUFBLFFBQ05DLElBRE07QUFBQSxRQUNBQyxJQURBOztBQUViLFFBQU1DLE1BQU1ELEtBQUtFLEtBQUwsSUFBY0YsSUFBMUI7QUFDQSxRQUFNRyxjQUFjLG1CQUFRZCxJQUFSLEVBQWNVLElBQWQsQ0FBcEI7QUFDQSxzQkFBV0UsR0FBWCxJQUFnQkYsVUFBaEIsRUFBc0JJLHdCQUF0QjtBQUNBLEVBTmUsRUFPZk4sR0FQZSxDQU9YRyxRQUFRTCxPQUFPUyxNQUFQLENBQWNKLElBQWQsRUFBb0IsRUFBQ0csYUFBYSxtQkFBUWQsSUFBUixFQUFjVyxLQUFLRCxJQUFuQixDQUFkLEVBQXBCLENBUEcsQ0FBakI7O0FBU0EsT0FBTU0sY0FBY2YsVUFDbkJLLE9BQU9XLE1BQVAsQ0FBY2QsWUFBZCxFQUNFZSxNQURGLENBQ1NDLGNBQWMsT0FBT0EsVUFBUCxLQUFzQixRQUQ3QyxFQUVFWCxHQUZGLENBRU1XLGNBQWM7QUFDbEIsUUFBTUwsY0FBY00sUUFBUUMsT0FBUixDQUFnQkYsVUFBaEIsQ0FBcEI7QUFDQSxRQUFNUCxNQUFNUSxRQUFRRCxVQUFSLENBQVo7QUFDQVAsTUFBSUUsV0FBSixHQUFrQkEsV0FBbEI7QUFDQSxTQUFPRixHQUFQO0FBQ0EsRUFQRixDQURtQixHQVNuQixFQVREOztBQVdBLFFBQU8sNkJBQUlQLFFBQUosc0JBQWlCVyxXQUFqQixHQUNMRSxNQURLLENBQ0VJLE9BREYsRUFDV2QsR0FEWCxDQUNlRyxRQUFRLHVCQUFZWixXQUFaLEVBQXlCWSxLQUFLRCxJQUE5QixFQUFvQ0MsSUFBcEMsQ0FEdkIsQ0FBUDtBQUVBOztBQUVELFNBQVNQLGtCQUFULENBQTRCTCxXQUE1QixFQUF5QztBQUN4QyxPQUFNd0IsU0FBU3hCLFlBQVl5QixhQUFaLElBQTZCLEVBQTVDO0FBQ0EsT0FBTUMsUUFBUUYsT0FBT0UsS0FBUCxJQUFnQixFQUE5QjtBQUNBLE9BQU1DLFVBQVVELE1BQU1DLE9BQU4sSUFBaUIsRUFBakM7QUFDQSxRQUFPQSxPQUFQO0FBQ0EiLCJmaWxlIjoibG9hZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cmVzb2x2ZX0gZnJvbSAncGF0aCc7XG5cbmltcG9ydCByZXF1aXJlQWxsIGZyb20gJ3JlcXVpcmUtYWxsJztcbmltcG9ydCBob29rRmFjdG9yeSBmcm9tICcuL2RlZmF1bHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkSG9va3MoYXBwbGljYXRpb24sIHBhdGgsIG1vZHVsZXMgPSBmYWxzZSkge1xuXHRjb25zdCByYXdBcHBIb29rcyA9IHJlcXVpcmVBbGwocGF0aCk7XG5cdGNvbnN0IGVuYWJsZWRIb29rcyA9IHNlbGVjdEVuYWJsZWRIb29rcyhhcHBsaWNhdGlvbik7XG5cblx0Y29uc3QgYXBwSG9va3MgPSBPYmplY3QuZW50cmllcyhyYXdBcHBIb29rcylcblx0XHQubWFwKGVudHJ5ID0+IHtcblx0XHRcdGNvbnN0IFtuYW1lLCBob29rXSA9IGVudHJ5O1xuXHRcdFx0Y29uc3QgbW9kID0gaG9vay5pbmRleCB8fCBob29rO1xuXHRcdFx0Y29uc3QgcmVxdWlyZVBhdGggPSByZXNvbHZlKHBhdGgsIG5hbWUpO1xuXHRcdFx0cmV0dXJuIHsuLi5tb2QsIG5hbWUsIHJlcXVpcmVQYXRofTtcblx0XHR9KVxuXHRcdC5tYXAoaG9vayA9PiBPYmplY3QuYXNzaWduKGhvb2ssIHtyZXF1aXJlUGF0aDogcmVzb2x2ZShwYXRoLCBob29rLm5hbWUpfSkpO1xuXG5cdGNvbnN0IG1vZHVsZUhvb2tzID0gbW9kdWxlcyA/XG5cdFx0T2JqZWN0LnZhbHVlcyhlbmFibGVkSG9va3MpXG5cdFx0XHQuZmlsdGVyKG1vZHVsZU5hbWUgPT4gdHlwZW9mIG1vZHVsZU5hbWUgPT09ICdzdHJpbmcnKVxuXHRcdFx0Lm1hcChtb2R1bGVOYW1lID0+IHtcblx0XHRcdFx0Y29uc3QgcmVxdWlyZVBhdGggPSByZXF1aXJlLnJlc29sdmUobW9kdWxlTmFtZSk7XG5cdFx0XHRcdGNvbnN0IG1vZCA9IHJlcXVpcmUobW9kdWxlTmFtZSk7XG5cdFx0XHRcdG1vZC5yZXF1aXJlUGF0aCA9IHJlcXVpcmVQYXRoO1xuXHRcdFx0XHRyZXR1cm4gbW9kO1xuXHRcdFx0fSkgOlxuXHRcdFtdO1xuXG5cdHJldHVybiBbLi4uYXBwSG9va3MsIC4uLm1vZHVsZUhvb2tzXVxuXHRcdC5maWx0ZXIoQm9vbGVhbikubWFwKGhvb2sgPT4gaG9va0ZhY3RvcnkoYXBwbGljYXRpb24sIGhvb2submFtZSwgaG9vaykpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RFbmFibGVkSG9va3MoYXBwbGljYXRpb24pIHtcblx0Y29uc3QgY29uZmlnID0gYXBwbGljYXRpb24uY29uZmlndXJhdGlvbiB8fCB7fTtcblx0Y29uc3QgaG9va3MgPSBjb25maWcuaG9va3MgfHwge307XG5cdGNvbnN0IGVuYWJsZWQgPSBob29rcy5lbmFibGVkIHx8IHt9O1xuXHRyZXR1cm4gZW5hYmxlZDtcbn1cbiJdfQ==