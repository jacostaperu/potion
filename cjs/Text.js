'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = require('./constants');

var _Element2 = require('./Element');

var _Element3 = _interopRequireDefault(_Element2);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Text = function (_Element) {
  (0, _inherits3.default)(Text, _Element);

  function Text() {
    (0, _classCallCheck3.default)(this, Text);
    return (0, _possibleConstructorReturn3.default)(this, (Text.__proto__ || (0, _getPrototypeOf2.default)(Text)).apply(this, arguments));
  }

  (0, _createClass3.default)(Text, [{
    key: 'getAttrNames',
    value: function getAttrNames() {
      return ['dx', 'dy'].concat(_constants.TWEENABLE_SVG_PRESENTATION_ATTRS);
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return this.state.el ? (0, _react.cloneElement)(this.state.el, {
        children: (0, _util.isFunction)(children) ? children(this.props) : children
      }) : null;
    }
  }]);
  return Text;
}(_Element3.default);

Text.displayName = 'Text';
Text.propTypes = {
  dx: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  dy: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func])
};
Text.defaultProps = (0, _extends3.default)({}, _Element3.default.defaultProps, {
  component: 'text'
});
exports.default = Text;