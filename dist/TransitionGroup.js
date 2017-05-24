'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactStamp = require('react-stamp');

var _reactStamp2 = _interopRequireDefault(_reactStamp);

var _TransitionGroup = require('react-transition-group/TransitionGroup');

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStamp2.default)(_react2.default).compose({

  displayName: 'TransitionGroup',

  propTypes: {
    // component
  },

  defaultProps: {
    component: 'g'
  },

  render: function render() {
    var _props = this.props,
        children = _props.children,
        restProps = (0, _objectWithoutProperties3.default)(_props, ['children']);

    return _react2.default.createElement(
      _TransitionGroup2.default,
      restProps,
      children
    );
  }
});