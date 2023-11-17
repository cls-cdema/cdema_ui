'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var PropTypes = require('prop-types');
var PropTypes__default = _interopDefault(PropTypes);
var React = require('react');
var React__default = _interopDefault(React);
require('invariant');
var icons = require('@wfp/icons');
var reactPopper = require('react-popper');
var ReactDOM = _interopDefault(require('react-dom'));
var warning = _interopDefault(require('warning'));

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

var pageWidths = ['sm', 'md', 'lg', 'full'];
/** Wrapper can wrap it's content in a specific width depending on if the application has a full or fixed width. */

var Wrapper = function Wrapper(props) {
  var background = props.background,
      backgroundStyle = props.backgroundStyle,
      children = props.children,
      className = props.className,
      pageWidth = props.pageWidth,
      mobilePageWidth = props.mobilePageWidth,
      spacing = props.spacing,
      other = _objectWithoutProperties(props, ["background", "backgroundStyle", "children", "className", "pageWidth", "mobilePageWidth", "spacing"]);

  var wrapperClasses = classnames(_defineProperty({
    'wfp--wrapper': true,
    'wfp--wrapper--width-lg': pageWidth === 'narrow' || pageWidth === 'lg',
    'wfp--wrapper--width-md': pageWidth === 'narrower' || pageWidth === 'md',
    'wfp--wrapper--width-sm': pageWidth === 'narrowest' || pageWidth === 'sm',
    'wfp--wrapper--width-xs': pageWidth === 'narrowest' || pageWidth === 'xs',
    'wfp--wrapper--width-mobile-full': mobilePageWidth === 'full',
    'wfp--wrapper--spacing-md': spacing === 'md',
    'wfp--wrapper--spacing-xl': spacing === 'xl'
  }, "".concat(className), className));

  if (background || backgroundStyle) {
    var backgroundClasses = classnames({
      'wfp--wrapper--background-lighter': background === 'lighter',
      'wfp--wrapper--background-dark': background === 'dark'
    });
    return /*#__PURE__*/React__default.createElement("div", {
      className: backgroundClasses,
      style: backgroundStyle
    }, /*#__PURE__*/React__default.createElement("div", _extends({
      className: wrapperClasses
    }, other), children));
  } else {
    return /*#__PURE__*/React__default.createElement("div", _extends({
      className: wrapperClasses
    }, other), children);
  }
};

Wrapper.propTypes = {
  /**
   * The content which should be displayed
   */
  children: PropTypes__default.node,

  /**
  Specify additional className which will be added
  */
  className: PropTypes__default.string,

  /**
    `xs` `sm` `md` `lg`:  Set the maximum width of the Wrapper content `xs`: `500px` `sm`: `700px` `md`:`1000px` `lg`: `1200px` 
  */
  pageWidth: PropTypes__default.oneOf(['sm', 'md', 'lg', 'full']),

  /**
    Width on mobile devices
  */
  mobilePageWidth: PropTypes__default.string,

  /**
    `full` `sm` `md` `lg`:  Width on mobile devices `full`: `100%`      
  */
  spacing: PropTypes__default.string
};

var BannerNavigationItem = function BannerNavigationItem(_ref) {
  var className = _ref.className,
      children = _ref.children;
  var wrapperClasses = classnames('wfp--banner-navigation__item', className);
  return /*#__PURE__*/React__default.createElement("li", {
    className: wrapperClasses
  }, children);
};

BannerNavigationItem.propTypes = {
  /**
   * The CSS class name to be placed on the wrapping element.
   */
  className: PropTypes__default.string,
  children: PropTypes__default.node.isRequired
};
/**
 * A thin bar on top of the main navigation used to crosslink among apps or pages.
 */

var BannerNavigation = function BannerNavigation(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      props = _objectWithoutProperties(_ref2, ["children", "className"]);

  var wrapperClasses = classnames('wfp--banner-navigation', className);
  return /*#__PURE__*/React__default.createElement("div", {
    className: wrapperClasses
  }, /*#__PURE__*/React__default.createElement(Wrapper, props, /*#__PURE__*/React__default.createElement("ul", {
    className: "wfp--banner-navigation__list"
  }, children)));
};

BannerNavigation.propTypes = {
  /**
   * The content usually consisting out of `BannerNavigationItem`
   */
  children: PropTypes__default.node.isRequired,

  /**
   * The CSS class name to be placed on the wrapping element.
   */
  className: PropTypes__default.string,

  /**
   * Specify the max-width on desktop devices (same as \`Wrapper\` component)
   */
  pageWidth: PropTypes__default.oneOf(['sm', 'md', 'lg', 'full'])
};
BannerNavigation.defaultProps = {
  pageWidth: 'md'
};

var settings = {
  prefix: 'wfp'
}; //module.exports = settings;

var FormItem = function FormItem(_ref) {
  var className = _ref.className,
      children = _ref.children,
      invalid = _ref.invalid,
      other = _objectWithoutProperties(_ref, ["className", "children", "invalid"]);

  var classNames = classnames('wfp--form-item', {
    'wfp--form-item--invalid': invalid
  }, className);
  return /*#__PURE__*/React__default.createElement("div", _extends({
    className: classNames
  }, other), children);
};

FormItem.propTypes = {
  children: PropTypes__default.node,
  className: PropTypes__default.string
};

var prefix = settings.prefix;

var Input = function Input(_ref) {
  var _classNames, _classNames2;

  var additional = _ref.additional,
      addonBefore = _ref.addonBefore,
      addonAfter = _ref.addonAfter,
      labelText = _ref.labelText,
      children = _ref.children,
      className = _ref.className,
      id = _ref.id,
      formItemClassName = _ref.formItemClassName,
      placeholder = _ref.placeholder,
      type = _ref.type,
      _onChange = _ref.onChange,
      _onClick = _ref.onClick,
      hideLabel = _ref.hideLabel,
      invalid = _ref.invalid,
      invalidText = _ref.invalidText,
      helperText = _ref.helperText,
      light = _ref.light,
      required = _ref.required,
      other = _objectWithoutProperties(_ref, ["additional", "addonBefore", "addonAfter", "labelText", "children", "className", "id", "formItemClassName", "placeholder", "type", "onChange", "onClick", "hideLabel", "invalid", "invalidText", "helperText", "light", "required"]);

  var inputProps = {
    id: id,
    onChange: function onChange(evt) {
      if (!other.disabled && !other.readOnly) {
        _onChange(evt);
      }
    },
    onClick: function onClick(evt) {
      if (!other.disabled && !other.readOnly) {
        _onClick(evt);
      }
    },
    placeholder: placeholder,
    type: type
  };
  var errorId = id + '-error-msg';
  var inputClasses = classnames("".concat(prefix, "--input"), className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--input--light"), light), _defineProperty(_classNames, "".concat(prefix, "--input--invalid"), invalid), _classNames));
  var labelClasses = classnames("".concat(prefix, "--label"), (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefix, "--visually-hidden"), hideLabel || !labelText), _defineProperty(_classNames2, "".concat(prefix, "--label--disabled"), other.disabled), _classNames2));
  var helperTextClasses = classnames("".concat(prefix, "--form__helper-text"), _defineProperty({}, "".concat(prefix, "--form__helper-text--disabled"), other.disabled));
  var label = /*#__PURE__*/React__default.createElement("label", {
    htmlFor: id,
    className: labelClasses
  }, labelText && labelText, required && '*');
  var error = invalid ? /*#__PURE__*/React__default.createElement("div", {
    className: "wfp--form-requirement",
    id: errorId
  }, invalid.message ? invalid.message : invalidText) : null;
  var elementProps = invalid ? _objectSpread2(_objectSpread2(_objectSpread2({}, other), inputProps), {}, {
    'data-invalid': true,
    'aria-invalid': true,
    'aria-describedby': errorId,
    className: inputClasses
  }) : _objectSpread2(_objectSpread2(_objectSpread2({}, other), inputProps), {}, {
    className: inputClasses
  });
  var helper = helperText ? /*#__PURE__*/React__default.createElement("div", {
    className: helperTextClasses
  }, helperText) : null;
  return /*#__PURE__*/React__default.createElement(FormItem, {
    className: formItemClassName,
    invalid: true
  }, label, helper, additional, /*#__PURE__*/React__default.createElement("div", {
    className: "".concat(prefix, "--input-wrapper")
  }, addonBefore && /*#__PURE__*/React__default.createElement("div", {
    className: "".concat(prefix, "--input-addon-before")
  }, addonBefore), children(elementProps), addonAfter && /*#__PURE__*/React__default.createElement("div", {
    className: "".concat(prefix, "--input-addon-after")
  }, addonAfter)), error);
};

Input.propTypes = {
  /**
   * Specify an optional className to be applied to the &lt;input&gt; node
   */
  className: PropTypes__default.string,

  /**
   * Optionally provide the default value of the &lt;input&gt;
   */
  defaultValue: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.number]),

  /**
   * Specify whether the &lt;input&gt; should be disabled
   */
  disabled: PropTypes__default.bool,

  /**
   * Specify an optional className to be applied to the form-item node
   */
  formItemClassName: PropTypes__default.string,

  /**
   * Specify a custom `id` for the &lt;input&gt;
   */
  id: PropTypes__default.string.isRequired,

  /**
   * Provide the text that will be read by a screen reader when visiting this
   * control
   */
  labelText: PropTypes__default.node.isRequired,

  /**
   * Optionally provide an `onChange` handler that is called whenever &lt;input&gt;
   * is updated
   */
  onChange: PropTypes__default.func,

  /**
   * Optionally provide an `onClick` handler that is called whenever the
   * &lt;input&gt; is clicked
   */
  onClick: PropTypes__default.func,

  /**
   * Specify the placeholder attribute for the &lt;input&gt;
   */
  placeholder: PropTypes__default.string,

  /**
   * Specify the type of the &lt;input&gt;
   */
  type: PropTypes__default.string,

  /**
   * Specify the value of the &lt;input&gt;
   */
  value: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.number]),

  /**
   * Specify whether you want the underlying label to be visually hidden
   */
  hideLabel: PropTypes__default.bool,

  /**
   * Specify whether the control is currently invalid
   */
  invalid: PropTypes__default.bool,

  /**
   * Provide the text that is displayed when the control is in an invalid state
   */
  invalidText: PropTypes__default.string,

  /**
   * Provide additional component that is used alongside the input for customization
   */
  additional: PropTypes__default.node,

  /**
   * Provide text that is used alongside the control label for additional help
   */
  helperText: PropTypes__default.node,

  /**
   * `true` to use the light version.
   */
  light: PropTypes__default.bool
};
Input.defaultProps = {
  className: 'wfp--input',
  disabled: false,
  type: 'text',
  onChange: function onChange() {},
  onClick: function onClick() {},
  invalid: false,
  invalidText: '',
  helperText: '',
  light: false
};

/**
 * @param {Object<string, Function>} propTypes The list of type checkers, keyed by prop names.
 * @returns {Object<string, Function>}
 *   The new prop type checkers that checks if one of the given props exist,
 *   in addition to the original type checkings.
 */
function isRequiredOneOf(propTypes) {
  var names = Object.keys(propTypes);

  var checker = function checker(propType) {
    return function (props, propName, componentName) {
      if (process.env.NODE_ENV !== "production" && names.every(function (name) {
        return !props.hasOwnProperty(name);
      })) {
        return new Error("".concat(componentName, " requires one of the following props: ").concat(names.join(', ')));
      }

      for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        rest[_key - 3] = arguments[_key];
      }

      return propType.apply(void 0, [props, propName, componentName].concat(rest));
    };
  };

  return names.reduce(function (o, name) {
    return _objectSpread2(_objectSpread2({}, o), {}, _defineProperty({}, name, checker(propTypes[name])));
  }, {});
}

/**
 * @param {Object} svgData - JSON Object for an SVG icon
 * @returns {ReactElement} Elements/Nodes for SVG
 * @example
 * // Returns SVG elements
 * const svgData = getSvgData('copy-code');
 * svgShapes(svgData);
 */

function svgShapes(svgData) {
  var svgElements = Object.keys(svgData).filter(function (key) {
    return svgData[key];
  }).map(function (svgProp) {
    var data = svgData[svgProp];

    if (svgProp === 'circles') {
      return data.map(function (circle, index) {
        var circleProps = {
          cx: circle.cx,
          cy: circle.cy,
          r: circle.r,
          fill: circle.fill,
          key: "circle".concat(index)
        };
        return /*#__PURE__*/React__default.createElement("circle", circleProps);
      });
    } else if (svgProp === 'paths') {
      return data.map(function (path, index) {
        return /*#__PURE__*/React__default.createElement("path", {
          fill: path.fill,
          d: path.d,
          key: "key".concat(index)
        });
      });
    }

    return '';
  });
  return svgElements;
}
/** Icons are visual representations of commands, devices, directories, or common actions. */

var Icon = function Icon(_ref) {
  var className = _ref.className,
      description = _ref.description,
      fill = _ref.fill,
      fillRule = _ref.fillRule,
      height = _ref.height,
      icon = _ref.icon,
      iconTitle = _ref.iconTitle,
      role = _ref.role,
      style = _ref.style,
      width = _ref.width,
      iconRef = _ref.iconRef,
      other = _objectWithoutProperties(_ref, ["className", "description", "fill", "fillRule", "height", "icon", "iconTitle", "role", "style", "width", "iconRef"]);

  if ( /*#__PURE__*/React__default.isValidElement(icon)) {
    width = width ? width : icon.props.width;
    height = height ? height : icon.props.height;
    var clonedIcon = /*#__PURE__*/React__default.cloneElement(icon, {
      className: className,
      role: role,
      width: width,
      height: height,
      style: style,
      fill: fill,
      fillRule: fillRule,
      description: description
    });
    return clonedIcon;
  }

  var props = _objectSpread2({
    className: className,
    fill: fill,
    fillRule: fillRule,
    height: height || icon.height,
    //name: isPrefixed ? name : `icon--${name}`,
    role: role,
    style: style,
    viewBox: icon.viewBox,
    width: width || icon.width,
    ref: iconRef
  }, other);

  var svgContent = icon ? svgShapes(icon.svgData) : '';
  return /*#__PURE__*/React__default.createElement("svg", _extends({}, props, {
    "aria-label": description,
    alt: description
  }), /*#__PURE__*/React__default.createElement("title", null, description), svgContent);
};

Icon.propTypes = _objectSpread2(_objectSpread2({
  /**
   * The CSS class name.
   */
  className: PropTypes__default.string,

  /**
   * The icon description.
   */
  description: PropTypes__default.string.isRequired,

  /**
   * The `svg` `fill` attribute.
   */
  fill: PropTypes__default.string,

  /**
   * The `svg` `fillRule` attribute.
   */
  fillRule: PropTypes__default.string,

  /**
   * The `svg` `height` attribute.
   */
  height: PropTypes__default.string
}, isRequiredOneOf({
  /**
   * The icon data.
   */
  icon: PropTypes__default.oneOfType([PropTypes__default.shape({
    width: PropTypes__default.string,
    height: PropTypes__default.string,
    viewBox: PropTypes__default.string.isRequired,
    svgData: PropTypes__default.object.isRequired
  }), PropTypes__default.node]),

  /**
   * The name in the sprite.
   */
  name: PropTypes__default.string
})), {}, {
  /**
   * The `role` attribute.
   */
  role: PropTypes__default.string,

  /**
   * The CSS styles.
   */
  style: PropTypes__default.object,

  /**
   * The `svg` `viewbox` attribute.
   */
  viewBox: PropTypes__default.string,

  /**
   * The `svg` `width` attribute.
   */
  width: PropTypes__default.string,

  /**
   * The `ref` callback for the icon.
   */
  iconRef: PropTypes__default.func
});
Icon.defaultProps = {
  fillRule: 'evenodd',
  role: 'img',
  description: 'Provide a description that will be used as the title'
}; //export { icons };

var prefix$1 = settings.prefix;
/** The number input component is used for entering numeric values and includes controls for incrementally increasing or decreasing the value */

function NumberInput(props) {
  var _classNames;

  var additional = props.additional,
      className = props.className,
      closeButtonLabelText = props.closeButtonLabelText,
      disabled = props.disabled,
      formItemClassName = props.formItemClassName,
      id = props.id,
      hideLabel = props.hideLabel,
      hideControls = props.hideControls,
      labelText = props.labelText,
      max = props.max,
      min = props.min,
      _props$kind = props.kind,
      kind = _props$kind === void 0 ? 'large' : _props$kind,
      _props$step = props.step,
      step = _props$step === void 0 ? 1 : _props$step,
      invalid = props.invalid,
      invalidText = props.invalidText,
      _props$onChange = props.onChange,
      onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
      _props$onClick = props.onClick,
      _props$onSearchIconCl = props.onSearchIconClick,
      onSearchIconClick = _props$onSearchIconCl === void 0 ? function () {} : _props$onSearchIconCl,
      helperText = props.helperText,
      light = props.light,
      allowEmpty = props.allowEmpty,
      inputRef = props.inputRef,
      other = _objectWithoutProperties(props, ["additional", "className", "closeButtonLabelText", "disabled", "formItemClassName", "id", "hideLabel", "hideControls", "labelText", "max", "min", "kind", "step", "invalid", "invalidText", "onChange", "onClick", "onSearchIconClick", "helperText", "light", "allowEmpty", "inputRef"]);

  var initialValue = props.value;

  var _useState = React.useState(initialValue),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  React.useEffect(function () {
    setValue(props.value);
  }, [props.value]);
  var newInputRef = React.useRef(null);

  var _inputRef = inputRef ? inputRef : newInputRef;

  var handleChange = function handleChange(evt) {
    if (!disabled) {
      evt.persist();
      evt.imaginaryTarget = _inputRef;
      setValue(evt.target.value);
      onChange(parseFloat(evt.target.value), evt);
    }
  };

  var clearSearch = function clearSearch() {
    var valueState = '';
    setValue(valueState);
    onChange(valueState);
  };

  var numberInputClasses = classnames("".concat(prefix$1, "--number"), className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefix$1, "--number--light"), light), _defineProperty(_classNames, "".concat(prefix$1, "--number--helpertext"), helperText), _defineProperty(_classNames, "".concat(prefix$1, "--number--nolabel"), hideLabel), _defineProperty(_classNames, "".concat(prefix$1, "--number--nocontrols"), hideControls), _defineProperty(_classNames, 'wfp--search', true), _defineProperty(_classNames, 'wfp--search--lg', kind === 'large'), _defineProperty(_classNames, 'wfp--search--sm', kind === 'small'), _defineProperty(_classNames, 'wfp--search--main', kind === 'main'), _defineProperty(_classNames, 'wfp--search--banner', kind === 'banner'), _defineProperty(_classNames, 'wfp--search--light', kind === 'light'), _classNames));
  var newProps = {
    disabled: disabled,
    id: id,
    max: max,
    min: min,
    step: step,
    onChange: handleChange,
    value: value
  };
  var clearClasses = classnames({
    'wfp--search-close': true,
    'wfp--search-close--hidden': !value
  });
  return /*#__PURE__*/React__default.createElement(Input, _extends({}, props, {
    formItemClassName: numberInputClasses
  }), function () {
    return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Icon, {
      icon: icons.iconSearch,
      description: labelText,
      className: "wfp--search-magnifier",
      onClick: onSearchIconClick
    }), /*#__PURE__*/React__default.createElement("input", _extends({
      className: "wfp--search-input"
    }, other, newProps, {
      ref: _inputRef
    })), /*#__PURE__*/React__default.createElement("button", {
      className: clearClasses,
      onClick: clearSearch,
      type: "button",
      "aria-label": closeButtonLabelText
    }, /*#__PURE__*/React__default.createElement(Icon, {
      icon: icons.iconCloseGlyph,
      description: closeButtonLabelText
    })));
  });
}

NumberInput.propTypes = {
  /**
   * Specify an optional className to be applied to the wrapper node
   */
  className: PropTypes__default.string,

  /**
   * Specify an optional className to be applied to the form-item node
   */
  formItemClassName: PropTypes__default.string,

  /**
   * Specify if the control should be disabled, or not
   */
  disabled: PropTypes__default.bool,

  /**
   * Specify whether you want the underlying label to be visually hidden
   */
  hideLabel: PropTypes__default.bool,

  /**
   * Provide a description for up/down icons that can be read by screen readers
   */
  iconDescription: PropTypes__default.string.isRequired,

  /**
   * Specify a custom `id` for the input
   */
  id: PropTypes__default.string.isRequired,

  /**
   * Generic `label` that will be used as the textual representation of what
   * this field is for
   */
  labelText: PropTypes__default.node,

  /**
   * The maximum value.
   */
  max: PropTypes__default.number,

  /**
   * The minimum value.
   */
  min: PropTypes__default.number,

  /**
   * The new value is available in 'imaginaryTarget.value'
   * i.e. to get the value: evt.imaginaryTarget.value
   */
  onChange: PropTypes__default.func,

  /**
   * Provide an optional function to be called when the up/down button is clicked
   */
  onClick: PropTypes__default.func,

  /**
   * Specify how much the valus should increase/decrease upon clicking on up/down button
   */
  step: PropTypes__default.number,

  /**
   * Name property
   */
  name: PropTypes__default.string,

  /**
   * Specify the value of the input, if undefined or null the value is empty
   */
  value: PropTypes__default.string,

  /**
   * Specify if the currently value is invalid.
   */
  invalid: PropTypes__default.bool,

  /**
   * Message which is displayed if the value is invalid.
   */
  invalidText: PropTypes__default.string,

  /**
   * Provide additional component that is used alongside the input for customization
   */
  additional: PropTypes__default.node,

  /**
   * Provide text that is used alongside the control label for additional help
   */
  helperText: PropTypes__default.node,

  /**
   * `true` to use the light version.
   */
  light: PropTypes__default.bool,

  /**
   * `true` to allow empty string.
   */
  allowEmpty: PropTypes__default.bool,

  /**
   * `true` to allow empty string.
   */
  closeButtonLabelText: PropTypes__default.string
};

var prefix$2 = settings.prefix;
/** Links are used as navigational elements. They may appear on their own, within a sentence or paragraph, or directly following the content. */

var Link = function Link(_ref) {
  var _classnames;

  var children = _ref.children,
      className = _ref.className,
      href = _ref.href,
      inline = _ref.inline,
      other = _objectWithoutProperties(_ref, ["children", "className", "href", "inline"]);

  var classNames = classnames((_classnames = {}, _defineProperty(_classnames, "".concat(prefix$2, "--link"), true), _defineProperty(_classnames, "".concat(prefix$2, "--link--inline"), inline), _classnames), className);
  return /*#__PURE__*/React__default.createElement("a", _extends({
    href: href,
    className: classNames
  }, other), children);
};
Link.propTypes = {
  /**
   * Provide the content for the Link
   */
  children: PropTypes__default.node,

  /**
   * Provide a custom className to be applied to the containing <a> node
   */
  className: PropTypes__default.string,

  /**
   * Provide the `href` attribute for the <a> node
   */
  href: PropTypes__default.string,

  /**
   * Inline links are used within a sentence or paragraph and are styled with an underline. They should not be paired with an icon.
   */
  inline: PropTypes__default.bool
};

var BannerNavigationWithContent = function BannerNavigationWithContent(_ref) {
  var searchOnChange = _ref.searchOnChange,
      search = _ref.search,
      other = _objectWithoutProperties(_ref, ["searchOnChange", "search"]);

  return /*#__PURE__*/React__default.createElement(BannerNavigation, other, /*#__PURE__*/React__default.createElement(BannerNavigationItem, null, /*#__PURE__*/React__default.createElement(Link, {
    href: "https://newgo.wfp.org",
    target: "_blank"
  }, "WFPgo")), /*#__PURE__*/React__default.createElement(BannerNavigationItem, null, /*#__PURE__*/React__default.createElement(Link, {
    href: "https://selfservice.go.wfp.org",
    target: "_blank"
  }, "Self-Service")), /*#__PURE__*/React__default.createElement(BannerNavigationItem, null, /*#__PURE__*/React__default.createElement(Link, {
    href: "http://communities.wfp.org",
    target: "_blank"
  }, "Communities")), /*#__PURE__*/React__default.createElement(BannerNavigationItem, null, /*#__PURE__*/React__default.createElement(Link, {
    href: "http://manuals.wfp.org",
    target: "_blank"
  }, "Manuals")), /*#__PURE__*/React__default.createElement(BannerNavigationItem, null, /*#__PURE__*/React__default.createElement(Link, {
    href: "https://go.docs.wfp.org",
    target: "_blank"
  }, "GoDocs")), /*#__PURE__*/React__default.createElement(BannerNavigationItem, null, /*#__PURE__*/React__default.createElement(Link, {
    href: "https://newgo.wfp.org/topics/data",
    target: "_blank"
  }, "Data")), /*#__PURE__*/React__default.createElement(BannerNavigationItem, null, /*#__PURE__*/React__default.createElement(Link, {
    href: "http://opweb.wfp.org",
    target: "_blank"
  }, "OPweb")), /*#__PURE__*/React__default.createElement(BannerNavigationItem, null, /*#__PURE__*/React__default.createElement(Link, {
    href: "https://welearn.wfp.org",
    target: "_blank"
  }, "WeLearn")), search && /*#__PURE__*/React__default.createElement(BannerNavigationItem, null, /*#__PURE__*/React__default.createElement("form", {
    action: "http://gtd.wfp.org",
    method: "GET",
    acceptCharset: "UTF-8",
    target: "_blank"
  }, /*#__PURE__*/React__default.createElement(NumberInput, {
    kind: "banner",
    id: "search-2",
    labelText: "Find People",
    name: "q",
    placeHolderText: "Find People",
    onChange: searchOnChange
  }))));
};

BannerNavigationWithContent.propTypes = {
  /**
   * The CSS class name to be placed on the wrapping element.
   */
  className: PropTypes__default.string,

  /**
   * Specify the max-width on desktop devices (same as \`Wrapper\` component)
   */
  pageWidth: PropTypes__default.oneOf(['sm', 'md', 'lg', 'full']),

  /**
   * Allows to disable the search input
   */
  search: PropTypes__default.bool,

  /**
   * A onChange Function for the search
   */
  searchOnChange: PropTypes__default.func
};
BannerNavigationWithContent.defaultProps = {
  search: false,
  searchOnChange: function searchOnChange() {}
};

var _Blockquote$propTypes;
var iconLookup = {
  warning: {
    icon: icons.iconWarning
  },
  error: {
    icon: icons.iconWarningSolid
  },
  info: {
    icon: icons.iconInfoSolid
  },
  success: {
    icon: icons.iconCheckmark
  }
};
/**
 *  The Blockquote element indicates that the enclosed text is an extended quotation or information. It is rendered visually by a surrounding box. */

var Blockquote = /*#__PURE__*/function (_React$Component) {
  _inherits(Blockquote, _React$Component);

  var _super = _createSuper(Blockquote);

  function Blockquote(props) {
    var _this;

    _classCallCheck(this, Blockquote);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "toggleBlockquote", function () {
      if (_this.props.toggleable) _this.setState({
        open: !_this.state.open
      }, function () {
        console.log('toogle', _this.state.open);
      });
    });

    _this.state = {
      open: false
    };
    return _this;
  }

  _createClass(Blockquote, [{
    key: "render",

    /*showInnerHtml = content => {
      return { __html: content };
    };*/
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          contentClassName = _this$props.contentClassName,
          children = _this$props.children,
          error = _this$props.error,
          style = _this$props.style,
          title = _this$props.title,
          toggleable = _this$props.toggleable,
          icon = _this$props.icon,
          light = _this$props.light,
          code = _this$props.code,
          warning = _this$props.warning,
          withIcon = _this$props.withIcon,
          info = _this$props.info,
          kind = _this$props.kind;
      var blockquoteClass = classnames(_defineProperty({
        'wfp--blockquote': true,
        'wfp--blockquote--toggleable': toggleable,
        'wfp--blockquote--light': light,
        'wfp--blockquote--code': code,
        'wfp--blockquote--no-content': !children,
        'wfp--blockquote--error': kind === 'error' || error,
        'wfp--blockquote--warning': kind === 'warning' || warning,
        'wfp--blockquote--success': kind === 'success',
        'wfp--blockquote--info': kind === 'info' || info,
        'wfp--blockquote--with-icon': withIcon || icon,
        'wfp--blockquote--toggle--open': this.state.open
      }, "".concat(className), className));
      var blockquoteContentClass = classnames('wfp--blockquote__content', _defineProperty({}, "".concat(className), contentClassName)); // @deprecated Only kind is allowed

      var lookup = warning || kind === 'warning' ? iconLookup['warning'] : error || kind === 'error' ? iconLookup['error'] : kind === 'success' ? iconLookup['success'] : iconLookup['info'];
      var iconElement = /*#__PURE__*/React__default.isValidElement(icon) ? /*#__PURE__*/React__default.createElement("div", {
        className: "wfp--blockquote__icon wfp--blockquote__icon--custom"
      }, icon) : withIcon || icon ? /*#__PURE__*/React__default.createElement(Icon, {
        icon: icon ? icon : lookup.icon,
        description: "Blockquote Icon",
        className: "wfp--blockquote__icon"
      }) : null;
      return /*#__PURE__*/React__default.createElement("div", {
        className: blockquoteClass
      }, iconElement && /*#__PURE__*/React__default.createElement("div", {
        className: "wfp--blockquote__icon-wrapper"
      }, iconElement), /*#__PURE__*/React__default.createElement("div", {
        className: blockquoteContentClass,
        style: style
      }, (title || toggleable) && /*#__PURE__*/React__default.createElement("div", {
        onClick: this.toggleBlockquote,
        onKeyDown: this.toggleBlockquote,
        className: "wfp--blockquote__title",
        role: "button",
        tabIndex: 0
      }, title ? title : this.state.open ? 'Hide content' : 'Show content'), /*#__PURE__*/React__default.createElement("div", {
        className: "wfp--blockquote__inside"
      }, children)));
    }
  }]);

  return Blockquote;
}(React__default.Component);

Blockquote.propTypes = (_Blockquote$propTypes = {
  /**
   * Specify a className of your `Blockquote`
   */
  className: PropTypes__default.string,

  /**
   * Specify a className of the inner Blockquote content
   */
  children: PropTypes__default.string
}, _defineProperty(_Blockquote$propTypes, "children", PropTypes__default.node), _defineProperty(_Blockquote$propTypes, "code", PropTypes__default.bool), _defineProperty(_Blockquote$propTypes, "light", PropTypes__default.bool), _defineProperty(_Blockquote$propTypes, "toggleable", PropTypes__default.bool), _defineProperty(_Blockquote$propTypes, "title", PropTypes__default.node), _defineProperty(_Blockquote$propTypes, "kind", PropTypes__default.oneOf[('success')]), _defineProperty(_Blockquote$propTypes, "withIcon", PropTypes__default.bool), _defineProperty(_Blockquote$propTypes, "icon", PropTypes__default.oneOfType([PropTypes__default.node, PropTypes__default.object])), _Blockquote$propTypes);

var prefix$3 = settings.prefix;
/**
 * The breadcrumb is a secondary navigation pattern that helps a user understand the hierarchy among levels and navigate back through them. */

var Breadcrumb = function Breadcrumb(_ref) {
  var _classnames;

  var children = _ref.children,
      className = _ref.className,
      other = _objectWithoutProperties(_ref, ["children", "className"]);

  var classNames = classnames(className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefix$3, "--breadcrumb"), true), _defineProperty(_classnames, "".concat(prefix$3, "--breadcrumb--no-trailing-slash"), true), _classnames));
  return /*#__PURE__*/React__default.createElement("div", _extends({
    className: classNames
  }, other), children);
};

Breadcrumb.propTypes = {
  /**
   * Pass in the BreadcrumbItem's for your Breadcrumb
   */
  children: PropTypes__default.node,

  /**
   * Specify an optional className to be applied to the container node
   */
  className: PropTypes__default.string
};

var newChild = function newChild(children, disableLink, href) {
  if (disableLink === true) {
    return /*#__PURE__*/React__default.createElement("span", null, children);
  } else if (typeof children === 'string' && !(href === undefined)) {
    return /*#__PURE__*/React__default.createElement(Link, {
      href: href
    }, children);
  } else {
    return /*#__PURE__*/React__default.cloneElement(React__default.Children.only(children), {
      className: 'wfp--link'
    });
  }
};

var BreadcrumbItem = function BreadcrumbItem(_ref) {
  var children = _ref.children,
      className = _ref.className,
      disableLink = _ref.disableLink,
      href = _ref.href,
      other = _objectWithoutProperties(_ref, ["children", "className", "disableLink", "href"]);

  var classNames = classnames('wfp--breadcrumb-item', className);
  return /*#__PURE__*/React__default.createElement("div", _extends({
    className: classNames
  }, other), newChild(children, disableLink, href));
};

BreadcrumbItem.propTypes = {
  /**
   * The children elements, usually a link
   */
  children: PropTypes__default.node,

  /**
   * Specify an optional className to be added to the `BreadcrumbItem` Icon
   */
  className: PropTypes__default.string,

  /**
   * Specify an link for the `BreadcrumbItem`
   */
  href: PropTypes__default.string,

  /**
   * Specify `BreadcrumbItem` to be interactive/enabled or non-interactive/disabled
   */
  disableLink: PropTypes__default.bool
};

var BreadcrumbHome = function BreadcrumbHome(_ref) {
  var className = _ref.className,
      hometext = _ref.hometext,
      other = _objectWithoutProperties(_ref, ["className", "hometext"]);

  var classNames = classnames('wfp--breadcrumb-home', className);
  return /*#__PURE__*/React__default.createElement(Icon, _extends({
    icon: icons.iconHome,
    fill: "#0b77c2",
    width: "14",
    height: "14",
    description: hometext,
    className: classNames
  }, other));
};

BreadcrumbHome.propTypes = {
  /**
   * Specify an optional className to be added to the `Home` Icon
   */
  className: PropTypes__default.string,

  /**
   * Specify an optional text for the `Home` Icon
   */
  hometext: PropTypes__default.string
};

var ButtonTypes = {
  buttonKind: PropTypes.oneOf(['primary', 'secondary', 'accent', 'danger', 'ghost', 'inverse--primary', 'inverse', 'danger--primary', 'tertiary', 'navigation'])
};

/**
 * Buttons express what action will occur when the user clicks or touches it. Buttons are used to initialize an action, either in the background or foreground of an experience. */

var Button = function Button(_ref) {
  var children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      small = _ref.small,
      kind = _ref.kind,
      href = _ref.href,
      iconReverse = _ref.iconReverse,
      tabIndex = _ref.tabIndex,
      type = _ref.type,
      icon = _ref.icon,
      iconDescription = _ref.iconDescription,
      onClick = _ref.onClick,
      other = _objectWithoutProperties(_ref, ["children", "className", "disabled", "small", "kind", "href", "iconReverse", "tabIndex", "type", "icon", "iconDescription", "onClick"]);

  var _useState = React.useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  React.useEffect(function () {
    var timer = setTimeout(function () {
      return endAnimation();
    }, 500);
    return function () {
      clearTimeout(timer);
    };
  }, [count]);
  var buttonClasses = classnames(className, {
    'wfp--btn': true,
    'wfp--btn--sm': small,
    'wfp--btn--icon-reverse': iconReverse,
    'wfp--btn--icon-only': icon && children === undefined,
    'wfp--btn--primary': kind === 'primary',
    'wfp--btn--danger': kind === 'danger',
    'wfp--btn--accent': kind === 'accent',
    'wfp--btn--secondary': kind === 'secondary',
    'wfp--btn--navigation': kind === 'navigation',
    'wfp--btn--ghost': kind === 'ghost',
    'wfp--btn--inverse--primary': kind === 'inverse--primary',
    'wfp--btn--inverse': kind === 'inverse',
    'wfp--btn--danger--primary': kind === 'danger--primary',
    'wfp--btn--tertiary': kind === 'tertiary',
    'wfp--btn--animating': count
  });
  var commonProps = {
    tabIndex: tabIndex,
    className: buttonClasses
  };
  var buttonImage = icon ? /*#__PURE__*/React__default.createElement(Icon, {
    icon: Object(icon) === icon ? icon : undefined,
    name: Object(icon) !== icon ? icon : undefined,
    description: iconDescription,
    className: "wfp--btn__icon"
  }) : null;

  var endAnimation = function endAnimation() {
    setCount(false);
  };

  var onClickAnimation = function onClickAnimation(e) {
    if (onClick) {
      onClick(e);
    }

    setCount(true);
  };

  var button = /*#__PURE__*/React__default.createElement("button", _extends({}, other, commonProps, {
    disabled: disabled,
    type: type,
    onClick: onClickAnimation,
    ref: other.inputref
  }), iconReverse && buttonImage, children, !iconReverse && buttonImage);
  var anchor = /*#__PURE__*/React__default.createElement("a", _extends({}, other, commonProps, {
    href: href,
    role: "button",
    onClick: onClickAnimation,
    ref: other.inputref
  }), children, buttonImage);
  return href ? anchor : button;
};

Button.propTypes = {
  /**
   * Specify the content of your Button
   */
  children: PropTypes__default.node,

  /**
   * Specify an optional className to be added to your Button
   */
  className: PropTypes__default.string,

  /**
   * Specify whether the Button should be disabled, or not
   */
  disabled: PropTypes__default.bool,

  /**
   * FOR DESIGNERS
   * Specify whether the Button should be a small variant
   */
  small: PropTypes__default.bool,

  /**
   * FOR DESIGNERS
   * Specify the kind of Button you want to create
   */
  kind: PropTypes__default.oneOf(['primary', 'secondary', 'accent', 'danger', 'ghost', 'inverse--primary', 'inverse', 'danger--primary', 'tertiary', 'navigation']),
  //ButtonTypes.buttonKind.isRequired,

  /**
   * Optionally specify an href for your Button to become an <a> element
   */
  href: PropTypes__default.string,

  /**
   * Optional prop to specify the tabIndex of the Button
   */
  tabIndex: PropTypes__default.number,

  /**
   * Optional prop to specify the type of the Button
   */
  type: PropTypes__default.oneOf(['button', 'reset', 'submit']),

  /**
   * Optional prop to specify the role of the Button
   */
  role: PropTypes__default.string,

  /**
   * Specify an `icon` to include in the Button through an object representing the SVG data of the icon, similar to the `Icon` component
   */
  icon: PropTypes__default.shape({
    width: PropTypes__default.string,
    height: PropTypes__default.string,
    viewBox: PropTypes__default.string.isRequired,
    svgData: PropTypes__default.object.isRequired
  }),

  /**
   * If specifying the `icon` prop, provide a description for that icon that can
   * be read by screen readers
   */
  iconDescription: function iconDescription(props) {
    if (props.icon && !props.iconDescription) {
      return new Error('icon property specified without also providing an iconDescription property.');
    }

    return undefined;
  },

  /**
   * Optionally specify an href for your Button to become an <a> element
   */
  iconReverse: PropTypes__default.bool
};
Button.defaultProps = {
  iconReverse: false,
  iconDescription: 'Provide icon description if icon is used',
  tabIndex: 0,
  type: 'button',
  disabled: false,
  small: false,
  kind: 'primary'
};

/**
 * Cards are a convenient means of displaying content composed of different types of objects. It is a multi usage component which creates boxes that are usually teasing some kind of content. */

var Card = function Card(_ref) {
  var _classNames;

  var children = _ref.children,
      className = _ref.className,
      image = _ref.image,
      isExternal = _ref.isExternal,
      isLink = _ref.isLink,
      metadata = _ref.metadata,
      more = _ref.more,
      subTitle = _ref.subTitle,
      title = _ref.title,
      kind = _ref.kind,
      url = _ref.url,
      other = _objectWithoutProperties(_ref, ["children", "className", "image", "isExternal", "isLink", "metadata", "more", "subTitle", "title", "kind", "url"]);

  var style = kind !== 'related' ? {
    backgroundImage: "url(".concat(image, ")")
  } : {};
  var wrapperClasses = classnames('wfp--photo-card', (_classNames = {}, _defineProperty(_classNames, "wfp--photo-card--".concat(kind), kind), _defineProperty(_classNames, 'wfp--photo-card--no-background', !image), _defineProperty(_classNames, 'wfp--photo-card--link', isLink), _defineProperty(_classNames, "".concat(className), className), _classNames));
  var content = /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    className: "wfp--photo-card__background",
    style: style
  }), image && kind === 'related' && /*#__PURE__*/React__default.createElement("img", {
    src: image,
    alt: title
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "wfp--photo-card__info"
  }, /*#__PURE__*/React__default.createElement("div", null, (kind === 'landscape' || kind === 'hero') && /*#__PURE__*/React__default.createElement("div", {
    className: "wfp--photo-card__info__background",
    style: style
  }), metadata && /*#__PURE__*/React__default.createElement("p", {
    className: "wfp--photo-card__info__metadata"
  }, metadata), title && (kind === 'hero' || kind === 'page-splash') && /*#__PURE__*/React__default.createElement("h2", {
    className: "wfp--photo-card__info__title"
  }, title), title && kind !== 'hero' && kind !== 'page-splash' && /*#__PURE__*/React__default.createElement("h3", {
    className: "wfp--photo-card__info__title"
  }, title), subTitle && /*#__PURE__*/React__default.createElement("p", {
    className: "wfp--photo-card__info__subtitle"
  }, subTitle)), kind === 'hero' || kind === 'splash-image' || kind === 'splash-compact' && /*#__PURE__*/React__default.createElement("div", {
    className: "wfp--photo-card__info__more"
  }, more)), children);
  return isLink ? /*#__PURE__*/React__default.createElement("a", _extends({
    href: url,
    target: isExternal ? '_blank' : '',
    className: wrapperClasses
  }, other), content) : /*#__PURE__*/React__default.createElement("div", _extends({
    className: wrapperClasses
  }, other), content);
};

Card.propTypes = {
  /**
   Additional className which will be added
  */
  className: PropTypes__default.string,

  /**
   The links target
  */
  href: PropTypes__default.string,

  /**
   An optimized photograph
  */
  image: PropTypes__default.string,

  /**
  External link flag
  */
  isExternal: PropTypes__default.bool,

  /**
  Render the Card as link
  */
  isLink: PropTypes__default.bool,

  /**
  A short sentence to explain the content of the node (max 180 characters) 
  */
  subTitle: PropTypes__default.node,

  /**
   A search-friendly title (ideally 50 characters, max 100) 
  */
  title: PropTypes__default.node,

  /**
  Additional metadatas
  */
  metadata: PropTypes__default.string,

  /**
  Additional more content
  */
  more: PropTypes__default.node,

  /**
  Kind of Card
  */
  kind: PropTypes__default.oneOf(['landscape', 'landscape-light', 'emergencies', 'split', 'hero', 'splash', 'splash-image', 'splash-compact', 'related']).isRequired,

  /**
  The URL where the content uploaded is located.
  */
  url: PropTypes__default.string
};
Card.defaultProps = {
  isLink: true
};

/**
 * Checkboxes are used for a list of options where the user may select multiple options, including all or none. */

var Checkbox = function Checkbox(_ref) {
  var className = _ref.className,
      id = _ref.id,
      labelText = _ref.labelText,
      _onChange = _ref.onChange,
      indeterminate = _ref.indeterminate,
      hideLabel = _ref.hideLabel,
      wrapperClassName = _ref.wrapperClassName,
      inputRef = _ref.inputRef,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      other = _objectWithoutProperties(_ref, ["className", "id", "labelText", "onChange", "indeterminate", "hideLabel", "wrapperClassName", "inputRef", "title"]);

  var customId = id ? id : other.name;
  var labelClasses = classnames('wfp--checkbox-label', className);
  var innerLabelClasses = classnames({
    'wfp--visually-hidden': hideLabel
  });
  var wrapperClasses = classnames('wfp--form-item', 'wfp--checkbox-wrapper', wrapperClassName);
  return /*#__PURE__*/React__default.createElement("div", {
    className: wrapperClasses
  }, /*#__PURE__*/React__default.createElement("input", _extends({}, other, {
    type: "checkbox",
    onChange: function onChange(evt) {
      _onChange(evt.target.checked, customId, evt);
    },
    className: "wfp--checkbox",
    id: customId,
    ref: function ref(el) {
      if (el) {
        el.indeterminate = indeterminate;
      }

      if (typeof inputRef === 'function') {
        inputRef(el);
      } else if (Object(inputRef) === inputRef) {
        inputRef.current = el;
      }
    }
  })), /*#__PURE__*/React__default.createElement("label", {
    htmlFor: customId,
    className: labelClasses,
    title: title || null
  }, /*#__PURE__*/React__default.createElement("span", {
    className: innerLabelClasses
  }, labelText)));
};

Checkbox.propTypes = {
  /**
   * Specify whether the underlying input should be checked
   */
  checked: PropTypes__default.bool,

  /**
   * Specify whether the underlying input should be checked by default
   */
  defaultChecked: PropTypes__default.bool,

  /**
   * Specify whether the Checkbox is in an indeterminate state
   */
  indeterminate: PropTypes__default.bool,

  /**
   * Specify an optional className to be applied to the <label> node
   */
  className: PropTypes__default.string,

  /**
   * Specify whether the Checkbox should be disabled
   */
  disabled: PropTypes__default.bool,

  /**
   * Provide an `id` to uniquely identify the Checkbox input
   */
  id: PropTypes__default.string.isRequired,

  /**
   * Provide a label to provide a description of the Checkbox input that you are
   * exposing to the user
   */
  labelText: PropTypes__default.node.isRequired,

  /**
   * Specify whether the label should be hidden, or not
   */
  hideLabel: PropTypes__default.bool,

  /**
   * Receives three arguments: true/false, the checkbox's id, and the dom event.
   */
  onChange: PropTypes__default.func,

  /**
   * Specify a title for the <label> node for the Checkbox
   */
  title: PropTypes__default.string,

  /**
   * The CSS class name to be placed on the wrapping element
   */
  wrapperClassName: PropTypes__default.string
};
Checkbox.defaultProps = {
  onChange: function onChange() {},
  indeterminate: false
};

/** Credits are mostly used when a photo need a source attribution. */

var Credits = function Credits(_ref) {
  var children = _ref.children,
      className = _ref.className,
      info = _ref.info,
      other = _objectWithoutProperties(_ref, ["children", "className", "info"]);

  var classNames = classnames('wfp--credits', className);
  return /*#__PURE__*/React__default.createElement("div", _extends({
    className: classNames
  }, other), /*#__PURE__*/React__default.createElement("div", {
    className: "wfp--credits__info"
  }, info), children);
};

Credits.propTypes = {
  /**
  Specify the image or content
  */
  children: PropTypes__default.node,

  /**
  Additional className which will be added
  */
  className: PropTypes__default.string,

  /**
  Specifiy the info content
  */
  info: PropTypes__default.string
};

/** ContentSwitcher manipulates the content shown following an exclusive or “either/or” pattern. It is used to toggle between two or more content sections within the same space on screen. Only one section can be shown at a time.
 */

function ContentSwitcher(_ref) {
  var children = _ref.children,
      className = _ref.className,
      selectedIndex = _ref.selectedIndex,
      small = _ref.small,
      onChange = _ref.onChange,
      other = _objectWithoutProperties(_ref, ["children", "className", "selectedIndex", "small", "onChange"]);

  var _useState = React.useState(selectedIndex),
      _useState2 = _slicedToArray(_useState, 2),
      selectedIdx = _useState2[0],
      setSelectedIndex = _useState2[1];

  var getChildren = function getChildren(children) {
    return React__default.Children.map(children, function (child, index) {
      return /*#__PURE__*/React__default.cloneElement(child, {
        index: index,
        onClick: handleChildChange,
        onKeyDown: handleChildChange,
        selected: index === selectedIdx
      });
    });
  };

  var handleChildChange = function handleChildChange(data) {
    var index = data.index;

    if (selectedIdx !== index) {
      setSelectedIndex(index);
      onChange(data);
    }
  };

  var classes = classnames('wfp--content-switcher', className, {
    'wfp--content-switcher--sm': small
  });
  return /*#__PURE__*/React__default.createElement("div", _extends({}, other, {
    className: classes
  }), getChildren(children));
}
ContentSwitcher.propTypes = {
  /** Specify the content of your ContentSwitcher */
  children: PropTypes__default.node,

  /** Specify an optional className to be added to your ContentSwitcher */
  className: PropTypes__default.string,

  /** Specify an `onChange` handler that is called whenever the ContentSwitcher changes which item is selected */
  onChange: PropTypes__default.func.isRequired,

  /** Specify a selected index for the initially selected content */
  selectedIndex: PropTypes__default.number
};
ContentSwitcher.defaultProps = {
  selectedIndex: 0
};

var prefix$4 = settings.prefix;
var SingleDatePickerInput = /*#__PURE__*/function (_PureComponent) {
  _inherits(SingleDatePickerInput, _PureComponent);

  var _super = _createSuper(SingleDatePickerInput);

  function SingleDatePickerInput() {
    var _this;

    _classCallCheck(this, SingleDatePickerInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      controlledValue: _this.props.initialValue ? _this.props.value : null,
      focusedInput: null
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocusChange", function (focusedInput) {
      if (!focusedInput && typeof _this.props.onBlur === 'function') {
        _this.props.onBlur();
      }

      _this.setState({
        focusedInput: focusedInput
      });
    });

    return _this;
  }

  _createClass(SingleDatePickerInput, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          controlled = _this$props.controlled,
          datePicker = _this$props.datePicker,
          labelText = _this$props.labelText,
          className = _this$props.className,
          id = _this$props.id,
          placeholder = _this$props.placeholder,
          type = _this$props.type,
          onChange = _this$props.onChange,
          onClick = _this$props.onClick,
          hideLabel = _this$props.hideLabel,
          invalid = _this$props.invalid,
          invalidText = _this$props.invalidText,
          helperText = _this$props.helperText,
          active = _this$props.active,
          value = _this$props.value,
          name = _this$props.name,
          onFocus = _this$props.onFocus,
          onBlur = _this$props.onBlur,
          onDragStart = _this$props.onDragStart,
          onDrop = _this$props.onDrop,
          other = _objectWithoutProperties(_this$props, ["controlled", "datePicker", "labelText", "className", "id", "placeholder", "type", "onChange", "onClick", "hideLabel", "invalid", "invalidText", "helperText", "active", "value", "name", "onFocus", "onBlur", "onDragStart", "onDrop"]);

      var _this$state = this.state,
          controlledValue = _this$state.controlledValue,
          focused = _this$state.focused;
      var SingleDatePicker = datePicker;
      var labelClasses = classnames("".concat(prefix$4, "--label"), _defineProperty({}, "".concat(prefix$4, "--visually-hidden"), hideLabel));
      var label = labelText ? /*#__PURE__*/React__default.createElement("label", {
        htmlFor: id,
        className: labelClasses
      }, labelText) : null;
      var errorMessage = invalid ? /*#__PURE__*/React__default.createElement("div", {
        className: "".concat(prefix$4, "--form-requirement invalid")
      }, invalidText) : null;
      var helper = helperText ? /*#__PURE__*/React__default.createElement("div", {
        className: "".concat(prefix$4, "--form__helper-text")
      }, helperText) : null;
      return /*#__PURE__*/React__default.createElement("div", {
        className: "wfp--form-item"
      }, label, helper, /*#__PURE__*/React__default.createElement(SingleDatePicker, _extends({
        date: onChange && value ? value : controlledValue,
        focused: focused,
        hideKeyboardShortcutsPanel: true,
        onDateChange: function onDateChange(value) {
          if (onChange) {
            onChange({
              value: value
            });
          }

          _this2.setState({
            controlledValue: value
          });
        },
        onFocusChange: function onFocusChange(_ref) {
          var focused = _ref.focused;

          _this2.setState({
            focused: focused
          });

          focused ? onFocus(true) : onBlur(true);
        }
      }, other)), errorMessage);
    }
  }]);

  return SingleDatePickerInput;
}(React.PureComponent);
SingleDatePickerInput.defaultProps = {
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onChange: function onChange() {}
};
SingleDatePickerInput.propTypes = {
  /**
   * Provide the SingleDatePicker as a component
   */
  datePicker: PropTypes__default.func.isRequired,

  /**
   * Provide a custom className that is applied directly to the underlying
   * <textarea> node
   */
  className: PropTypes__default.string,

  /**
   * Specify whether the control is disabled
   */
  disabled: PropTypes__default.bool,

  /**
   * Provide a unique identifier for the control
   */
  id: PropTypes__default.string,

  /**
   * Provide the text that will be read by a screen reader when visiting this
   * control
   */
  labelText: PropTypes__default.node.isRequired,

  /**
   * Optionally provide an `onChange` handler that is called whenever <textarea>
   * is updated
   */
  onChange: PropTypes__default.func,

  /**
   * Optionally provide an `onClick` handler that is called whenever the
   * <textarea> is clicked
   */
  onClick: PropTypes__default.func,

  /**
   * Specify the placeholder attribute for the <textarea>
   */
  placeholder: PropTypes__default.string,

  /**
   * Specify the rows attribute for the <textarea>
   */
  rows: PropTypes__default.number,

  /**
   * Specify whether the control is currently invalid
   */
  invalid: PropTypes__default.bool,

  /**
   * Provide the text that is displayed when the control is in an invalid state
   */
  invalidText: PropTypes__default.string,

  /**
   * Provide text that is used alongside the control label for additional help
   */
  helperText: PropTypes__default.node,

  /**
   * Specify whether you want the underlying label to be visually hidden
   */
  hideLabel: PropTypes__default.bool
};

var prefix$5 = settings.prefix;
var DateRangePickerInput = /*#__PURE__*/function (_PureComponent) {
  _inherits(DateRangePickerInput, _PureComponent);

  var _super = _createSuper(DateRangePickerInput);

  function DateRangePickerInput() {
    var _this;

    _classCallCheck(this, DateRangePickerInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      focusedInput: null,
      startDate: _this.props.startDate ? _this.props.startDate : null,
      endDate: _this.props.endDate ? _this.props.endDate : null
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocusChange", function (focusedInput) {
      if (!focusedInput && typeof _this.props.onBlur === 'function') {
        _this.props.onBlur();
      }

      _this.setState({
        focusedInput: focusedInput
      });
    });

    return _this;
  }

  _createClass(DateRangePickerInput, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          controlled = _this$props.controlled,
          datePicker = _this$props.datePicker,
          labelText = _this$props.labelText,
          className = _this$props.className,
          id = _this$props.id,
          placeholder = _this$props.placeholder,
          type = _this$props.type,
          onChange = _this$props.onChange,
          onClick = _this$props.onClick,
          hideLabel = _this$props.hideLabel,
          invalid = _this$props.invalid,
          invalidText = _this$props.invalidText,
          helperText = _this$props.helperText,
          value = _this$props.value,
          startDateId = _this$props.startDateId,
          startDatePlaceholderText = _this$props.startDatePlaceholderText,
          endDateId = _this$props.endDateId,
          endDatePlaceholderText = _this$props.endDatePlaceholderText,
          name = _this$props.name,
          onBlur = _this$props.onBlur,
          onDragStart = _this$props.onDragStart,
          onDrop = _this$props.onDrop,
          onFocus = _this$props.onFocus,
          other = _objectWithoutProperties(_this$props, ["controlled", "datePicker", "labelText", "className", "id", "placeholder", "type", "onChange", "onClick", "hideLabel", "invalid", "invalidText", "helperText", "value", "startDateId", "startDatePlaceholderText", "endDateId", "endDatePlaceholderText", "name", "onBlur", "onDragStart", "onDrop", "onFocus"]);

      var _this$state = this.state,
          focusedInput = _this$state.focusedInput,
          startDate = _this$state.startDate,
          endDate = _this$state.endDate;
      var DateRangePicker = datePicker;
      var labelClasses = classnames("".concat(prefix$5, "--label"), _defineProperty({}, "".concat(prefix$5, "--visually-hidden"), hideLabel));
      var label = labelText ? /*#__PURE__*/React__default.createElement("label", {
        htmlFor: id,
        className: labelClasses
      }, labelText) : null;
      var errorMessage = invalid ? /*#__PURE__*/React__default.createElement("div", {
        className: "".concat(prefix$5, "--form-requirement invalid")
      }, invalidText) : null;
      var helper = helperText ? /*#__PURE__*/React__default.createElement("div", {
        className: "".concat(prefix$5, "--form__helper-text")
      }, helperText) : null;
      return /*#__PURE__*/React__default.createElement("div", {
        className: "wfp--form-item"
      }, label, helper, /*#__PURE__*/React__default.createElement(DateRangePicker, _extends({
        endDateId: endDateId,
        endDate: onChange && value ? value.endDate : endDate,
        endDatePlaceholderText: endDatePlaceholderText,
        focusedInput: focusedInput,
        hideKeyboardShortcutsPanel: true,
        onDatesChange: function onDatesChange(_ref) {
          var startDate = _ref.startDate,
              endDate = _ref.endDate;

          if (onChange) {
            onChange({
              startDate: startDate,
              endDate: endDate
            });
          }

          _this2.setState({
            startDate: startDate,
            endDate: endDate
          });
        },
        onFocusChange: this.handleFocusChange,
        startDateId: startDateId,
        startDate: onChange && value ? value.startDate : startDate,
        startDatePlaceholderText: startDatePlaceholderText
      }, other)), errorMessage);
    }
  }]);

  return DateRangePickerInput;
}(React.PureComponent);
DateRangePickerInput.defaultProps = {
  startDateId: 'startDate',
  endDateId: 'endDate',
  startDatePlaceholderText: 'Start Date',
  endDatePlaceholderText: 'End Date'
};
DateRangePickerInput.propTypes = {
  /**
   * Provide the SingleDatePicker as a component
   */
  datePicker: PropTypes__default.func.isRequired,

  /**
   * Provide the placeholder for the start input
   */
  startDatePlaceholderText: PropTypes__default.string,

  /**
   * Provide the placeholder for the end input
   */
  endDatePlaceholderText: PropTypes__default.string
};

var prefix$6 = settings.prefix;
/** Loading spinners are used when retrieving data or performing slow computations, and help to notify users that loading is underway. */

var Loading = /*#__PURE__*/function (_React$Component) {
  _inherits(Loading, _React$Component);

  var _super = _createSuper(Loading);

  function Loading() {
    _classCallCheck(this, Loading);

    return _super.apply(this, arguments);
  }

  _createClass(Loading, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          active = _this$props.active,
          className = _this$props.className,
          withOverlay = _this$props.withOverlay,
          small = _this$props.small,
          other = _objectWithoutProperties(_this$props, ["active", "className", "withOverlay", "small"]);

      var loadingClasses = classnames("".concat(prefix$6, "--loading"), className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefix$6, "--loading--small"), small), _defineProperty(_classNames, "".concat(prefix$6, "--loading--stop"), !active), _classNames));
      var overlayClasses = classnames("".concat(prefix$6, "--loading-overlay"), _defineProperty({}, "".concat(prefix$6, "--loading-overlay--stop"), !active));
      var loading = /*#__PURE__*/React__default.createElement("div", _extends({}, other, {
        "aria-live": active ? 'assertive' : 'off',
        className: loadingClasses
      }), /*#__PURE__*/React__default.createElement("svg", {
        className: "".concat(prefix$6, "--loading__svg"),
        viewBox: "-75 -75 150 150"
      }, /*#__PURE__*/React__default.createElement("title", null, "Loading"),  null, /*#__PURE__*/React__default.createElement("circle", {
        className:  null,
        cx: "0",
        cy: "0",
        r: "37.5"
      })));
      return withOverlay ? /*#__PURE__*/React__default.createElement("div", {
        className: overlayClasses
      }, loading) : loading;
    }
  }]);

  return Loading;
}(React__default.Component);

_defineProperty(Loading, "propTypes", {
  /**
   * Specify whether you want the loading indicator to be spinning or not
   */
  active: PropTypes__default.bool,

  /**
   * Provide an optional className to be applied to the containing node
   */
  className: PropTypes__default.string,

  /**
   * Specify whether you want the loader to be applied with an overlay
   */
  withOverlay: PropTypes__default.bool,

  /**
   * Specify whether you would like the small variant of <Loading>
   */
  small: PropTypes__default.bool
});

_defineProperty(Loading, "defaultProps", {
  active: true,
  withOverlay: true,
  small: false
});

var lastId = 0;
function uid () {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'id';
  lastId++;
  return "".concat(prefix).concat(lastId);
}

var prefix$7 = settings.prefix;
var FileUploaderButton = /*#__PURE__*/function (_Component) {
  _inherits(FileUploaderButton, _Component);

  var _super = _createSuper(FileUploaderButton);

  function FileUploaderButton() {
    var _this;

    _classCallCheck(this, FileUploaderButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (evt) {
      var files = evt.target.files;
      var length = evt.target.files.length;

      if (files && !_this.props.disableLabelChanges) {
        if (length > 1) {
          _this.setState({
            labelText: "".concat(length, " files")
          });
        } else if (length === 1) {
          _this.setState({
            labelText: files[0].name
          });
        }
      }

      _this.props.onChange(evt);
    });

    return _this;
  }

  _createClass(FileUploaderButton, [{
    key: "render",
    value: function render() {
      var _classNames,
          _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          disableLabelChanges = _this$props.disableLabelChanges,
          labelText = _this$props.labelText,
          multiple = _this$props.multiple,
          role = _this$props.role,
          tabIndex = _this$props.tabIndex,
          buttonKind = _this$props.buttonKind,
          accept = _this$props.accept,
          name = _this$props.name,
          disabled = _this$props.disabled,
          other = _objectWithoutProperties(_this$props, ["className", "disableLabelChanges", "labelText", "multiple", "role", "tabIndex", "buttonKind", "accept", "name", "disabled"]);

      var classes = classnames("".concat(prefix$7, "--btn"), className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefix$7, "--btn--").concat(buttonKind), buttonKind), _defineProperty(_classNames, "".concat(prefix$7, "--btn--disabled"), disabled), _classNames));
      this.uid = this.props.id || uid();
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("label", _extends({
        tabIndex: disabled ? -1 : tabIndex || 0,
        "aria-disabled": disabled,
        className: classes,
        onKeyDown: function onKeyDown(evt) {
          if (evt.which === 13 || evt.which === 32) {
            _this2.input.click();
          }
        },
        htmlFor: this.uid
      }, other), /*#__PURE__*/React__default.createElement("span", {
        role: role
      }, this.state.labelText)), /*#__PURE__*/React__default.createElement("input", {
        className: "".concat(prefix$7, "--visually-hidden"),
        ref: function ref(input) {
          return _this2.input = input;
        },
        id: this.uid,
        disabled: disabled,
        type: "file",
        tabIndex: "-1",
        multiple: multiple,
        accept: accept,
        name: name,
        onChange: this.handleChange,
        onClick: function onClick(evt) {
          evt.target.value = null;
        }
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref, state) {
      var labelText = _ref.labelText;
      var prevLabelText = state.prevLabelText;
      return prevLabelText === labelText ? null : {
        labelText: labelText,
        prevLabelText: labelText
      };
    }
  }]);

  return FileUploaderButton;
}(React.Component);

_defineProperty(FileUploaderButton, "propTypes", {
  /**
   * Provide a custom className to be applied to the container node
   */
  className: PropTypes__default.string,

  /**
   * Specify whether you want to disable any updates to the FileUploaderButton
   * label
   */
  disableLabelChanges: PropTypes__default.bool,

  /**
   * Provide a unique id for the underlying <input> node
   */
  id: PropTypes__default.string,

  /**
   * Provide the label text to be read by screen readers when interacting with
   * this control
   */
  labelText: PropTypes__default.node,

  /**
   * Specify whether you want the component to list the files that have been
   * submitted to be uploaded
   */
  listFiles: PropTypes__default.bool,

  /**
   * Specify if the component should accept multiple files to upload
   */
  multiple: PropTypes__default.bool,

  /**
   * Provide a name for the underlying <input> node
   */
  name: PropTypes__default.string,

  /**
   * Provide an optional `onChange` hook that is called each time the <input>
   * value changes
   */
  onChange: PropTypes__default.func,

  /**
   * Provide an optional `onClick` hook that is called each time the button is
   * clicked
   */
  onClick: PropTypes__default.func,

  /**
   * Provide an accessibility role for the <FileUploaderButton>
   */
  role: PropTypes__default.string,

  /**
   * Provide a custom tabIndex value for the <FileUploaderButton>
   */
  tabIndex: PropTypes__default.number,

  /**
   * Specify the type of underlying button
   */
  buttonKind: ButtonTypes.buttonKind,

  /**
   * Specify the types of files that this input should be able to receive
   */
  accept: PropTypes__default.arrayOf(PropTypes__default.string),

  /**
   * Specify whether file input is disabled
   */
  disabled: PropTypes__default.bool
});

_defineProperty(FileUploaderButton, "defaultProps", {
  tabIndex: 0,
  disableLabelChanges: false,
  labelText: 'Add file',
  buttonKind: 'primary',
  multiple: false,
  onChange: function onChange() {},
  onClick: function onClick() {},
  accept: [],
  disabled: false,
  role: 'button'
});

function Filename(_ref2) {
  var iconDescription = _ref2.iconDescription,
      status = _ref2.status,
      invalid = _ref2.invalid,
      other = _objectWithoutProperties(_ref2, ["iconDescription", "status", "invalid"]);

  switch (status) {
    case 'uploading':
      return /*#__PURE__*/React__default.createElement(Loading, {
        description: iconDescription,
        withOverlay: false,
        small: true
      });

    case 'edit':
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, invalid && /*#__PURE__*/React__default.createElement(Icon, {
        icon: icons.iconWarningGlyph,
        className: "".concat(prefix$7, "--file-invalid")
      }), /*#__PURE__*/React__default.createElement(Icon, _extends({
        icon: icons.iconCloseGlyph,
        className: "".concat(prefix$7, "--file-close"),
        "aria-label": iconDescription
      }, other)));

    case 'complete':
      return /*#__PURE__*/React__default.createElement(Icon, _extends({
        icon: icons.iconCheckmarkGlyph,
        className: "".concat(prefix$7, "--file-complete"),
        "aria-label": iconDescription
      }, other));

    default:
      return null;
  }
}
Filename.propTypes = {
  /**
   * Provide a description of the SVG icon to denote file upload status
   */
  iconDescription: PropTypes__default.string,

  /**
   * Status of the file upload
   */
  status: PropTypes__default.oneOf(['edit', 'complete', 'uploading']),

  /**
   * Provide a custom tabIndex value for the <Filename>
   */
  tabIndex: PropTypes__default.string
};
Filename.defaultProps = {
  iconDescription: 'Uploading file',
  status: 'uploading',
  tabIndex: '0'
};

var FileUploader = /*#__PURE__*/function (_Component2) {
  _inherits(FileUploader, _Component2);

  var _super2 = _createSuper(FileUploader);

  function FileUploader() {
    var _this3;

    _classCallCheck(this, FileUploader);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this3 = _super2.call.apply(_super2, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this3), "state", {
      filenames: []
    });

    _defineProperty(_assertThisInitialized(_this3), "nodes", []);

    _defineProperty(_assertThisInitialized(_this3), "handleChange", function (evt) {
      evt.stopPropagation();

      _this3.setState({
        filenames: _this3.state.filenames.concat(Array.prototype.map.call(evt.target.files, function (file) {
          return file.name;
        }))
      });

      if (_this3.props.onChange) {
        _this3.props.onChange(evt);
      }
    });

    _defineProperty(_assertThisInitialized(_this3), "handleClick", function (evt, index) {
      var filteredArray = _this3.state.filenames.filter(function (filename) {
        return filename !== _this3.nodes[index].innerText.trim();
      });

      _this3.setState({
        filenames: filteredArray
      });

      _this3.props.onClick(evt);
    });

    _defineProperty(_assertThisInitialized(_this3), "clearFiles", function () {
      // A clearFiles function that resets filenames and can be referenced using a ref by the parent.
      _this3.setState({
        filenames: []
      });
    });

    return _this3;
  }

  _createClass(FileUploader, [{
    key: "render",
    value: function render() {
      var _classNames2,
          _this4 = this;

      var _this$props2 = this.props,
          iconDescription = _this$props2.iconDescription,
          buttonLabel = _this$props2.buttonLabel,
          buttonKind = _this$props2.buttonKind,
          filenameStatus = _this$props2.filenameStatus,
          labelDescription = _this$props2.labelDescription,
          labelTitle = _this$props2.labelTitle,
          className = _this$props2.className,
          multiple = _this$props2.multiple,
          accept = _this$props2.accept,
          name = _this$props2.name,
          other = _objectWithoutProperties(_this$props2, ["iconDescription", "buttonLabel", "buttonKind", "filenameStatus", "labelDescription", "labelTitle", "className", "multiple", "accept", "name"]);

      var classes = classnames((_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefix$7, "--form-item"), true), _defineProperty(_classNames2, className, className), _classNames2));
      return /*#__PURE__*/React__default.createElement("div", _extends({
        className: classes
      }, other), /*#__PURE__*/React__default.createElement("strong", {
        className: "".concat(prefix$7, "--file--label")
      }, labelTitle), /*#__PURE__*/React__default.createElement("p", {
        className: "".concat(prefix$7, "--label-description")
      }, labelDescription), /*#__PURE__*/React__default.createElement(FileUploaderButton, {
        labelText: buttonLabel,
        multiple: multiple,
        buttonKind: buttonKind,
        onChange: this.handleChange,
        disableLabelChanges: true,
        accept: accept,
        name: name
      }), /*#__PURE__*/React__default.createElement("div", {
        className: "".concat(prefix$7, "--file-container")
      }, this.state.filenames.length === 0 ? null : this.state.filenames.map(function (name, index) {
        return /*#__PURE__*/React__default.createElement("span", _extends({
          key: index,
          className: "".concat(prefix$7, "--file__selected-file"),
          ref: function ref(node) {
            return _this4.nodes[index] = node;
          } // eslint-disable-line

        }, other), /*#__PURE__*/React__default.createElement("p", {
          className: "".concat(prefix$7, "--file-filename")
        }, name), /*#__PURE__*/React__default.createElement("span", {
          className: "".concat(prefix$7, "--file__state-container")
        }, /*#__PURE__*/React__default.createElement(Filename, {
          iconDescription: iconDescription,
          status: filenameStatus,
          onKeyDown: function onKeyDown(evt) {
            if (evt.which === 13 || evt.which === 32) {
              _this4.handleClick(evt, index);
            }
          },
          onClick: function onClick(evt) {
            if (filenameStatus === 'edit') {
              _this4.handleClick(evt, index);
            }
          }
        })));
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref3, state) {
      var filenameStatus = _ref3.filenameStatus;
      var prevFilenameStatus = state.prevFilenameStatus;
      return prevFilenameStatus === filenameStatus ? null : {
        filenameStatus: filenameStatus,
        prevFilenameStatus: filenameStatus
      };
    }
  }]);

  return FileUploader;
}(React.Component);

_defineProperty(FileUploader, "propTypes", {
  /**
   * Provide a description for the complete/close icon that can be read by screen readers
   */
  iconDescription: PropTypes__default.string,

  /**
   * Provide the label text to be read by screen readers when interacting with
   * the <FileUploaderButton>
   */
  buttonLabel: PropTypes__default.string,

  /**
   * Specify the type of the <FileUploaderButton>
   */
  //buttonKind: PropTypes.oneOf(buttonKinds),

  /**
   * Specify the status of the File Upload
   */
  //filenameStatus: PropTypes.oneOf(['edit', 'complete', 'uploading'])
  //  .isRequired,

  /**
   * Specify the description text of this <FileUploader>
   */
  labelDescription: PropTypes__default.string,

  /**
   * Specify the title text of this <FileUploader>
   */
  labelTitle: PropTypes__default.string,

  /**
   * Specify if the component should accept multiple files to upload
   */
  multiple: PropTypes__default.bool,

  /**
   * Provide a name for the underlying <input> node
   */
  name: PropTypes__default.string,

  /**
   * Provide an optional `onChange` hook that is called each time the input is
   * changed
   */
  onChange: PropTypes__default.func,

  /**
   * Provide an optional `onClick` hook that is called each time the button is
   * clicked
   */
  onClick: PropTypes__default.func,

  /**
   * Provide a custom className to be applied to the container node
   */
  className: PropTypes__default.string
  /**
   * Specify the types of files that this input should be able to receive
   */
  //accept: PropTypes.arrayOf(PropTypes.string),

});

_defineProperty(FileUploader, "defaultProps", {
  iconDescription: 'Provide icon description',
  filenameStatus: 'uploading',
  buttonLabel: '',
  buttonKind: 'primary',
  multiple: false,
  onClick: function onClick() {},
  accept: []
});

var prefix$8 = settings.prefix;
function FileUploaderItem(_ref) {
  var uuid = _ref.uuid,
      name = _ref.name,
      status = _ref.status,
      iconDescription = _ref.iconDescription,
      onDelete = _ref.onDelete,
      invalid = _ref.invalid,
      errorSubject = _ref.errorSubject,
      errorBody = _ref.errorBody,
      other = _objectWithoutProperties(_ref, ["uuid", "name", "status", "iconDescription", "onDelete", "invalid", "errorSubject", "errorBody"]);

  var classes = classnames("".concat(prefix$8, "--file__selected-file"), _defineProperty({}, "".concat(prefix$8, "--file__selected-file--invalid"), invalid));
  return /*#__PURE__*/React__default.createElement("span", _extends({
    className: classes
  }, other), /*#__PURE__*/React__default.createElement("p", {
    className: "".concat(prefix$8, "--file-filename")
  }, name), /*#__PURE__*/React__default.createElement("span", {
    className: "".concat(prefix$8, "--file__state-container")
  }, /*#__PURE__*/React__default.createElement(Filename, {
    iconDescription: iconDescription,
    status: status,
    invalid: invalid,
    onKeyDown: function onKeyDown(evt) {
      /*
      if (matches(evt, [keys.Enter, keys.Space])) {
        if (status === 'edit') {
          onDelete(evt, { uuid });
        }
      }
      }*/
    },
    onClick: function onClick(evt) {
      if (status === 'edit') {
        onDelete(evt, {
          uuid: uuid
        });
      }
    }
  })), invalid && errorSubject && /*#__PURE__*/React__default.createElement("div", {
    className: "".concat(prefix$8, "--form-requirement")
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "".concat(prefix$8, "--form-requirement__title")
  }, errorSubject), errorBody && /*#__PURE__*/React__default.createElement("p", {
    className: "".concat(prefix$8, "--form-requirement__supplement")
  }, errorBody)));
}
FileUploaderItem.propTypes = {
  /**
   * Unique identifier for the file object
   */
  uuid: PropTypes__default.string.isRequired,

  /**
   * Name of the uploaded file
   */
  name: PropTypes__default.string,

  /**
   * Status of the file upload
   */
  status: PropTypes__default.oneOf(['uploading', 'edit', 'complete']),

  /**
   * Description of status icon (displayed in native tooltip)
   */
  iconDescription: PropTypes__default.string,

  /**
   * Specify if the currently uploaded file is invalid
   */
  invalid: PropTypes__default.bool,

  /**
   * Event handler that is called after removing a file from the file uploader
   * The event handler signature looks like `onDelete(evt, { uuid })`
   */
  onDelete: PropTypes__default.func,

  /**
   * Error message subject for an invalid file upload
   */
  errorSubject: PropTypes__default.string,

  /**
   * Error message body for an invalid file upload
   */
  errorBody: PropTypes__default.string
};
FileUploaderItem.defaultProps = {
  uuid: uid(),
  status: 'uploading',
  onDelete: function onDelete() {}
};

var prefix$9 = settings.prefix;
function FileUploaderDropContainer(props) {
  var _classNames2;

  var inputRef = React.useRef();

  var accept = props.accept,
      className = props.className,
      id = props.id,
      disabled = props.disabled,
      labelText = props.labelText,
      multiple = props.multiple,
      name = props.name,
      onAddFiles = props.onAddFiles,
      role = props.role,
      tabIndex = props.tabIndex,
      other = _objectWithoutProperties(props, ["accept", "className", "id", "disabled", "labelText", "multiple", "name", "onAddFiles", "role", "tabIndex"]);

  var uid$1 = React.useRef(uid());

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isActive = _useState2[0],
      setActive = _useState2[1];

  var labelClasses = classnames("".concat(prefix$9, "--file-browse-btn"), _defineProperty({}, "".concat(prefix$9, "--file-browse-btn--disabled"), disabled));
  var dropareaClasses = classnames("".concat(prefix$9, "--file__drop-container"), (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefix$9, "--file__drop-container--drag-over"), isActive), _defineProperty(_classNames2, className, className), _classNames2));
  /**
   * Filters the array of added files based on file type restrictions
   * @param {Event} evt - Event object, used to get the list of files added
   */

  var validateFiles = function validateFiles(evt) {
    if (evt.type === 'drop') {
      var transferredFiles = _toConsumableArray(evt.dataTransfer.files);

      if (!accept.length) {
        return transferredFiles;
      }

      var acceptedTypes = new Set(accept);
      return transferredFiles.filter(function (_ref) {
        var name = _ref.name,
            _ref$type = _ref.type,
            mimeType = _ref$type === void 0 ? '' : _ref$type;
        var fileExtensionRegExp = new RegExp(/\.[0-9a-z]+$/, 'i');
        var hasFileExtension = fileExtensionRegExp.test(name);

        if (!hasFileExtension) {
          return false;
        }

        var _name$match = name.match(fileExtensionRegExp),
            _name$match2 = _slicedToArray(_name$match, 1),
            fileExtension = _name$match2[0];

        return acceptedTypes.has(mimeType) || acceptedTypes.has(fileExtension);
      });
    }

    return _toConsumableArray(evt.target.files);
  };

  var handleChange = function handleChange(evt) {
    var addedFiles = validateFiles(evt);
    return onAddFiles(evt, {
      addedFiles: addedFiles
    });
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: "".concat(prefix$9, "--file"),
    onDragOver: function onDragOver(evt) {
      evt.stopPropagation();
      evt.preventDefault();

      if (disabled) {
        return;
      }

      setActive(true);
      evt.dataTransfer.dropEffect = 'copy';
    },
    onDragLeave: function onDragLeave(evt) {
      evt.stopPropagation();
      evt.preventDefault();

      if (disabled) {
        return;
      }

      setActive(false);
      evt.dataTransfer.dropEffect = 'move';
    },
    onDrop: function onDrop(evt) {
      evt.stopPropagation();
      evt.preventDefault();

      if (disabled) {
        return;
      }

      setActive(false);
      handleChange(evt);
    }
  }, /*#__PURE__*/React__default.createElement("label", _extends({
    className: labelClasses,
    htmlFor: id || uid$1.current,
    tabIndex: tabIndex || 0,
    onKeyDown: function onKeyDown(evt) {
      /*if (matches(evt, [keys.Enter, keys.Space])) {
        inputRef.current.click();
      }*/
    }
  }, other), /*#__PURE__*/React__default.createElement("div", {
    className: dropareaClasses,
    role: role || 'button'
  }, labelText, /*#__PURE__*/React__default.createElement("input", {
    type: "file",
    id: id || uid$1.current,
    className: "".concat(prefix$9, "--file-input"),
    ref: inputRef,
    tabIndex: "-1",
    disabled: disabled,
    accept: accept,
    name: name,
    multiple: multiple,
    onChange: handleChange,
    onClick: function onClick(evt) {
      evt.target.value = null;
    }
  }))));
}
FileUploaderDropContainer.propTypes = {
  /**
   * Provide a custom className to be applied to the container node
   */
  className: PropTypes__default.string,

  /**
   * Provide a unique id for the underlying <input> node
   */
  id: PropTypes__default.string,

  /**
   * Provide the label text to be read by screen readers when interacting with
   * this control
   */
  labelText: PropTypes__default.string.isRequired,

  /**
   * Specify if the component should accept multiple files to upload
   */
  multiple: PropTypes__default.bool,

  /**
   * Provide a name for the underlying <input> node
   */
  name: PropTypes__default.string,

  /**
   * Provide an accessibility role for the <FileUploaderButton>
   */
  role: PropTypes__default.string,

  /**
   * Provide a custom tabIndex value for the <FileUploaderButton>
   */
  tabIndex: PropTypes__default.number,

  /**
   * Specify whether file input is disabled
   */
  disabled: PropTypes__default.bool,

  /**
   * Specify the types of files that this input should be able to receive
   */
  accept: PropTypes__default.arrayOf(PropTypes__default.string),

  /**
   * Event handler that is called after files are added to the uploader
   * The event handler signature looks like `onAddFiles(evt, { addedFiles })`
   */
  onAddFiles: PropTypes__default.func
};
FileUploaderDropContainer.defaultProps = {
  tabIndex: 0,
  labelText: 'Add file',
  multiple: false,
  onAddFiles: function onAddFiles() {},
  accept: []
};

var sdgIcon = /*#__PURE__*/React__default.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "46",
  height: "46",
  viewBox: "0 0 46 46",
  className: "wfp--footer__sdg"
}, /*#__PURE__*/React__default.createElement("g", {
  fill: "none"
}, /*#__PURE__*/React__default.createElement("path", {
  fill: "#56C02B",
  d: "M12.3125,16.5815 C12.8725,15.6305 13.5505,14.7585 14.3295,13.9865 L7.7155,6.7355 C6.0525,8.3255 4.6335,10.1685 3.5175,12.2005 L12.3125,16.5815 Z"
}), /*#__PURE__*/React__default.createElement("path", {
  fill: "#DDA63A",
  d: "M28.5244,11.4585 C29.5254,11.9175 30.4574,12.5025 31.2964,13.1965 L37.9284,5.9555 C36.1824,4.4495 34.2024,3.2065 32.0514,2.2895 L28.5244,11.4585 Z"
}), /*#__PURE__*/React__default.createElement("path", {
  fill: "#C5192D",
  d: "M43.7119,13.6387 L34.9219,18.0207 C35.3419,18.9997 35.6409,20.0407 35.8019,21.1257 L45.5789,20.2027 C45.2909,17.8887 44.6499,15.6807 43.7119,13.6387"
}), /*#__PURE__*/React__default.createElement("path", {
  fill: "#4C9F38",
  d: "M34.291,16.7505 L43.08,12.3695 C41.991,10.3465 40.603,8.5085 38.973,6.9165 L32.341,14.1555 C33.097,14.9315 33.754,15.8025 34.291,16.7505"
}), /*#__PURE__*/React__default.createElement("path", {
  fill: "#3F7E44",
  d: "M10.5664,22.9961 C10.5664,22.7981 10.5724,22.6001 10.5814,22.4041 L0.8014,21.5291 C0.7704,22.0141 0.7524,22.5021 0.7524,22.9961 C0.7524,24.8721 0.9854,26.6941 1.4184,28.4351 L10.8634,25.7261 C10.6704,24.8461 10.5664,23.9331 10.5664,22.9961"
}), /*#__PURE__*/React__default.createElement("path", {
  fill: "#FCC30B",
  d: "M33.0605,31.0342 C32.3655,31.8802 31.5625,32.6352 30.6755,33.2772 L35.8385,41.6382 C37.7545,40.3402 39.4615,38.7542 40.8955,36.9422 L33.0605,31.0342 Z"
}), /*#__PURE__*/React__default.createElement("path", {
  fill: "#FF3A21",
  d: "M35.9385,22.9961 C35.9385,23.9221 35.8385,24.8251 35.6475,25.6941 L45.0915,28.4081 C45.5225,26.6741 45.7515,24.8611 45.7515,22.9961 C45.7515,22.5331 45.7375,22.0731 45.7095,21.6151 L35.9295,22.5381 C35.9355,22.6921 35.9385,22.8431 35.9385,22.9961"
}), /*#__PURE__*/React__default.createElement("path", {
  fill: "#FD9D24",
  d: "M13.6025,31.2207 L5.7865,37.1617 C7.2395,38.9517 8.9605,40.5127 10.8905,41.7857 L16.0525,33.4357 C15.1435,32.8057 14.3195,32.0607 13.6025,31.2207"
}), /*#__PURE__*/React__default.createElement("path", {
  fill: "#0A97D9",
  d: "M10.7246,20.9932 C10.8996,19.8892 11.2196,18.8322 11.6616,17.8432 L2.8746,13.4662 C1.9046,15.5322 1.2386,17.7682 0.9356,20.1152 L10.7246,20.9932 Z"
}), /*#__PURE__*/React__default.createElement("path", {
  fill: "#A21942",
  d: "M34.6377,42.3945 L29.4817,34.0445 C28.5447,34.5745 27.5357,34.9895 26.4727,35.2675 L28.2927,44.9255 C30.5567,44.4065 32.6917,43.5415 34.6377,42.3945"
}), /*#__PURE__*/React__default.createElement("path", {
  fill: "#26BDE2",
  d: "M35.2715,27.0615 C34.9295,28.0665 34.4675,29.0135 33.8985,29.8885 L41.7405,35.8035 C43.0135,33.9725 44.0205,31.9445 44.7085,29.7735 L35.2715,27.0615 Z"
}), /*#__PURE__*/React__default.createElement("path", {
  fill: "#FD6925",
  d: "M25.082,35.5498 C24.485,35.6358 23.874,35.6828 23.252,35.6828 C22.753,35.6828 22.26,35.6528 21.775,35.5958 L19.957,45.2538 C21.033,45.4118 22.133,45.4958 23.252,45.4958 C24.494,45.4958 25.713,45.3938 26.899,45.1988 L25.082,35.5498 Z"
}), /*#__PURE__*/React__default.createElement("path", {
  fill: "#E5243B",
  d: "M24.0635,10.335 C25.1535,10.405 26.2065,10.612 27.2035,10.941 L30.7305,1.774 C28.6305,1.033 26.3925,0.594 24.0635,0.512 L24.0635,10.335 Z"
}), /*#__PURE__*/React__default.createElement("path", {
  fill: "#DD1367",
  d: "M20.3779,35.3545 C19.2769,35.0975 18.2319,34.6985 17.2639,34.1755 L12.0979,42.5325 C14.0849,43.6685 16.2579,44.5115 18.5609,45.0015 L20.3779,35.3545 Z"
}), /*#__PURE__*/React__default.createElement("path", {
  fill: "#19486A",
  d: "M19.4395,10.896 C20.4585,10.574 21.5335,10.377 22.6445,10.326 L22.6445,0.504 C20.2835,0.567 18.0155,0.997 15.8875,1.735 L19.4395,10.896 Z"
}), /*#__PURE__*/React__default.createElement("path", {
  fill: "#BF8B2E",
  d: "M12.7422,30.0928 C12.1192,29.1718 11.6112,28.1638 11.2462,27.0928 L1.8062,29.8008 C2.5212,32.0528 3.5812,34.1508 4.9252,36.0328 L12.7422,30.0928 Z"
}), /*#__PURE__*/React__default.createElement("path", {
  fill: "#00689D",
  d: "M15.3916,13.0454 C16.2216,12.3884 17.1346,11.8344 18.1126,11.3994 L14.5636,2.2424 C12.4496,3.1304 10.5006,4.3324 8.7746,5.7884 L15.3916,13.0454 Z"
}))); //import logoExtended from '../../../assets/logos/extended/en/wfp-logo-extended-black-en.svg';
//import logoVertical from '../../../assets/logos/vertical/en/wfp-logo-vertical-black-en.svg';

/** A Footer is a section at the bottom of each page. It typically contains basic site information, copyright data or links to related pages. */

var Footer = function Footer(_ref) {
  var buttonText = _ref.buttonText,
      className = _ref.className,
      children = _ref.children,
      external = _ref.external,
      labelOne = _ref.labelOne,
      linkTextOne = _ref.linkTextOne,
      linkHrefOne = _ref.linkHrefOne,
      labelTwo = _ref.labelTwo,
      linkTextTwo = _ref.linkTextTwo,
      linkHrefTwo = _ref.linkHrefTwo,
      logo = _ref.logo,
      logoExtended = _ref.logoExtended,
      metaContent = _ref.metaContent,
      metaLinks = _ref.metaLinks,
      secondary = _ref.secondary,
      pageWidth = _ref.pageWidth,
      other = _objectWithoutProperties(_ref, ["buttonText", "className", "children", "external", "labelOne", "linkTextOne", "linkHrefOne", "labelTwo", "linkTextTwo", "linkHrefTwo", "logo", "logoExtended", "metaContent", "metaLinks", "secondary", "pageWidth"]);

  var classNames = classnames('wfp--footer', {
    'wfp--footer--external': external
  }, className);
  var footer = /*#__PURE__*/React__default.createElement("footer", {
    className: classNames
  }, /*#__PURE__*/React__default.createElement(Wrapper, {
    pageWidth: pageWidth
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "wfp--footer__content"
  }, children ? /*#__PURE__*/React__default.createElement("div", {
    className: "wfp--footer__info"
  }, children) : /*#__PURE__*/React__default.createElement("div", {
    className: "wfp--footer__info"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "wfp--footer__info__item"
  }, /*#__PURE__*/React__default.createElement("p", {
    className: "wfp--footer__label"
  }, labelOne), /*#__PURE__*/React__default.createElement("ul", {
    className: "wfp--footer__list"
  }, /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement(Link, {
    href: linkHrefOne
  }, linkTextOne)))), /*#__PURE__*/React__default.createElement("div", {
    className: "wfp--footer__info__item"
  }, /*#__PURE__*/React__default.createElement("p", {
    className: "wfp--footer__label"
  }, labelTwo), /*#__PURE__*/React__default.createElement("ul", {
    className: "wfp--footer__list"
  }, /*#__PURE__*/React__default.createElement("li", null, /*#__PURE__*/React__default.createElement(Link, {
    href: linkHrefTwo
  }, linkTextTwo))))), /*#__PURE__*/React__default.createElement("div", {
    className: "wfp--footer__cta"
  }, logoExtended ? /*#__PURE__*/React__default.createElement("img", {
    className: "wfp--footer__cta-logo",
    src: logoExtended,
    alt: "World Food Programme Logo"
  }) : /*#__PURE__*/React__default.createElement(Icon, {
    icon: icons.iconWfpLogoExtendedEn,
    description: "WFP",
    className: "wfp--footer__cta-logo"
  }), logo ? /*#__PURE__*/React__default.createElement("img", {
    className: "wfp--footer__cta-logo-small",
    src: logo,
    alt: "World Food Programme Logo"
  }) : /*#__PURE__*/React__default.createElement(Icon, {
    icon: icons.iconWfpLogoVerticalEn,
    description: "WFP",
    className: "wfp--footer__cta-logo-small"
  }), sdgIcon, secondary && /*#__PURE__*/React__default.createElement("div", {
    className: "wfp--footer__secondary"
  }, secondary)))), /*#__PURE__*/React__default.createElement(Wrapper, {
    className: "wfp--footer__meta",
    pageWidth: pageWidth
  }, metaContent && /*#__PURE__*/React__default.createElement("div", {
    className: "wfp--footer__meta__content"
  }, metaContent), metaLinks && /*#__PURE__*/React__default.createElement("div", {
    className: "wfp--footer__meta__links"
  }, metaLinks)));
  return footer;
};

Footer.propTypes = {
  /**
   The content of the footer containing relevant links
  */
  children: PropTypes__default.node,

  /**
   Additional className which will be added
  */
  className: PropTypes__default.string,

  /** 
   When external is set to true, the logo will be left and description will right on the footer. It is false by default.
  */
  external: PropTypes__default.bool,

  /** 
   Meta content, usually the copyright notice
  */
  metaContent: PropTypes__default.node,

  /**
   Optional WFP logo for mobile devices, can be used if the Logo should be provided by the CDN
  */
  logo: PropTypes__default.node,

  /**
   Optional WFP logo for desktop devices, can be used if the Logo should be provided by the CDN
  */
  logoExtended: PropTypes__default.node,

  /**
   * Specify the max-width on desktop devices (same as \`Wrapper\` component)
   */
  pageWidth: PropTypes__default.oneOf(['sm', 'md', 'lg', 'full']),

  /**
   The WFP logo
  */
  subTitle: PropTypes__default.node
  /*
  labelOne: PropTypes.string,
  linkTextOne: PropTypes.string,
  linkHrefOne: PropTypes.string,
  labelTwo: PropTypes.string,
  linkTextTwo: PropTypes.string,
  linkHrefTwo: PropTypes.string,*/

};

var prefix$a = settings.prefix;
/** A form is a group of related input controls that allows users to provide data or configure options. */

var Form = function Form(_ref) {
  var className = _ref.className,
      children = _ref.children,
      longForm = _ref.longForm,
      other = _objectWithoutProperties(_ref, ["className", "children", "longForm"]);

  var classNames = classnames("".concat(prefix$a, "--form"), {
    'wfp--form-long': longForm === true
  }, className);
  return /*#__PURE__*/React__default.createElement("form", _extends({
    className: classNames
  }, other), ' ', children, ' ');
};

Form.propTypes = {
  /**
   * Provide children to be rendered inside of the <form> element
   */
  children: PropTypes__default.node,

  /**
   * Provide a custom className to be applied on the containing <form> node
   */
  className: PropTypes__default.string,

  /**
   * Default margin is added to each form input
   */
  longForm: PropTypes__default.bool
};
Form.defaultProps = {
  longForm: true
};

var FormControls = /*#__PURE__*/function (_React$Component) {
  _inherits(FormControls, _React$Component);

  var _super = _createSuper(FormControls);

  function FormControls() {
    _classCallCheck(this, FormControls);

    return _super.apply(this, arguments);
  }

  _createClass(FormControls, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          onNextClick = _this$props.onNextClick,
          nextDisabled = _this$props.nextDisabled,
          nextIcon = _this$props.nextIcon,
          nextHidden = _this$props.nextHidden,
          nextText = _this$props.nextText,
          onPreviousClick = _this$props.onPreviousClick,
          previousDisabled = _this$props.previousDisabled,
          previousIcon = _this$props.previousIcon,
          previousHidden = _this$props.previousHidden,
          previousText = _this$props.previousText,
          onSubmitClick = _this$props.onSubmitClick,
          submitDisabled = _this$props.submitDisabled,
          submitIcon = _this$props.submitIcon,
          submitHidden = _this$props.submitHidden,
          submitText = _this$props.submitText;
      var formControlsClasses = classnames('wfp--form-controls', className);
      return /*#__PURE__*/React__default.createElement("div", {
        className: formControlsClasses
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "wfp--form-controls__steps"
      }, !previousHidden && /*#__PURE__*/React__default.createElement(Button, {
        disabled: previousDisabled,
        kind: "secondary",
        className: "wfp--form-controls__prev",
        icon: previousIcon,
        onClick: onPreviousClick
      }, previousText)), /*#__PURE__*/React__default.createElement("div", null, !nextHidden && /*#__PURE__*/React__default.createElement(Button, {
        disabled: nextDisabled,
        kind: "secondary",
        className: "wfp--form-controls__next",
        icon: nextIcon,
        type: "submit",
        onClick: onNextClick
      }, nextText), !submitHidden && /*#__PURE__*/React__default.createElement(Button, {
        disabled: submitDisabled,
        type: "submit",
        className: "next",
        icon: submitIcon,
        onClick: onSubmitClick
      }, submitText)));
    }
  }]);

  return FormControls;
}(React__default.Component);

_defineProperty(FormControls, "propTypes", {
  /**
   * Specify the text to be read by screen-readers when visiting the <Tabs>
   * component
   */
  className: PropTypes__default.string,
  onNextClick: PropTypes__default.func,
  nextDisabled: PropTypes__default.bool,
  nextIcon: PropTypes__default.object,
  nextHidden: PropTypes__default.bool,
  nextText: PropTypes__default.node,
  onPreviousClick: PropTypes__default.func,
  previousDisabled: PropTypes__default.bool,
  previousIcon: PropTypes__default.object,
  previousHidden: PropTypes__default.bool,
  previousText: PropTypes__default.node,
  onSubmitClick: PropTypes__default.func,
  submitDisabled: PropTypes__default.bool,
  submitIcon: PropTypes__default.object,
  submitHidden: PropTypes__default.bool,
  submitText: PropTypes__default.node
});

_defineProperty(FormControls, "defaultProps", {
  nextIcon: icons.iconArrowRight,
  nextText: 'Next',
  previousIcon: icons.iconArrowLeft,
  previousText: 'Previous',
  submitText: 'Submit'
});

var FormError = function FormError(_ref) {
  var className = _ref.className,
      message = _ref.message,
      submitFailed = _ref.submitFailed;

  if (message && submitFailed === true) {
    return /*#__PURE__*/React__default.createElement(Blockquote, {
      className: className,
      warning: true,
      withIcon: false
    }, /*#__PURE__*/React__default.createElement("h4", {
      className: "wfp--form-error__title"
    }, message.generic), message.fields && /*#__PURE__*/React__default.createElement("ul", {
      className: "wfp--form-error__list"
    }, message.fields.map(function (field, i) {
      return /*#__PURE__*/React__default.createElement("li", {
        key: i
      }, /*#__PURE__*/React__default.createElement("label", {
        htmlFor: field.key
      }, field.message));
    })));
  } else {
    return null;
  }
};

FormError.propTypes = {
  children: PropTypes__default.node,
  className: PropTypes__default.string,
  info: PropTypes__default.string
};

/** A FormGroup element is used to group several controls as well as labels  within a web form. It uses  `<fieldset>` */

var FormGroup = function FormGroup(_ref) {
  var _classnames;

  var align = _ref.align,
      breakpoint = _ref.breakpoint,
      legendText = _ref.legendText,
      inline = _ref.inline,
      invalid = _ref.invalid,
      children = _ref.children,
      className = _ref.className,
      inputSpacing = _ref.inputSpacing,
      message = _ref.message,
      messageText = _ref.messageText,
      other = _objectWithoutProperties(_ref, ["align", "breakpoint", "legendText", "inline", "invalid", "children", "className", "inputSpacing", "message", "messageText"]);

  var classNamesLegend = classnames('wfp--form-group__title', className);
  var classNamesFieldset = classnames('wfp--fieldset', (_classnames = {
    'wfp--fieldset__inline': inline
  }, _defineProperty(_classnames, "wfp--fieldset__align-".concat(align), align), _defineProperty(_classnames, "wfp--fieldset__breakpoint-".concat(breakpoint), breakpoint), _defineProperty(_classnames, "wfp--fieldset__input-spacing-".concat(inputSpacing), inputSpacing), _classnames), className);
  return /*#__PURE__*/React__default.createElement("div", _extends({}, invalid && {
    'data-invalid': ''
  }, {
    className: classNamesFieldset
  }, other), /*#__PURE__*/React__default.createElement("legend", {
    className: classNamesLegend
  }, legendText), /*#__PURE__*/React__default.createElement("div", {
    className: "wfp--fieldset__content"
  }, children), message ? /*#__PURE__*/React__default.createElement("div", {
    className: "wfp--form__requirements"
  }, messageText) : null);
};

FormGroup.propTypes = {
  /**
   * Specify the contained form elements
   */
  children: PropTypes__default.node,

  /**
   * Specify a breakpoint to show containing inputs vertically on mobile devices
   */
  breakpoint: PropTypes__default.oneOf(['none', 'sm', 'md', 'lg']),

  /**
   * Specify a title for the `FormGroup`
   */
  legendText: PropTypes__default.string,

  /**
   * Specify an optional className to be applied to the wrapper node
   */
  className: PropTypes__default.string,

  /**
   * Specify an invalid attribute for the `fieldset`
   */
  invalid: PropTypes__default.bool,

  /**
   * Specify if a message is shown for the `fieldset`
   */
  message: PropTypes__default.bool,

  /**
   * Specify a message for the `fieldset`
   */
  messageText: PropTypes__default.string,

  /**
   * Specify a message for the `fieldset`
   */
  align: PropTypes__default.oneOf(['vertical', 'horizontal']),

  /**
   * Specify the spacing between horizontaly aligned inputs
   */
  inputSpacing: PropTypes__default.oneOf(['none', 'md', 'lg'])
};
FormGroup.defaultProps = {
  align: 'vertical',
  invalid: false,
  inputSpacing: 'lg',
  breakpoint: 'md',
  message: false,
  messageText: ''
};

var prefix$b = settings.prefix;
var tooltipStyle = {
  duration: 100,
  animation: 'fade',
  theme: 'light',
  arrow: true
};
var tooltipStyleDark = {
  duration: 100,
  animation: 'fade',
  theme: 'dark',
  arrow: true
};
/** Tooltips display additional information upon click, hover, or focus. The information should be contextual, useful, and nonessential. */

var Tooltip = function Tooltip(_ref) {
  var _classnames;

  var className = _ref.className,
      dark = _ref.dark,
      children = _ref.children,
      content = _ref.content,
      _ref$trigger = _ref.trigger,
      trigger = _ref$trigger === void 0 ? 'hover' : _ref$trigger,
      modifiers = _ref.modifiers,
      _ref$placement = _ref.placement,
      placement = _ref$placement === void 0 ? 'top' : _ref$placement,
      utlis = _ref.utlis,
      useWrapper = _ref.useWrapper;
  var referenceElement = React.useRef(null);
  var popperElement = React.useRef(null);

  var _useState = React.useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      arrowElement = _useState2[0],
      setArrowElement = _useState2[1];

  var _useState3 = React.useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      isShown = _useState4[0],
      setIsShown = _useState4[1];

  var handleInsideClick = function handleInsideClick() {
    setIsShown(true);
    document.addEventListener('mousedown', handleClickOutside);
  };

  var handleClickOutside = function handleClickOutside(event) {
    if (popperElement && !popperElement.current.contains(event.target)) {
      setIsShown(false);
      document.removeEventListener('mousedown', handleClickOutside, false);
    }
  };

  var _usePopper = reactPopper.usePopper(referenceElement.current, popperElement.current, _objectSpread2({
    placement: placement,
    modifiers: [_objectSpread2({
      name: 'offset',
      options: {
        offset: [0, 10]
      }
    }, modifiers), {
      name: 'arrow',
      options: {
        element: arrowElement,
        padding: 8
      }
    }]
  }, utlis)),
      styles = _usePopper.styles,
      attributes = _usePopper.attributes;

  var classNames = classnames(className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefix$b, "--tooltip"), true), _defineProperty(_classnames, "".concat(prefix$b, "--tooltip--visible"), isShown), _defineProperty(_classnames, "".concat(prefix$b, "--tooltip--dark"), dark), _classnames));
  var actions = trigger === 'hover' ? {
    onMouseEnter: function onMouseEnter() {
      return setIsShown(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setIsShown(false);
    }
  } : {
    onClick: function onClick() {
      return handleInsideClick();
    }
  };
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, useWrapper === true ? /*#__PURE__*/React__default.createElement("span", _extends({
    type: "button",
    ref: referenceElement
  }, actions), children) : /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.cloneElement(children, _objectSpread2({
    ref: referenceElement
  }, actions))), /*#__PURE__*/React__default.createElement("div", _extends({
    ref: popperElement,
    style: styles.popper
  }, attributes.popper, {
    className: classNames
  }), content, /*#__PURE__*/React__default.createElement("div", {
    ref: setArrowElement,
    style: styles.arrow,
    className: "".concat(prefix$b, "--tooltip__arrow")
  })));
};

Tooltip.propTypes = {
  /**
   * Provide the content for the Link
   */
  children: PropTypes__default.node,

  /**
   * Provide a custom className to be applied to the containing <a> node
   */
  content: PropTypes__default.node,

  /**
   * Provide a dark styled tooltip
   */
  dark: PropTypes__default.bool,

  /**
   * Provide the placement of the tooltip
   */
  placement: PropTypes__default.oneOf(['top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end']),

  /**
   * Provide the placement of the tooltip
   */
  trigger: PropTypes__default.oneOf(['click', 'hover']),

  /**
   * Provide additional modifiers as an object https://popper.js.org/docs/v2/modifiers/
   */
  modifiers: PropTypes__default.object,

  /**
   * Provide additional utils as an object https://popper.js.org/docs/v2/utils/
   */
  utils: PropTypes__default.object,

  /**
   * Use a wrapper html element aroud the trigger. Useful for components without `forwardRef` support.
   */
  useWrapper: PropTypes__default.bool
};

var prefix$c = settings.prefix;
/** FormHint allows you to add a longer explanation to an input element. */

var FormHint = function FormHint(_ref) {
  var className = _ref.className,
      children = _ref.children,
      description = _ref.description,
      icon = _ref.icon,
      other = _objectWithoutProperties(_ref, ["className", "children", "description", "icon"]);

  var formHintClasses = classnames("".concat(prefix$c, "--form-hint"), className);
  return /*#__PURE__*/React__default.createElement(Tooltip, {
    content: children
  }, /*#__PURE__*/React__default.createElement("div", {
    className: formHintClasses
  }, /*#__PURE__*/React__default.createElement(Icon, {
    icon: icons.iconInfoSolid,
    width: "15",
    height: "15",
    description: children
  })));
};

FormHint.propTypes = {
  /**
   * Specify an optional className to be applied to the wrapper node
   */
  className: PropTypes__default.string,

  /**
   * The tooltips content can be a string or an component
   */
  children: PropTypes__default.node,

  /**
   * Specify a custom icon for the hint
   */
  icon: PropTypes__default.object
};
FormHint.defaultProps = {
  icon: icons.iconInfoSolid
};

/** Form Label can be used whenever it is needed to show a label detached from a regular input. */

var FormLabel = function FormLabel(_ref) {
  var className = _ref.className,
      children = _ref.children,
      id = _ref.id,
      other = _objectWithoutProperties(_ref, ["className", "children", "id"]);

  var classNames = classnames('wfp--label', className);
  return /*#__PURE__*/React__default.createElement("label", _extends({
    htmlFor: id,
    className: classNames
  }, other), children);
};

FormLabel.propTypes = {
  /**
   * The content of the label
   */
  children: PropTypes__default.node,

  /**
   * Additional `class` attributes
   */
  className: PropTypes__default.string,

  /**
   * The ID of the related input which will be used as `htmlFor`
   */
  id: PropTypes__default.string
};

var prefix$d = settings.prefix;
/** A Module is identifiable as a single, contained unit. */

var Module = function Module(_ref) {
  var _classnames;

  var dark = _ref.dark,
      light = _ref.light,
      centered = _ref.centered,
      children = _ref.children,
      className = _ref.className,
      margin = _ref.margin,
      fullHeight = _ref.fullHeight,
      noMargin = _ref.noMargin,
      withHover = _ref.withHover,
      other = _objectWithoutProperties(_ref, ["dark", "light", "centered", "children", "className", "margin", "fullHeight", "noMargin", "withHover"]);

  var wrapperClasses = classnames((_classnames = {}, _defineProperty(_classnames, "".concat(prefix$d, "--module--dark"), dark), _defineProperty(_classnames, "".concat(prefix$d, "--module--no-margin"), noMargin), _defineProperty(_classnames, "".concat(prefix$d, "--module--full-height"), fullHeight), _defineProperty(_classnames, "".concat(prefix$d, "--module--margin-x"), margin === 'xs'), _defineProperty(_classnames, "".concat(prefix$d, "--module--margin-md"), margin === 'md'), _defineProperty(_classnames, "".concat(prefix$d, "--module--margin-lg"), margin === 'lg'), _defineProperty(_classnames, "".concat(prefix$d, "--module--light"), light), _defineProperty(_classnames, "".concat(prefix$d, "--module--with-hover"), withHover), _classnames), className, ["".concat(prefix$d, "--module")]);
  return /*#__PURE__*/React__default.createElement("div", _extends({
    className: wrapperClasses
  }, other), /*#__PURE__*/React__default.createElement("div", {
    className: "".concat(prefix$d, "--module__inner")
  }, children));
};

Module.propTypes = {
  /**
   * * Specify the content of the `Module`, usually a `ModuleHeader` `ModuleBody` and `ModuleFooter`component.
   */
  children: PropTypes__default.node,

  /**
   * The CSS class name for the slider.
   */
  className: PropTypes__default.string,

  /**
   * Disables the default margin
   */
  noMargin: PropTypes__default.bool,

  /**
   * Use 100% height of parent container
   */
  fullHeight: PropTypes__default.bool,

  /**
   * Light appearance (for white backgrounds)
   */
  light: PropTypes__default.bool,

  /**
   * Dark appearance
   */
  dark: PropTypes__default.bool,

  /**
   * Additional hover styling
   */
  withHover: PropTypes__default.bool
};

var ModuleBody = function ModuleBody(_ref) {
  var children = _ref.children,
      className = _ref.className,
      centered = _ref.centered,
      noPadding = _ref.noPadding,
      other = _objectWithoutProperties(_ref, ["children", "className", "centered", "noPadding"]);

  var wrapperClasses = classnames('wfp--module__content', className, {
    'wfp--module__content--centered': centered,
    'wfp--module__content--no-padding': noPadding
  });
  return /*#__PURE__*/React__default.createElement("div", _extends({
    className: wrapperClasses
  }, other), children);
};

ModuleBody.propTypes = {
  /**
   * Specify the content of the `ModuleBody`
   */
  children: PropTypes__default.node,

  /**
   * Specify wheater the content should be centered.
   */
  centered: PropTypes__default.bool,

  /**
   * Specify wheater the body should have no padding.
   */
  noPadding: PropTypes__default.bool,

  /**
   * The CSS class name for the slider.
   */
  className: PropTypes__default.string
};
ModuleBody.defaultProps = {};

var ModuleHeader = function ModuleHeader(_ref) {
  var filter = _ref.filter,
      children = _ref.children,
      className = _ref.className,
      other = _objectWithoutProperties(_ref, ["filter", "children", "className"]);

  var wrapperClasses = classnames('wfp--module__header', className);
  return /*#__PURE__*/React__default.createElement("div", _extends({
    className: wrapperClasses
  }, other), /*#__PURE__*/React__default.createElement("h1", {
    className: "wfp--module__title"
  }, children), filter && /*#__PURE__*/React__default.createElement("div", {
    className: "wfp--module__filter"
  }, filter));
};

ModuleHeader.propTypes = {
  /**
   * Specify the content of the `ModuleHeaders`
   */
  children: PropTypes__default.node,

  /**
   * The CSS class name for the slider.
   */
  className: PropTypes__default.string
};

var ModuleFooter = function ModuleFooter(_ref) {
  var centered = _ref.centered,
      children = _ref.children,
      className = _ref.className,
      other = _objectWithoutProperties(_ref, ["centered", "children", "className"]);

  var wrapperClasses = classnames('wfp--module__footer', className);
  return /*#__PURE__*/React__default.createElement("div", _extends({
    className: wrapperClasses
  }, other), children);
};

/** The FormWizard is a wrapper for creating Wizard forms. */

var FormWizard = function FormWizard(_ref) {
  var className = _ref.className,
      children = _ref.children,
      formHeader = _ref.formHeader,
      formControls = _ref.formControls,
      sidebar = _ref.sidebar,
      stickySidebar = _ref.stickySidebar;
  var classes = {
    formControls: classnames('wfp--form-wizard', {
      'wfp--form-wizard--sticky': stickySidebar
    }, className)
  };
  return /*#__PURE__*/React__default.createElement("div", {
    className: classes.formControls
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "wfp--form-wizard__sidebar"
  }, sidebar), /*#__PURE__*/React__default.createElement(Module, {
    className: "wfp--form-wizard__content",
    noMargin: true
  }, formHeader && /*#__PURE__*/React__default.createElement(ModuleHeader, null, formHeader), /*#__PURE__*/React__default.createElement(ModuleBody, null, children), formControls && /*#__PURE__*/React__default.createElement(ModuleFooter, null, formControls)));
};

FormWizard.propTypes = {
  /**
   * Specify a custom css class
   * which is added to the container
   */
  className: PropTypes__default.string,

  /**
   * Specify the custom
   * main content component
   */
  children: PropTypes__default.node.isRequired,

  /**
   * Specify the custom
   * sidebar component
   */
  sidebar: PropTypes__default.node.isRequired,

  /**
   * Sticky sidebar
   */
  stickySidebar: PropTypes__default.bool
};
FormWizard.defaultProps = {};

/** The InfoBar shows very important information on top of the page. */

var InfoBar = function InfoBar(_ref) {
  var children = _ref.children,
      className = _ref.className,
      id = _ref.id,
      pageWidth = _ref.pageWidth;
  var wrapperClasses = classnames('wfp--info-bar', className);
  return /*#__PURE__*/React__default.createElement("div", {
    id: id,
    className: wrapperClasses
  }, /*#__PURE__*/React__default.createElement(Wrapper, {
    pageWidth: pageWidth
  }, children));
};

InfoBar.propTypes = {
  children: PropTypes__default.node.isRequired,

  /**
   * The CSS class name to be placed on the wrapping element.
   */
  className: PropTypes__default.string,

  /**
   * Additional `id` provided to the wrapping element
   */
  id: PropTypes__default.string,

  /**
   *  `pageWidth` for the `<Wrapper />` component
   */
  pageWidth: PropTypes__default.oneOf(['sm', 'md', 'lg', 'full']),

  /**
   * Additional `className` for the `<Wrapper />` component
   */
  wrapperClassName: PropTypes__default.string
};
InfoBar.defaultProps = {
  pageWidth: 'narrower'
};

var prefix$e = settings.prefix;

var InlineLoading = /*#__PURE__*/function (_React$Component) {
  _inherits(InlineLoading, _React$Component);

  var _super = _createSuper(InlineLoading);

  function InlineLoading() {
    _classCallCheck(this, InlineLoading);

    return _super.apply(this, arguments);
  }

  _createClass(InlineLoading, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          success = _this$props.success,
          description = _this$props.description,
          onSuccess = _this$props.onSuccess,
          successDelay = _this$props.successDelay,
          other = _objectWithoutProperties(_this$props, ["className", "success", "description", "onSuccess", "successDelay"]);

      var loadingClasses = classnames("".concat(prefix$e, "--inline-loading"), className);

      var getLoading = function getLoading() {
        if (success) {
          setTimeout(function () {
            if (onSuccess) {
              onSuccess();
            }
          }, successDelay);
          return /*#__PURE__*/React__default.createElement("svg", {
            className: "".concat(prefix$e, "--inline-loading__checkmark-container ").concat(prefix$e, "--inline-loading__svg"),
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 10 10"
          }, /*#__PURE__*/React__default.createElement("polyline", {
            className: "".concat(prefix$e, "--inline-loading__checkmark"),
            points: "0.74 3.4 3.67 6.34 9.24 0.74"
          }));
        }

        return /*#__PURE__*/React__default.createElement(Loading, {
          small: true,
          withOverlay: false
        });
      };

      var loadingText = /*#__PURE__*/React__default.createElement("p", {
        className: "".concat(prefix$e, "--inline-loading__text")
      }, description);
      return /*#__PURE__*/React__default.createElement("div", _extends({
        className: loadingClasses
      }, other), /*#__PURE__*/React__default.createElement("div", {
        className: "".concat(prefix$e, "--inline-loading__animation")
      }, getLoading()), description && loadingText);
    }
  }]);

  return InlineLoading;
}(React__default.Component);

_defineProperty(InlineLoading, "propTypes", {
  /**
   * Specify a custom className to be applied to the container node
   */
  className: PropTypes__default.string,

  /**
   * Specify whether the load was successful
   */
  success: PropTypes__default.bool,

  /**
   * Specify the description for the inline loading text
   */
  description: PropTypes__default.string,

  /**
   * Provide an optional handler to be invoked when <InlineLoading> is
   * successful
   */
  onSuccess: PropTypes__default.func,

  /**
   * Provide a delay for the `setTimeout` for success
   */
  successDelay: PropTypes__default.number
});

_defineProperty(InlineLoading, "defaultProps", {
  success: false,
  successDelay: 1500
});

/** List component show a number of connected items written consecutively, typically one below the other. */

var List = function List(_ref) {
  var _classnames;

  var children = _ref.children,
      className = _ref.className,
      colon = _ref.colon,
      kind = _ref.kind,
      small = _ref.small,
      other = _objectWithoutProperties(_ref, ["children", "className", "colon", "kind", "small"]);

  var classNames = classnames('wfp--list', className, (_classnames = {}, _defineProperty(_classnames, "wfp--list--".concat(kind), kind), _defineProperty(_classnames, 'wfp--list--small', small), _defineProperty(_classnames, 'wfp--list--colon', colon), _classnames));
  return /*#__PURE__*/React__default.createElement("ul", _extends({
    className: classNames
  }, other), children);
};
List.propTypes = {
  /**
   * Provide multiple `ListItem` components
   */
  children: PropTypes__default.node,

  /**
   * Specify a custom className
   */
  className: PropTypes__default.string,

  /**
   * Specify if colons should be used
   */
  colon: PropTypes__default.bool,

  /**
   * Specify a kind.
   */
  kind: PropTypes__default.oneOf(['simple', 'simple-inline', 'details', 'bullets', 'ordered']),

  /**
   * Specify if the List should be small
   */
  small: PropTypes__default.bool
};
List.defaultProps = {
  kind: 'simple',
  colon: false,
  small: false
};

var ListItem = function ListItem(_ref) {
  var children = _ref.children,
      className = _ref.className,
      title = _ref.title,
      kind = _ref.kind,
      other = _objectWithoutProperties(_ref, ["children", "className", "title", "kind"]);

  var classNames = classnames('wfp--list__element', className, {
    'wfp--list-item--checkmark': kind === 'checkmark',
    'wfp--list-item--cross': kind === 'cross'
  });
  return /*#__PURE__*/React__default.createElement("li", _extends({
    className: classNames
  }, other), kind === 'cross' && /*#__PURE__*/React__default.createElement(Icon, {
    className: "wfp--list-item__icon",
    icon: {
      styles: '',
      viewBox: '0 0 320 512',
      width: '15',
      height: '15',
      svgData: {
        circles: '',
        ellipses: '',
        paths: [{
          fill: 'currentColor',
          d: 'M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'
        }],
        polygons: '',
        polylines: '',
        rects: ''
      }
    }
  }), kind === 'checkmark' && /*#__PURE__*/React__default.createElement(Icon, {
    className: "wfp--list-item__icon",
    icon: {
      styles: '',
      viewBox: '0 0 512 512',
      width: '13',
      height: '13',
      svgData: {
        circles: '',
        ellipses: '',
        paths: [{
          fill: 'currentColor',
          d: 'M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'
        }],
        polygons: '',
        polylines: '',
        rects: ''
      }
    }
  }), title && /*#__PURE__*/React__default.createElement("span", {
    className: "wfp--list__element__title"
  }, title), /*#__PURE__*/React__default.createElement("span", {
    className: "wfp--list__element__content"
  }, children));
};
ListItem.propTypes = {
  /**
   * Provide multiple `ListItem` components
   */
  children: PropTypes__default.node,

  /**
   * Specify a custom className
   */
  className: PropTypes__default.string,

  /**
   * Specify a kind.
   */
  kind: PropTypes__default.oneOf(['checkmark', 'cross']),

  /**
   * Specify if the List should be small
   */
  small: PropTypes__default.bool
};

/** The Main Navigation is a Horizontal Menu which consists of multiple clickable items placed at the top of the page. The navigation stays unchanged when browswing through the site and is present on every page. The currently selected item is usually highlighted. */

var MainNavigation = /*#__PURE__*/function (_Component) {
  _inherits(MainNavigation, _Component);

  var _super = _createSuper(MainNavigation);

  function MainNavigation(props) {
    var _this;

    _classCallCheck(this, MainNavigation);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onChangeSub", function (action, i, e) {
      if (e) {
        e.preventDefault();
      }

      if (action === 'close') {
        _this.setState({
          activeMenuItem: undefined
        });
      } else if (action === 'toggle') {
        var newI = _this.state.activeMenuItem === undefined || _this.state.activeMenuItem !== i ? i : undefined;

        _this.setState({
          activeMenuItem: newI
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "toggleMenu", function () {
      _this.setState({
        openMobile: !_this.state.openMobile
      });
    });

    _defineProperty(_assertThisInitialized(_this), "triggerSubNavigation", function () {
      _this.setState({
        activeMenuItem: undefined
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function () {
      _this.setState({
        activeMenuItem: undefined
      });
    });

    _this.state = {
      openMobile: false,
      activeMenuItem: undefined
    };
    return _this;
  }

  _createClass(MainNavigation, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          id = _this$props.id,
          logo = _this$props.logo,
          mobilePageWidth = _this$props.mobilePageWidth,
          pageWidth = _this$props.pageWidth;
      var wrapperClasses = classnames('wfp--main-navigation', className);
      var listClasses = classnames('wfp--main-navigation__list', {
        'wfp--main-navigation__list--open': this.state.openMobile
      });
      var parentProps = {
        onChangeSub: this.onChangeSub,
        toggleMenu: this.toggleMenu
      };
      var childrenSelect = typeof children === 'function' ? children(parentProps).props.children : children;
      return /*#__PURE__*/React__default.createElement("div", {
        id: id,
        className: wrapperClasses
      }, /*#__PURE__*/React__default.createElement(Wrapper, {
        pageWidth: pageWidth,
        mobilePageWidth: mobilePageWidth,
        className: "wfp--main-navigation__wrapper"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "wfp--main-navigation__logo-wrapper"
      }, /*#__PURE__*/React__default.createElement(Button, {
        className: "wfp--main-navigation__button",
        onClick: this.toggleMenu
      }, "Menu"), /*#__PURE__*/React__default.createElement("div", {
        className: "wfp--main-navigation__logo"
      }, logo)), /*#__PURE__*/React__default.createElement("ul", {
        className: listClasses
      }, React__default.Children.map(childrenSelect, function (child, i) {
        if (child) {
          return /*#__PURE__*/React__default.cloneElement(child, {
            activeMenuItem: _this2.state.activeMenuItem,
            menuItem: i,
            onChangeSub: _this2.onChangeSub
          });
        } else return null;
      }))));
    }
  }]);

  return MainNavigation;
}(React.Component);

MainNavigation.propTypes = {
  /**
   * Usually multiple `MainNavigationItem` elements
   */
  children: PropTypes__default.node.isRequired,

  /**
   * The CSS class name to be placed on the wrapping element.
   */
  className: PropTypes__default.string,

  /**
   * Defines an ID for the component.
   */
  id: PropTypes__default.string,

  /**
   * The Logo can be either a string or a component
   */
  logo: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.node]),

  /**
   * Specify the max-width on desktop devices (same as \`Wrapper\` component)
   */
  pageWidth: PropTypes__default.oneOf(['sm', 'md', 'lg', 'full']),

  /**
   * Specify the max-width on mobile devices (same as \`Wrapper\` component)
   */
  mobilePageWidth: PropTypes__default.string,

  /**
   * Additional className for the `Wrapper`
   */
  wrapperClassName: PropTypes__default.string
};
MainNavigation.defaultProps = {
  pageWidth: 'md',
  mobilePageWidth: 'full',
  logo: 'WFP'
};

var MainNavigationItem = /*#__PURE__*/function (_Component) {
  _inherits(MainNavigationItem, _Component);

  var _super = _createSuper(MainNavigationItem);

  function MainNavigationItem() {
    var _this;

    _classCallCheck(this, MainNavigationItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "UNSAFE_componentWillReceiveProps", function (nextProps) {
      if (nextProps.menuItem === nextProps.activeMenuItem) {
        document.addEventListener('mousedown', _this.handleClickOutside);
      } else {
        document.removeEventListener('mousedown', _this.handleClickOutside);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setWrapperRef", function (node) {
      _this.wrapperRef = node;
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function (e) {
      if (_this.wrapperRef && !_this.wrapperRef.contains(e.target)) {
        _this.props.onChangeSub('close');
      }
    });

    return _this;
  }

  _createClass(MainNavigationItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          activeMenuItem = _this$props.activeMenuItem,
          className = _this$props.className,
          children = _this$props.children,
          menuItem = _this$props.menuItem,
          onChangeSub = _this$props.onChangeSub,
          subNavigation = _this$props.subNavigation,
          subNavWideAsContent = _this$props.subNavWideAsContent;
      var wrapperClasses = classnames(className, {
        'wfp--main-navigation__item': true,
        'wfp--main-navigation__item--open': menuItem === activeMenuItem,
        'wfp--content-width': subNavigation && subNavWideAsContent
      });
      var triggerClasses = classnames({
        'wfp--main-navigation__trigger': true,
        'wfp--main-navigation__trigger--has-sub': subNavigation,
        'wfp--main-navigation__trigger--open': menuItem === activeMenuItem
      });
      var childrenWithProps = subNavigation ? /*#__PURE__*/React__default.cloneElement(children, {
        children: /*#__PURE__*/React__default.createElement(React__default.Fragment, null, children.props.children, /*#__PURE__*/React__default.createElement(Icon, {
          className: "wfp--main-navigation__trigger__icon",
          icon: menuItem === activeMenuItem ? icons.iconClose : icons.iconCaretDown,
          fill: "#FFFFFF",
          description: "expand icon"
        })),
        onClick: function onClick(e) {
          return onChangeSub('toggle', menuItem, e);
        }
      }) : children;
      var subClasses = classnames({
        'wfp--main-navigation__sub': true,
        'wfp--main-navigation__sub--open': menuItem === activeMenuItem
      });
      return /*#__PURE__*/React__default.createElement("li", {
        className: wrapperClasses,
        ref: this.setWrapperRef
      }, /*#__PURE__*/React__default.createElement("div", {
        className: triggerClasses
      }, childrenWithProps), subNavigation && /*#__PURE__*/React__default.createElement("div", {
        className: subClasses,
        open: menuItem === activeMenuItem ? true : false
      }, subNavigation));
    }
  }]);

  return MainNavigationItem;
}(React.Component);

MainNavigationItem.propTypes = {
  /**
   * The CSS class name to be placed on the wrapping element.
   */
  className: PropTypes__default.string,
  children: PropTypes__default.element.isRequired,

  /**
   * If defined the `MainNaviationItem` will have a toggleable
   * SubNavigation. See the `SubNavigation` component for details on usage
   */
  subNavigation: PropTypes__default.node
};

/** The SubNavigation is a toogleable part of the MainNavigation */

var SubNavigation = function SubNavigation(_ref) {
  var children = _ref.children,
      other = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/React__default.createElement("div", other, children);
};

SubNavigation.propTypes = {
  children: PropTypes__default.node.isRequired
};

var SubNavigationItem = function SubNavigationItem(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      other = _objectWithoutProperties(_ref2, ["children", "className"]);

  var classes = classnames('wfp--sub-navigation__item', {
    className: className
  });
  return /*#__PURE__*/React__default.createElement("div", _extends({
    className: classes
  }, other), children);
};

SubNavigationItem.propTypes = {};

var SubNavigationHeader = function SubNavigationHeader(_ref3) {
  var children = _ref3.children,
      className = _ref3.className,
      other = _objectWithoutProperties(_ref3, ["children", "className"]);

  var classes = classnames('wfp--sub-navigation__header', {
    className: className
  });
  return /*#__PURE__*/React__default.createElement("div", _extends({
    className: classes
  }, other), children);
};

SubNavigationHeader.propTypes = {};

var SubNavigationFilter = function SubNavigationFilter(_ref4) {
  var children = _ref4.children,
      className = _ref4.className,
      other = _objectWithoutProperties(_ref4, ["children", "className"]);

  var classes = classnames('wfp--sub-navigation__filter', {
    className: className
  });
  return /*#__PURE__*/React__default.createElement("div", _extends({
    className: classes
  }, other), children);
};

SubNavigationFilter.propTypes = {
  children: PropTypes__default.node,
  className: PropTypes__default.string
};

var SubNavigationList = function SubNavigationList(_ref5) {
  var children = _ref5.children,
      className = _ref5.className,
      other = _objectWithoutProperties(_ref5, ["children", "className"]);

  var classes = classnames('wfp--sub-navigation__list', {
    className: className
  });
  return /*#__PURE__*/React__default.createElement("div", _extends({
    className: classes
  }, other), children);
};

SubNavigationList.propTypes = {
  children: PropTypes__default.node,
  className: PropTypes__default.string
};

var SubNavigationContent = function SubNavigationContent(_ref6) {
  var children = _ref6.children,
      className = _ref6.className,
      other = _objectWithoutProperties(_ref6, ["children", "className"]);

  var classes = classnames('wfp--sub-navigation__content', {
    className: className
  });
  return /*#__PURE__*/React__default.createElement("div", _extends({
    className: classes
  }, other), children);
};

SubNavigationContent.propTypes = {
  /**
   * Provide the content of link
   */
  children: PropTypes__default.node,
  className: PropTypes__default.string
};

var SubNavigationTitle = function SubNavigationTitle(_ref7) {
  var children = _ref7.children,
      className = _ref7.className,
      other = _objectWithoutProperties(_ref7, ["children", "className"]);

  var classes = classnames('wfp--sub-navigation__title', {
    className: className
  });
  return /*#__PURE__*/React__default.createElement("div", _extends({
    className: classes
  }, other), children);
};

SubNavigationTitle.propTypes = {
  /**
   * Provide the content of link
   */
  children: PropTypes__default.string,
  className: PropTypes__default.string
};

var SubNavigationLink = function SubNavigationLink(_ref8) {
  var children = _ref8.children,
      className = _ref8.className,
      other = _objectWithoutProperties(_ref8, ["children", "className"]);

  var classes = classnames('wfp--sub-navigation__link', {
    className: className
  });
  return /*#__PURE__*/React__default.createElement("div", _extends({
    className: classes
  }, other), children);
};

SubNavigationLink.propTypes = {
  /**
   * Provide the content of link
   */
  children: PropTypes__default.string
};

var SubNavigationGroup = function SubNavigationGroup(_ref9) {
  var children = _ref9.children,
      columns = _ref9.columns,
      className = _ref9.className,
      title = _ref9.title,
      other = _objectWithoutProperties(_ref9, ["children", "columns", "className", "title"]);

  var classes = classnames('wfp--sub-navigation__group', {
    className: className
  }, {
    'wfp--sub-navigation__group--columns': columns
  });
  return /*#__PURE__*/React__default.createElement("div", _extends({
    className: classes
  }, other), title && /*#__PURE__*/React__default.createElement("h3", {
    className: "wfp--sub-navigation__group__title"
  }, title), /*#__PURE__*/React__default.createElement("div", null, children));
};

SubNavigationGroup.propTypes = {
  /**
   * Provide amount of columns shown
   */
  columns: PropTypes__default.number,

  /**
   * Provide a title for the grop
   */
  title: PropTypes__default.node,

  /**
   * Provide content to be rendered inside of a <Tag>
   */
  image: PropTypes__default.string
};

/** The Story component adds a default style, formatting and spacing for a longer text with main focus on readability. */

var Story = function Story(_ref) {
  var children = _ref.children,
      className = _ref.className,
      pageWidth = _ref.pageWidth,
      spacing = _ref.spacing;
  var classNames = classnames(_defineProperty({
    'wfp--story': true
  }, "".concat(className), className));
  return /*#__PURE__*/React__default.createElement("div", {
    className: classNames,
    pageWidth: pageWidth ? pageWidth : 'md',
    spacing: spacing
  }, children);
};

Story.propTypes = {
  /**
    The Story content
  */
  children: PropTypes__default.node,

  /**
    Additional className for Story
  */
  className: PropTypes__default.string
};

/** Links are used as navigational elements. They may appear on their own, within a sentence or paragraph, or directly following the content. */

var wrapper = function wrapper(props) {
  return /*#__PURE__*/React__default.createElement(Story, props);
};

var li = function li(props) {
  var kind = typeof props.children === 'string' ? props.children.substring(0, 1) : '';
  if (kind === '✓' || kind === '✗') return /*#__PURE__*/React__default.createElement(ListItem, _extends({
    kind: kind === '✓' ? 'checkmark' : 'cross'
  }, props), props.children.substring(1, props.children.length));
  return /*#__PURE__*/React__default.createElement("li", props, props.children);
};

var ul = function ul(props) {
  return /*#__PURE__*/React__default.createElement(List, _extends({}, props, {
    kind: "bullets"
  }), props.children);
};

var ol = function ol(props) {
  return /*#__PURE__*/React__default.createElement(List, _extends({}, props, {
    kind: "ordered"
  }), props.children);
};

var blockquote = function blockquote(props) {
  if (Array.isArray(props.children) && props.children.length >= 2 && props.children[0].props) return /*#__PURE__*/React__default.createElement(Blockquote, _extends({}, props, {
    title: props.children[0].props.children
  }), props.children.map(function (e, i) {
    if (i > 0) return e;
  }));
  return /*#__PURE__*/React__default.createElement(Blockquote, props, props.children);
};
/*const code = ({ children, className, ...other }) => {
    const language = className && className.split('-');
    return (
      <PureSource
        format={false}
        dark
        language={(language && language[1]) || 'plaintext'}
        code={children as string}
        {...other}
      />
    );
  };
  */


var MdxComponents = {
  wrapper: wrapper,
  li: li,
  ul: ul,
  ol: ol,
  blockquote: blockquote
};

var prefix$f = settings.prefix;
var matchesFuncName = typeof Element !== 'undefined' && ['matches', 'webkitMatchesSelector', 'msMatchesSelector'].filter(function (name) {
  return typeof Element.prototype[name] === 'function';
})[0];
var modalRoot = typeof document !== 'undefined' ? document.body : undefined;
/** Modals focus the user’s attention exclusively on one task or piece of information via a window that sits on top of the page content. */

var Modal = /*#__PURE__*/function (_Component) {
  _inherits(Modal, _Component);

  var _super = _createSuper(Modal);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "button", /*#__PURE__*/React__default.createRef());

    _defineProperty(_assertThisInitialized(_this), "outerModal", /*#__PURE__*/React__default.createRef());

    _defineProperty(_assertThisInitialized(_this), "innerModal", /*#__PURE__*/React__default.createRef());

    _defineProperty(_assertThisInitialized(_this), "elementOrParentIsFloatingMenu", function (target) {
      var _this$props$selectors = _this.props.selectorsFloatingMenus,
          selectorsFloatingMenus = _this$props$selectors === void 0 ? [".".concat(prefix$f, "--overflow-menu-options"), ".".concat(prefix$f, "--tooltip"), '.flatpickr-calendar'] : _this$props$selectors;

      if (target && typeof target.closest === 'function') {
        return selectorsFloatingMenus.some(function (selector) {
          return target.closest(selector);
        });
      } else {
        // Alternative if closest does not exist.
        while (target) {
          if (typeof target[matchesFuncName] === 'function') {
            if ( // eslint-disable-next-line no-loop-func
            selectorsFloatingMenus.some(function (selector) {
              return target[matchesFuncName](selector);
            })) {
              return true;
            }
          }

          target = target.parentNode;
        }

        return false;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (evt) {
      if (evt.which === 27) {
        _this.props.onRequestClose(evt, 'key');
      }

      if (evt.which === 13 && _this.props.shouldSubmitOnEnter) {
        _this.props.onRequestSubmit(evt, 'key');
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (evt) {
      if (_this.innerModal.current && !_this.innerModal.current.contains(evt.target) && !_this.elementOrParentIsFloatingMenu(evt.target)) {
        _this.props.onRequestClose(evt, 'background');
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleCloseButton", function (evt) {
      _this.props.onRequestClose(evt, 'button');
    });

    _defineProperty(_assertThisInitialized(_this), "focusModal", function () {
      if (_this.outerModal.current) {
        _this.outerModal.current.focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (evt) {
      // Keyboard trap
      if (_this.innerModal.current && _this.props.open && evt.relatedTarget && !_this.innerModal.current.contains(evt.relatedTarget) && !_this.elementOrParentIsFloatingMenu(evt.relatedTarget)) {
        _this.focusModal();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "focusButton", function (focusContainerElement) {
      if (_this.props.selectorPrimaryFocus === false) {
        return;
      }

      var primaryFocusElement = focusContainerElement.querySelector(_this.props.selectorPrimaryFocus);

      if (primaryFocusElement) {
        primaryFocusElement.focus();
        return;
      }

      if (_this.button && _this.button.current) {
        _this.button.current.focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleTransitionEnd", function (evt) {
      if (_this.outerModal.current.offsetWidth && _this.outerModal.current.offsetHeight && _this.beingOpen) {
        _this.focusButton(evt.currentTarget);

        _this.beingOpen = false;
      }
    });

    _this.el = document.createElement('div');
    return _this;
  }

  _createClass(Modal, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.open && this.props.open) {
        this.beingOpen = true;
      } else if (prevProps.open && !this.props.open) {
        this.beingOpen = false;
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      modalRoot.appendChild(this.el);

      if (!this.props.open) {
        return;
      }

      this.focusButton(this.innerModal.current);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      modalRoot.removeChild(this.el);
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          modalHeading = _this$props.modalHeading,
          modalLabel = _this$props.modalLabel,
          modalFooter = _this$props.modalFooter,
          modalSecondaryAction = _this$props.modalSecondaryAction,
          modalAriaLabel = _this$props.modalAriaLabel,
          passiveModal = _this$props.passiveModal,
          secondaryButtonText = _this$props.secondaryButtonText,
          primaryButtonText = _this$props.primaryButtonText,
          backgroundImage = _this$props.backgroundImage,
          open = _this$props.open,
          lazyLoad = _this$props.lazyLoad,
          onRequestClose = _this$props.onRequestClose,
          onRequestSubmit = _this$props.onRequestSubmit,
          onSecondarySubmit = _this$props.onSecondarySubmit,
          iconDescription = _this$props.iconDescription,
          inPortal = _this$props.inPortal,
          primaryButtonDisabled = _this$props.primaryButtonDisabled,
          secondaryButtonDisabled = _this$props.secondaryButtonDisabled,
          danger = _this$props.danger,
          hideClose = _this$props.hideClose,
          wide = _this$props.wide,
          type = _this$props.type,
          selectorPrimaryFocus = _this$props.selectorPrimaryFocus,
          selectorsFloatingMenus = _this$props.selectorsFloatingMenus,
          shouldSubmitOnEnter = _this$props.shouldSubmitOnEnter,
          other = _objectWithoutProperties(_this$props, ["modalHeading", "modalLabel", "modalFooter", "modalSecondaryAction", "modalAriaLabel", "passiveModal", "secondaryButtonText", "primaryButtonText", "backgroundImage", "open", "lazyLoad", "onRequestClose", "onRequestSubmit", "onSecondarySubmit", "iconDescription", "inPortal", "primaryButtonDisabled", "secondaryButtonDisabled", "danger", "hideClose", "wide", "type", "selectorPrimaryFocus", "selectorsFloatingMenus", "shouldSubmitOnEnter"]);

      if (open === false && lazyLoad) {
        return null;
      }

      var onSecondaryButtonClick = onSecondarySubmit ? onSecondarySubmit : onRequestClose;
      var modalClasses = classnames((_classNames = {}, _defineProperty(_classNames, "".concat(prefix$f, "--modal"), true), _defineProperty(_classNames, "".concat(prefix$f, "--modal--wide"), wide), _defineProperty(_classNames, "".concat(prefix$f, "--modal--tall"), !passiveModal), _defineProperty(_classNames, "".concat(prefix$f, "--modal--background-image"), backgroundImage), _defineProperty(_classNames, 'is-visible', open), _defineProperty(_classNames, "".concat(prefix$f, "--modal--warning"), type === 'warning' || this.props.warning), _defineProperty(_classNames, "".concat(prefix$f, "--modal--danger"), type === 'danger' || this.props.danger), _defineProperty(_classNames, this.props.className, this.props.className), _classNames));
      var modalButton = !hideClose ? /*#__PURE__*/React__default.createElement("button", {
        className: "".concat(prefix$f, "--modal-close"),
        type: "button",
        onClick: this.handleCloseButton,
        ref: this.button
      }, /*#__PURE__*/React__default.createElement(Icon, {
        icon: icons.iconClose,
        className: "".concat(prefix$f, "--modal-close__icon"),
        description: iconDescription
      })) : null;
      var modalBody = /*#__PURE__*/React__default.createElement("div", {
        ref: this.innerModal,
        role: "dialog",
        className: "".concat(prefix$f, "--modal-container"),
        "aria-label": modalAriaLabel
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "".concat(prefix$f, "--modal-header")
      }, passiveModal && modalButton, /*#__PURE__*/React__default.createElement("div", null, modalLabel && /*#__PURE__*/React__default.createElement("h4", {
        className: "".concat(prefix$f, "--modal-header__label")
      }, modalLabel), /*#__PURE__*/React__default.createElement("h2", {
        className: "".concat(prefix$f, "--modal-header__heading")
      }, modalHeading)), modalSecondaryAction && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, modalSecondaryAction), !passiveModal && modalButton), /*#__PURE__*/React__default.createElement("div", {
        className: "".concat(prefix$f, "--modal-content")
      }, this.props.children), !passiveModal && /*#__PURE__*/React__default.createElement("div", {
        className: "".concat(prefix$f, "--modal-footer")
      }, !modalFooter ? /*#__PURE__*/React__default.createElement("div", {
        className: "".concat(prefix$f, "--modal__buttons-container")
      }, secondaryButtonText && /*#__PURE__*/React__default.createElement(Button, {
        kind: danger ? 'tertiary' : 'secondary',
        disabled: secondaryButtonDisabled,
        onClick: onSecondaryButtonClick
      }, secondaryButtonText), /*#__PURE__*/React__default.createElement(Button, {
        kind: danger ? 'danger--primary' : 'primary',
        disabled: primaryButtonDisabled,
        onClick: onRequestSubmit,
        inputref: this.button
      }, primaryButtonText)) : /*#__PURE__*/React__default.createElement("div", null, modalFooter(this.props))));
      var modal = /*#__PURE__*/React__default.createElement("div", _extends({}, other, {
        onKeyDown: this.handleKeyDown,
        onClick: this.handleClick,
        onBlur: this.handleBlur,
        className: modalClasses,
        style: backgroundImage ? {
          backgroundImage: "url(".concat(backgroundImage, ")")
        } : undefined,
        role: "presentation",
        tabIndex: -1,
        onTransitionEnd: this.props.open ? this.handleTransitionEnd : undefined,
        ref: this.outerModal
      }), /*#__PURE__*/React__default.createElement("div", {
        className: "".concat(prefix$f, "--modal-inner")
      }, modalBody));

      if (inPortal) {
        return /*#__PURE__*/ReactDOM.createPortal(modal, this.el);
      } else {
        return modal;
      }
    }
  }]);

  return Modal;
}(React.Component);

_defineProperty(Modal, "propTypes", {
  /**
   * Provide the contents of your Modal
   */
  children: PropTypes__default.node,

  /**
   * Specify an optional className to be applied to the modal root node
   */
  className: PropTypes__default.string,

  /**
   * Specify whether the modals content should be only loaded when the `Modal` is `open`
   */
  lazyLoad: PropTypes__default.bool,

  /**
   * Specify whether the modal should be button-less
   */
  passiveModal: PropTypes__default.bool,

  /**
   * Specify a handler for closing modal.
   * The handler should care of closing modal, e.g. changing `open` prop.
   */
  onRequestClose: PropTypes__default.func,

  /**
   * Specify the DOM element ID of the top-level node.
   */
  id: PropTypes__default.string,

  /**
   * Specify the content of the modal header title.
   */
  modalHeading: PropTypes__default.string,

  /**
   * Specify the content of the modal header label.
   */
  modalLabel: PropTypes__default.node,

  /**
   * Specify the a function which renders a custom ModalFooter.
   */
  modalFooter: PropTypes__default.func,

  /**
   * Specify a label to be read by screen readers on the modal root node
   */
  modalAriaLabel: PropTypes__default.string,

  /**
   * Specify the text for the secondary button
   */
  secondaryButtonText: PropTypes__default.string,

  /**
   * Specify the text for the primary button
   */
  primaryButtonText: PropTypes__default.string,

  /**
   * Specify whether the Modal is currently open
   */
  open: PropTypes__default.bool,

  /**
   * Specify a handler for "submitting" modal.
   * The handler should care of closing modal, e.g. changing `open` prop, if necessary.
   */
  onRequestSubmit: PropTypes__default.func,

  /**
   * Specify a handler for a key press modal
   */
  onKeyDown: PropTypes__default.func,

  /**
   * Provide a description for "close" icon that can be read by screen readers
   */
  iconDescription: PropTypes__default.string,

  /**
   * Specify whether the Button should be disabled, or not
   */
  primaryButtonDisabled: PropTypes__default.bool,

  /**
   * Specify whether the secondary Button should be disabled, or not
   */
  secondaryButtonDisabled: PropTypes__default.bool,

  /**
   * Specify a handler for the secondary button.
   * Useful if separate handler from `onRequestClose` is desirable
   */
  onSecondarySubmit: PropTypes__default.func,

  /**
   * Specify whether the Modal is for dangerous actions
   */
  danger: PropTypes__default.bool,

  /**
   * Specify if Enter key should be used as "submit" action
   */
  shouldSubmitOnEnter: PropTypes__default.bool,

  /**
   * Specify CSS selectors that match DOM elements working as floating menus.
   * Focusing on those elements won't trigger "focus-wrap" behavior
   */
  selectorsFloatingMenus: PropTypes__default.arrayOf(PropTypes__default.string),

  /**
   * Specify a CSS selector that matches the DOM element that should
   * be focused when the Modal opens. If "false" no selector will be triggered
   */
  selectorPrimaryFocus: PropTypes__default.oneOfType([PropTypes__default.bool, PropTypes__default.string]),

  /**
   *  Different styling options are available `info`, `warning`, `danger`
   */
  type: PropTypes__default.oneOf(['info', 'warning', 'danger']),

  /**
   * If true the Modal will be rendered inside a portal at the end of the
   * body element, otherwise at the position it is placed.
   */
  inPortal: PropTypes__default.bool,

  /**
   * If true the Modal will be wider then the regular Modal
   */
  wide: PropTypes__default.bool
});

_defineProperty(Modal, "defaultProps", {
  onRequestClose: function onRequestClose() {},
  onRequestSubmit: function onRequestSubmit() {},
  primaryButtonDisabled: false,
  secondaryButtonDisabled: false,
  onKeyDown: function onKeyDown() {},
  passiveModal: false,
  iconDescription: 'close the modal',
  inPortal: true,
  lazyLoad: false,
  modalHeading: '',
  modalLabel: '',
  selectorPrimaryFocus: '[data-modal-primary-focus]'
});

/** Modal Wrapper component to encapsulate your Modal within a button. */

var ModalWrapper = /*#__PURE__*/function (_React$Component) {
  _inherits(ModalWrapper, _React$Component);

  var _super = _createSuper(ModalWrapper);

  function ModalWrapper(props) {
    var _this;

    _classCallCheck(this, ModalWrapper);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", {
      isOpen: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleOpen", function () {
      _this.setState({
        isOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function () {
      _this.setState({
        isOpen: false
      }, function () {
        _this.triggerButton.current && _this.triggerButton.current.focus();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnRequestSubmit", function () {
      var _this$props = _this.props,
          handleSubmit = _this$props.handleSubmit,
          shouldCloseAfterSubmit = _this$props.shouldCloseAfterSubmit;

      if (handleSubmit && handleSubmit()) {
        if (shouldCloseAfterSubmit) {
          _this.handleClose();
        }
      }
    });

    _this.triggerButton = /*#__PURE__*/React__default.createRef();
    return _this;
  }

  _createClass(ModalWrapper, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          children = _this$props2.children,
          customButton = _this$props2.customButton,
          id = _this$props2.id,
          _onKeyDown = _this$props2.onKeyDown,
          buttonTriggerText = _this$props2.buttonTriggerText,
          buttonTriggerClassName = _this$props2.buttonTriggerClassName,
          triggerButtonKind = _this$props2.triggerButtonKind,
          disabled = _this$props2.disabled,
          handleSubmit = _this$props2.handleSubmit,
          shouldCloseAfterSubmit = _this$props2.shouldCloseAfterSubmit,
          other = _objectWithoutProperties(_this$props2, ["children", "customButton", "id", "onKeyDown", "buttonTriggerText", "buttonTriggerClassName", "triggerButtonKind", "disabled", "handleSubmit", "shouldCloseAfterSubmit"]);

      var props = _objectSpread2(_objectSpread2({}, other), {}, {
        open: this.state.isOpen,
        onRequestClose: this.handleClose,
        onRequestSubmit: this.handleOnRequestSubmit
      });

      var customButtonEl = customButton ? /*#__PURE__*/React__default.cloneElement(customButton, {
        disabled: disabled,
        onClick: this.handleOpen,
        inputref: this.triggerButton
      }) : undefined;
      return /*#__PURE__*/React__default.createElement("div", {
        role: "presentation",
        className: "wfp--modal__wrapper",
        onKeyDown: function onKeyDown(evt) {
          if (evt.which === 27) {
            _this2.handleClose();

            _onKeyDown(evt);
          }
        }
      }, customButton ? /*#__PURE__*/React__default.createElement(React__default.Fragment, null, customButtonEl) : /*#__PURE__*/React__default.createElement(Button, {
        id: id,
        className: buttonTriggerClassName,
        disabled: disabled,
        kind: triggerButtonKind,
        onClick: this.handleOpen,
        inputref: this.triggerButton
      }, buttonTriggerText), /*#__PURE__*/React__default.createElement(Modal, props, children));
    }
  }]);

  return ModalWrapper;
}(React__default.Component);

_defineProperty(ModalWrapper, "propTypes", {
  status: PropTypes__default.string,

  /**
   * Specify a function to open the Modal.
   */
  handleOpen: PropTypes__default.func,
  children: PropTypes__default.node,

  /**
   * Specify a custom trigger `Button`.
   */
  customButton: PropTypes__default.element,
  id: PropTypes__default.string,

  /**
   * Specify the text for the trigger `Button`.
   */
  buttonTriggerText: PropTypes__default.node,

  /**
   * Specify a `class` for the trigger `Button`.
   */
  buttonTriggerClassName: PropTypes__default.string,
  modalLabel: PropTypes__default.string,
  modalHeading: PropTypes__default.string,
  modalText: PropTypes__default.string,
  passiveModal: PropTypes__default.bool,
  withHeader: PropTypes__default.bool,
  modalBeforeContent: PropTypes__default.bool,
  primaryButtonText: PropTypes__default.string,
  secondaryButtonText: PropTypes__default.string,

  /**
   * Specify a `function` which is triggered when submitting the `Modal`.
   */
  handleSubmit: PropTypes__default.func,
  disabled: PropTypes__default.bool,
  triggerButtonKind: ButtonTypes.buttonKind,

  /**
   * Specify if `Modal` should be closed after submitting.
   */
  shouldCloseAfterSubmit: PropTypes__default.bool
});

_defineProperty(ModalWrapper, "defaultProps", {
  primaryButtonText: 'Save',
  secondaryButtonText: 'Cancel',
  triggerButtonKind: 'primary',
  disabled: false,
  onKeyDown: function onKeyDown() {}
});

/** dkjnslknkjfndn */

var CloseButton = function CloseButton(_ref) {
  var YouCanPassAnyProps = _ref.YouCanPassAnyProps,
      closeToast = _ref.closeToast;
  return /*#__PURE__*/React__default.createElement("button", {
    ariaLabel: "close",
    className: "Toastify__close-button",
    onClick: closeToast
  }, /*#__PURE__*/React__default.createElement("span", null));
};
/** huyhuyghu */


var notificationStyle = {
  position: 'bottom-right',
  closeButton: /*#__PURE__*/React__default.createElement(CloseButton, {
    YouCanPassAnyProps: "foo"
  })
};

var prefix$g = settings.prefix;

function PropTypeEmptyString(props, propName, componentName) {
  componentName = componentName || 'ANONYMOUS';

  if (props[propName]) {
    var value = props[propName];

    if (typeof value === 'string' && value !== '') {
      return new Error(propName + ' in ' + componentName + ' is not an empty string');
    }
  }

  return null;
}

var countDecimals = function countDecimals(value) {
  if (Math.floor(value) === value) return 0;
  return value.split('.')[1].length || 0;
};

var capMin = function capMin(min, value) {
  return isNaN(min) || !min && min !== 0 || isNaN(value) || !value && value !== 0 ? value : Math.max(min, value);
};

var capMax = function capMax(max, value) {
  return isNaN(max) || !max && max !== 0 || isNaN(value) || !value && value !== 0 ? value : Math.min(max, value);
};
/** The number input component is used for entering numeric values and includes controls for incrementally increasing or decreasing the value */


function NumberInput$1(props) {
  var _classNames;

  var additional = props.additional,
      className = props.className,
      disabled = props.disabled,
      formItemClassName = props.formItemClassName,
      id = props.id,
      hideLabel = props.hideLabel,
      hideControls = props.hideControls,
      labelText = props.labelText,
      max = props.max,
      min = props.min,
      _props$step = props.step,
      step = _props$step === void 0 ? 1 : _props$step,
      invalid = props.invalid,
      invalidText = props.invalidText,
      _props$onChange = props.onChange,
      onChange = _props$onChange === void 0 ? function () {} : _props$onChange,
      _props$onClick = props.onClick,
      onClick = _props$onClick === void 0 ? function () {} : _props$onClick,
      helperText = props.helperText,
      light = props.light,
      allowEmpty = props.allowEmpty,
      inputRef = props.inputRef,
      _props$pattern = props.pattern,
      pattern = _props$pattern === void 0 ? '[0-9]*' : _props$pattern,
      other = _objectWithoutProperties(props, ["additional", "className", "disabled", "formItemClassName", "id", "hideLabel", "hideControls", "labelText", "max", "min", "step", "invalid", "invalidText", "onChange", "onClick", "helperText", "light", "allowEmpty", "inputRef", "pattern"]);

  var initialValue = capMax(max, capMin(min, props.value));

  var _useState = React.useState(initialValue),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  React.useEffect(function () {
    setValue(props.value);
  }, [props.value]);
  var newInputRef = React.useRef(null);

  var _inputRef = inputRef ? inputRef : newInputRef;

  var handleChange = function handleChange(evt) {
    if (!disabled) {
      evt.persist();
      evt.imaginaryTarget = _inputRef;
      setValue(evt.target.value);
      onChange(parseFloat(evt.target.value), evt);
    }
  };

  var handleArrowClick = function handleArrowClick(evt, direction) {
    var valueState = typeof value === 'string' ? Number(value) : value;
    valueState = isNaN(valueState) ? 0 : valueState;
    var conditional = direction === 'down' ? min !== undefined && valueState > min || min === undefined : max !== undefined && valueState < max || max === undefined;
    valueState = direction === 'down' ? valueState - step : valueState + parseFloat(step);
    valueState = capMax(max, capMin(min, valueState));
    valueState = parseFloat(valueState.toFixed(countDecimals(step)));

    if (!disabled && conditional) {
      evt.persist();
      evt.imaginaryTarget = _inputRef;
      evt.target.value = parseFloat(valueState);
      onClick(evt, direction);
      setValue(valueState);
      onChange(valueState, evt, direction);
    }
  };

  var numberInputClasses = classnames("".concat(prefix$g, "--number"), className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefix$g, "--number--light"), light), _defineProperty(_classNames, "".concat(prefix$g, "--number--helpertext"), helperText), _defineProperty(_classNames, "".concat(prefix$g, "--number--nolabel"), hideLabel), _defineProperty(_classNames, "".concat(prefix$g, "--number--nocontrols"), hideControls), _classNames));
  var newProps = {
    disabled: disabled,
    id: id,
    max: max,
    min: min,
    step: step,
    onChange: handleChange,
    value: value
  };
  var buttonProps = {
    disabled: disabled,
    type: 'button'
  };
  return /*#__PURE__*/React__default.createElement(Input, _extends({}, props, {
    formItemClassName: numberInputClasses
  }), function () {
    return /*#__PURE__*/React__default.createElement("div", {
      className: "".concat(prefix$g, "--number__controls")
    }, /*#__PURE__*/React__default.createElement("button", _extends({
      className: "".concat(prefix$g, "--number__control-btn up-icon")
    }, buttonProps, {
      onClick: function onClick(evt) {
        return handleArrowClick(evt, 'up');
      }
    }), "+"), /*#__PURE__*/React__default.createElement("button", _extends({
      className: "".concat(prefix$g, "--number__control-btn down-icon")
    }, buttonProps, {
      onClick: function onClick(evt) {
        return handleArrowClick(evt, 'down');
      }
    }), "\u2212"), /*#__PURE__*/React__default.createElement("input", _extends({
      type: "number",
      pattern: pattern
    }, other, newProps, {
      ref: _inputRef
    })));
  });
}

NumberInput$1.propTypes = {
  /**
   * Specify an optional className to be applied to the wrapper node
   */
  className: PropTypes__default.string,

  /**
   * Specify an optional className to be applied to the form-item node
   */
  formItemClassName: PropTypes__default.string,

  /**
   * Specify if the control should be disabled, or not
   */
  disabled: PropTypes__default.bool,

  /**
   * Specify whether you want the underlying label to be visually hidden
   */
  hideLabel: PropTypes__default.bool,

  /**
   * Provide a description for up/down icons that can be read by screen readers
   */
  iconDescription: PropTypes__default.string.isRequired,

  /**
   * Specify a custom `id` for the input
   */
  id: PropTypes__default.string.isRequired,

  /**
   * Generic `label` that will be used as the textual representation of what
   * this field is for
   */
  labelText: PropTypes__default.node,

  /**
   * The maximum value.
   */
  max: PropTypes__default.number,

  /**
   * The minimum value.
   */
  min: PropTypes__default.number,

  /**
   * The new value is available in 'imaginaryTarget.value'
   * i.e. to get the value: evt.imaginaryTarget.value
   */
  onChange: PropTypes__default.func,

  /**
   * Provide an optional function to be called when the up/down button is clicked
   */
  onClick: PropTypes__default.func,

  /**
   * Specify how much the valus should increase/decrease upon clicking on up/down button
   */
  step: PropTypes__default.number,

  /**
   * Specify the value of the input, if undefined or null the value is empty
   */
  value: PropTypes__default.oneOfType([PropTypeEmptyString, PropTypes__default.number]),

  /**
   * Specify if the currently value is invalid.
   */
  invalid: PropTypes__default.bool,

  /**
   * Message which is displayed if the value is invalid.
   */
  invalidText: PropTypes__default.string,

  /**
   * Provide additional component that is used alongside the input for customization
   */
  additional: PropTypes__default.node,

  /**
   * Provide text that is used alongside the control label for additional help
   */
  helperText: PropTypes__default.node,

  /**
   * `true` to use the light version.
   */
  light: PropTypes__default.bool,

  /**
   * `true` to allow empty string.
   */
  allowEmpty: PropTypes__default.bool
};

var prefix$h = settings.prefix;
/** The select component allows users to choose one option from a list. It is used in forms for users to submit data. */

function Select(props) {
  var _classNames;

  var className = props.className,
      id = props.id,
      inline = props.inline,
      labelText = props.labelText,
      disabled = props.disabled,
      children = props.children,
      iconDescription = props.iconDescription,
      hideLabel = props.hideLabel,
      small = props.small,
      invalid = props.invalid,
      invalidText = props.invalidText,
      helperText = props.helperText,
      light = props.light,
      name = props.name,
      inputRef = props.inputRef,
      other = _objectWithoutProperties(props, ["className", "id", "inline", "labelText", "disabled", "children", "iconDescription", "hideLabel", "small", "invalid", "invalidText", "helperText", "light", "name", "inputRef"]);

  var usedId = id ? id : name;
  var selectClasses = classnames((_classNames = {}, _defineProperty(_classNames, "".concat(prefix$h, "--select"), true), _defineProperty(_classNames, "".concat(prefix$h, "--select--inline"), inline), _defineProperty(_classNames, "".concat(prefix$h, "--select--small"), small), _defineProperty(_classNames, "".concat(prefix$h, "--select--light"), light), _defineProperty(_classNames, "".concat(prefix$h, "--select--invalid"), invalid), _defineProperty(_classNames, "".concat(prefix$h, "--select--disabled"), disabled), _defineProperty(_classNames, className, className), _classNames));
  var ariaProps = {};

  if (invalid) {
    //TODO: check if correct
    ariaProps['aria-describedby'] = usedId;
  }

  var input = function () {
    return /*#__PURE__*/React__default.createElement("div", {
      className: selectClasses
    }, /*#__PURE__*/React__default.createElement("select", _extends({}, other, ariaProps, {
      id: usedId,
      name: name,
      className: "".concat(prefix$h, "--select-input"),
      disabled: disabled || undefined,
      "data-invalid": invalid || undefined,
      "aria-invalid": invalid || undefined,
      ref: inputRef
    }), children), /*#__PURE__*/React__default.createElement(Icon, {
      icon: icons.iconCaretDown,
      className: "".concat(prefix$h, "--select__arrow"),
      description: iconDescription
    }));
  }();

  return /*#__PURE__*/React__default.createElement(Input, props, function () {
    return input;
  });
}

Select.propTypes = {
  /**
   * Provide the contents of your Select
   */
  children: PropTypes__default.node,

  /**
   * Specify an optional className to be applied to the node containing the label and the select box
   */
  className: PropTypes__default.string,

  /**
   * Specify a custom `id` for the `<select>`
   */
  id: PropTypes__default.string,

  /**
   * Specify whether you want the inline version of this control
   */
  inline: PropTypes__default.bool,

  /**
   * Provide label text to be read by screen readers when interacting with the
   * control
   */
  labelText: PropTypes__default.node,

  /**
   * Provide an optional `onChange` hook that is called each time the value of
   * the underlying <input> changes
   */
  onChange: PropTypes__default.func,

  /**
   * Specify whether the control is disabled
   */
  disabled: PropTypes__default.bool,

  /**
   * Optionally provide the default value of the `<select>`
   */
  defaultValue: PropTypes__default.any,

  /**
   * Provide a description for the twistie icon that can be read by screen readers
   */
  iconDescription: PropTypes__default.string.isRequired,

  /**
   * Specify whether the label should be hidden, or not
   */
  hideLabel: PropTypes__default.bool,

  /**
   * Specify if the currently value is invalid.
   */
  invalid: PropTypes__default.bool,

  /**
   * Message which is displayed if the value is invalid.
   */
  invalidText: PropTypes__default.string,

  /**
   * Provide text that is used alongside the control label for additional help
   */
  helperText: PropTypes__default.node,

  /**
   * Specify whether you want the light version of this control
   */
  light: PropTypes__default.bool,

  /**
   * Specify whether you want the small version of this control
   */
  small: PropTypes__default.bool
};
Select.defaultProps = {
  disabled: false,
  inline: false,
  iconDescription: 'open list of options',
  invalid: false,
  invalidText: '',
  helperText: '',
  light: false
};

var SelectItem = function SelectItem(_ref) {
  var className = _ref.className,
      value = _ref.value,
      disabled = _ref.disabled,
      hidden = _ref.hidden,
      text = _ref.text,
      other = _objectWithoutProperties(_ref, ["className", "value", "disabled", "hidden", "text"]);

  var selectItemClasses = classnames(_defineProperty({
    'wfp--select-option': true
  }, className, className));
  return /*#__PURE__*/React__default.createElement("option", _extends({}, other, {
    className: selectItemClasses,
    value: value,
    disabled: disabled,
    hidden: hidden
  }), text);
};

SelectItem.propTypes = {
  value: PropTypes__default.any.isRequired,
  className: PropTypes__default.string,
  disabled: PropTypes__default.bool,
  hidden: PropTypes__default.bool,
  text: PropTypes__default.string.isRequired
};
SelectItem.defaultProps = {
  disabled: false,
  hidden: false,
  value: '',
  text: ''
};

function equals(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2) || arr1.length !== arr2.length) {
    return false;
  }

  if (arr1 === arr2) {
    return true;
  }

  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

var instanceId = 0;
/** Pagination is used for splitting up content or data into several pages, with a control for navigating to the next or previous page. */

var Pagination = /*#__PURE__*/function (_Component) {
  _inherits(Pagination, _Component);

  var _super = _createSuper(Pagination);

  function Pagination(props) {
    var _this;

    _classCallCheck(this, Pagination);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleSizeChange", function (evt) {
      var pageSize = Number(evt.target.value);

      _this.setState({
        pageSize: pageSize,
        page: 1
      }, function () {});

      _this.props.onChange({
        page: 1,
        pageSize: pageSize
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handlePageChange", function (evt) {
      _this.setState({
        page: evt.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handlePageInputChange", function (evt) {
      var page = Number(evt.target.value);

      if (page > 0 && page <= Math.max(Math.ceil(_this.props.totalItems / _this.state.pageSize), 1)) {
        _this.setState({
          page: page
        });

        _this.props.onChange({
          page: page,
          pageSize: _this.state.pageSize
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "incrementPage", function () {
      var page = _this.state.page + 1;

      _this.setState({
        page: page
      });

      _this.props.onChange({
        page: page,
        pageSize: _this.state.pageSize
      });
    });

    _defineProperty(_assertThisInitialized(_this), "decrementPage", function () {
      var page = _this.state.page - 1;

      _this.setState({
        page: page
      });

      _this.props.onChange({
        page: page,
        pageSize: _this.state.pageSize
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderSelectItems", function (total) {
      var counter = 1;
      var itemArr = [];

      while (counter <= total) {
        itemArr.push( /*#__PURE__*/React__default.createElement(SelectItem, {
          key: counter,
          value: counter,
          text: String(counter)
        }));
        counter++;
      }

      return itemArr;
    });

    var _this$props = _this.props,
        pageSizes = _this$props.pageSizes,
        _page = _this$props.page,
        _pageSize = _this$props.pageSize;
    _this.state = {
      page: _page,
      pageSize: pageSizes.includes(_pageSize) ? _pageSize : pageSizes[0],
      prevPageSizes: pageSizes,
      prevPage: _page,
      prevPageSize: _pageSize
    };
    _this.uniqueId = ++instanceId;
    return _this;
  }

  _createClass(Pagination, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          backwardText = _this$props2.backwardText,
          className = _this$props2.className,
          forwardText = _this$props2.forwardText,
          id = _this$props2.id,
          itemsPerPageText = _this$props2.itemsPerPageText,
          itemsPerPageFollowsText = _this$props2.itemsPerPageFollowsText,
          itemRangeText = _this$props2.itemRangeText,
          pageRangeText = _this$props2.pageRangeText,
          pageSize = _this$props2.pageSize,
          pageSizesDisabled = _this$props2.pageSizesDisabled,
          pageSizes = _this$props2.pageSizes,
          itemText = _this$props2.itemText,
          pageText = _this$props2.pageText,
          pageNumberText = _this$props2.pageNumberText,
          pagesUnknown = _this$props2.pagesUnknown,
          isLastPage = _this$props2.isLastPage,
          pageInputDisabled = _this$props2.pageInputDisabled,
          totalItems = _this$props2.totalItems,
          onChange = _this$props2.onChange,
          pageNumber = _this$props2.page,
          other = _objectWithoutProperties(_this$props2, ["backwardText", "className", "forwardText", "id", "itemsPerPageText", "itemsPerPageFollowsText", "itemRangeText", "pageRangeText", "pageSize", "pageSizesDisabled", "pageSizes", "itemText", "pageText", "pageNumberText", "pagesUnknown", "isLastPage", "pageInputDisabled", "totalItems", "onChange", "page"]);

      var statePage = this.state.page;
      var statePageSize = this.props.pageSize ? this.props.pageSize : this.state.pageSize;
      var classNames = classnames('wfp--pagination', className);
      var backButtonClasses = classnames('wfp--pagination__button', 'wfp--pagination__button--backward', {
        'wfp--pagination__button--no-index': pageInputDisabled
      });
      var inputId = id || this.uniqueId;
      var totalPages = Math.max(Math.ceil(totalItems / statePageSize), 1);
      var selectItems = this.renderSelectItems(totalPages);
      return /*#__PURE__*/React__default.createElement("div", _extends({
        className: classNames
      }, other), /*#__PURE__*/React__default.createElement("div", {
        className: "wfp--pagination__left"
      }, !pageSizesDisabled && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("span", {
        className: "wfp--pagination__text"
      }, itemsPerPageFollowsText || itemsPerPageText), /*#__PURE__*/React__default.createElement(Select, {
        id: "wfp-pagination-select-".concat(inputId),
        labelText: itemsPerPageText,
        hideLabel: true,
        inline: true,
        onChange: this.handleSizeChange // value={statePageSize}
        ,
        value: this.state.pageSize
      }, pageSizes.map(function (size) {
        return /*#__PURE__*/React__default.createElement(SelectItem, {
          key: size,
          value: size,
          text: String(size)
        });
      })), /*#__PURE__*/React__default.createElement("span", {
        className: "wfp--pagination__text"
      }, "\xA0|\xA0\xA0")), /*#__PURE__*/React__default.createElement("span", {
        className: "wfp--pagination__text"
      }, pagesUnknown ? itemText(statePageSize * (statePage - 1) + 1, statePage * statePageSize) : itemRangeText(Math.min(this.state.pageSize * (statePage - 1) + 1, totalItems), Math.min(statePage * this.state.pageSize, totalItems), totalItems))), /*#__PURE__*/React__default.createElement("div", {
        className: "wfp--pagination__right wfp--pagination--inline"
      }, /*#__PURE__*/React__default.createElement("span", {
        className: "wfp--pagination__text"
      }, pagesUnknown ? pageText(statePage) : pageRangeText(statePage, totalPages)), /*#__PURE__*/React__default.createElement("button", {
        className: backButtonClasses,
        onClick: this.decrementPage,
        disabled: this.props.disabled || statePage === 1
      }, /*#__PURE__*/React__default.createElement(Icon, {
        className: "wfp--pagination__button-icon",
        icon: icons.iconChevronLeft,
        description: backwardText
      })), pageInputDisabled ? null : /*#__PURE__*/React__default.createElement(Select, {
        id: "wfp-pagination-select-".concat(inputId + 2),
        labelText: itemsPerPageText,
        hideLabel: true,
        inline: true,
        onChange: this.handlePageInputChange,
        value: statePage
      }, selectItems), /*#__PURE__*/React__default.createElement("button", {
        className: "wfp--pagination__button wfp--pagination__button--forward",
        onClick: this.incrementPage,
        disabled: this.props.disabled || statePage === totalPages || isLastPage
      }, /*#__PURE__*/React__default.createElement(Icon, {
        className: "wfp--pagination__button-icon",
        icon: icons.iconChevronRight,
        description: forwardText
      }))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref, state) {
      var pageSizes = _ref.pageSizes,
          page = _ref.page,
          pageSize = _ref.pageSize;
      var prevPageSizes = state.prevPageSizes,
          prevPage = state.prevPage,
          prevPageSize = state.prevPageSize,
          currentPage = state.page,
          currentPageSize = state.pageSize;
      var pageSizesChanged = !equals(pageSizes, prevPageSizes);
      var pageChanged = page !== prevPage;
      var pageSizeChanged = pageSize !== prevPageSize;
      return !pageSizesChanged && !pageChanged && !pageSizeChanged ? null : {
        page: pageSizesChanged ? 1 : pageChanged ? page : currentPage,
        pageSize: pageSizesChanged ? pageSizes[0] : pageSizeChanged ? pageSize : currentPageSize,
        prevPageSizes: pageSizes,
        prevPage: page,
        prevPageSize: pageSize
      };
    }
  }]);

  return Pagination;
}(React.Component);

_defineProperty(Pagination, "propTypes", {
  /**
   * The description for the backward icon.
   */
  backwardText: PropTypes__default.string,

  /**
   * The CSS class names.
   */
  className: PropTypes__default.string,

  /**
   * The function returning a translatable text showing where the current page is,
   * in a manner of the range of items.
   */
  itemRangeText: PropTypes__default.func,

  /**
   * The description for the forward icon.
   */
  forwardText: PropTypes__default.string,

  /**
   * The unique ID of this component instance.
   */
  id: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.number]),

  /**
   * The translatable text indicating the number of items per page.
   */
  itemsPerPageText: PropTypes__default.string,

  /**
   * A variant of `itemsPerPageText`, with a sign indicating that the number follows, e.g. ':'.
   */
  itemsPerPageFollowsText: PropTypes__default.string,

  /**
   * A variant of `itemRangeText`, used if the total number of items is unknown.
   */
  itemText: PropTypes__default.func,

  /**
   * The callback function called when the current page changes.
   */
  onChange: PropTypes__default.func,
  pageNumberText: PropTypes__default.string,

  /**
   * A function returning PII showing where the current page is.
   */
  pageRangeText: PropTypes__default.func,

  /**
   * The translatable text showing the current page.
   */
  pageText: PropTypes__default.func,

  /**
   * The choices for `pageSize`.
   */
  pageSizes: PropTypes__default.arrayOf(PropTypes__default.number).isRequired,

  /**
   * `true` if ture the pageSizes should be not visible.
   */
  pageSizesDisabled: PropTypes__default.bool,

  /**
   * The total number of items.
   */
  totalItems: PropTypes__default.number,

  /**
   * `true` if the backward/forward buttons should be disabled.
   */
  disabled: PropTypes__default.bool,

  /**
   * The current page.
   */
  page: PropTypes__default.number,

  /**
   * The number dictating how many items a page contains.
   */
  pageSize: PropTypes__default.number,

  /**
   * `true` if the total number of items is unknown.
   */
  pagesUnknown: PropTypes__default.bool,

  /**
   * `true` if the current page should be the last page.
   */
  isLastPage: PropTypes__default.bool,

  /**
   * `true` if the select box to change the page should be disabled.
   */
  pageInputDisabled: PropTypes__default.bool
});

_defineProperty(Pagination, "defaultProps", {
  backwardText: 'Backward',
  itemRangeText: function itemRangeText(min, max, total) {
    return "".concat(min, "-").concat(max, " of ").concat(total, " items");
  },
  forwardText: 'Forward',
  itemsPerPageText: 'Items per page:',
  pageNumberText: 'Page Number',
  pageRangeText: function pageRangeText(current, total) {
    return "".concat(current, " of ").concat(total, " pages");
  },
  disabled: false,
  page: 1,
  pagesUnknown: false,
  pageSizes: [10, 20, 50],
  isLastPage: false,
  pageInputDisabled: false,
  itemText: function itemText(min, max) {
    return "".concat(min, "-").concat(max, " items");
  },
  pageText: function pageText(page) {
    return "page ".concat(page);
  }
});

var prefix$i = settings.prefix;
/** Radio buttons represent a group of mutually exclusive choices */

var RadioButton = /*#__PURE__*/function (_React$Component) {
  _inherits(RadioButton, _React$Component);

  var _super = _createSuper(RadioButton);

  function RadioButton() {
    var _this;

    _classCallCheck(this, RadioButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (evt) {
      _this.props.onChange(_this.props.value, _this.props.name, evt);
    });

    return _this;
  }

  _createClass(RadioButton, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      this.uid = this.props.id || uid();
    }
  }, {
    key: "render",
    value: function render() {
      var wrapperClasses = classnames('radioButtonWrapper', this.props.className);

      var _this$props = this.props,
          labelText = _this$props.labelText,
          inputRef = _this$props.inputRef,
          other = _objectWithoutProperties(_this$props, ["labelText", "inputRef"]);

      return /*#__PURE__*/React__default.createElement("div", {
        className: wrapperClasses
      }, /*#__PURE__*/React__default.createElement("input", _extends({}, other, {
        ref: inputRef,
        type: "radio",
        className: "".concat(prefix$i, "--radio-button"),
        onChange: this.handleChange,
        id: this.uid
      })), /*#__PURE__*/React__default.createElement("label", {
        htmlFor: this.uid,
        className: "".concat(prefix$i, "--radio-button__label")
      }, /*#__PURE__*/React__default.createElement("span", {
        className: "".concat(prefix$i, "--radio-button__appearance")
      }), labelText));
    }
  }]);

  return RadioButton;
}(React__default.Component);

_defineProperty(RadioButton, "propTypes", {
  /**
   * Specify whether the <RadioButton> is currently checked
   */
  checked: PropTypes__default.bool,

  /**
   * Provide an optional className to be applied to the containing node
   */
  className: PropTypes__default.string,

  /**
   * Specify whether the <RadioButton> should be checked by default
   */
  defaultChecked: PropTypes__default.bool,

  /**
   * Specify whether the control is disabled
   */
  disabled: PropTypes__default.bool,

  /**
   * Provide a unique id for the underlying `input` node
   */
  id: PropTypes__default.string,

  /**
   * Provide label text to be read by screen readers when interacting with the
   * control
   */
  labelText: PropTypes__default.node.isRequired,

  /**
   * Provide a name for the underlying `input` node
   */
  name: PropTypes__default.string,

  /**
   * Provide an optional `onChange` hook that is called each time the value of
   * the underlying `input` changes
   */
  onChange: PropTypes__default.func,

  /**
   * Specify the value of the <RadioButton>
   */
  value: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.number]).isRequired
});

_defineProperty(RadioButton, "defaultProps", {
  onChange: function onChange() {}
});

var prefix$j = settings.prefix;
/**
 * InputGroup allows you to organize and arange multiple input elements.
 */

var InputGroup = /*#__PURE__*/function (_React$Component) {
  _inherits(InputGroup, _React$Component);

  var _super = _createSuper(InputGroup);

  function InputGroup() {
    var _this;

    _classCallCheck(this, InputGroup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      selected: _this.props.valueSelected || _this.props.defaultSelected
    });

    _defineProperty(_assertThisInitialized(_this), "getRadioButtons", function () {
      var children = React__default.Children.map(_this.props.children, function (radioButton) {
        var _radioButton$props = radioButton.props,
            value = _radioButton$props.value,
            other = _objectWithoutProperties(_radioButton$props, ["value"]);
        /* istanbul ignore if */


        if (radioButton.props.hasOwnProperty('checked')) {
          process.env.NODE_ENV !== "production" ? warning(false, "Instead of using the checked property on the RadioButton, set\n            the defaultSelected property or valueSelected property on the InputGroup.") : void 0;
        }

        return /*#__PURE__*/React__default.createElement(RadioButton, _extends({}, other, {
          name: _this.props.name,
          key: value,
          value: value,
          onChange: _this.handleChange,
          checked: value === _this.state.selected
        }));
      });
      return children;
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (newSelection, value, evt) {
      if (newSelection !== _this.state.selected) {
        _this.setState({
          selected: newSelection
        });

        _this.props.onChange(newSelection, _this.props.name, evt);
      }
    });

    return _this;
  }

  _createClass(InputGroup, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          disabled = _this$props.disabled,
          labelText = _this$props.labelText,
          helperText = _this$props.helperText,
          controlled = _this$props.controlled,
          vertical = _this$props.vertical,
          hideLabel = _this$props.hideLabel,
          _this$props$className = _this$props.className,
          className = _this$props$className === void 0 ? "".concat(prefix$j, "--input-group") : _this$props$className;
      var labelClasses = classnames('wfp--label', {
        'wfp--visually-hidden': hideLabel
      });
      var wrapperClasses = classnames("".concat(prefix$j, "--form-item"), _defineProperty({}, "".concat(prefix$j, "--input-group__vertical"), vertical));
      var label = labelText ? /*#__PURE__*/React__default.createElement("span", {
        className: labelClasses
      }, labelText) : null;
      var helper = helperText ? /*#__PURE__*/React__default.createElement("div", {
        className: "wfp--form__helper-text"
      }, helperText) : null;
      return /*#__PURE__*/React__default.createElement("div", {
        className: wrapperClasses
      }, /*#__PURE__*/React__default.createElement("div", {
        className: className,
        disabled: disabled
      }, label, helper, /*#__PURE__*/React__default.createElement("div", {
        className: "".concat(prefix$j, "--input-group-inside")
      }, controlled ? this.getRadioButtons() : children)));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref, state) {
      var valueSelected = _ref.valueSelected,
          defaultSelected = _ref.defaultSelected;
      var prevValueSelected = state.prevValueSelected;
      return prevValueSelected === valueSelected ? null : {
        selected: valueSelected || defaultSelected,
        prevValueSelected: valueSelected
      };
    }
  }]);

  return InputGroup;
}(React__default.Component);

_defineProperty(InputGroup, "propTypes", {
  /**
   * Provide a collection of <RadioButton> components to render in the group
   */
  children: PropTypes__default.node,

  /**
   * Provide an optional className to be applied to the container node
   */
  className: PropTypes__default.string,

  /**
   * Provide an optional className to be applied to the container node
   */
  controlled: PropTypes__default.bool,

  /**
   * Specify the <RadioButton> to be selected by default
   */
  defaultSelected: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.number]),

  /**
   * Specify the name of the underlying `input` nodes
   */
  name: PropTypes__default.string.isRequired,

  /**
   * Specify whether the group is disabled
   */
  disabled: PropTypes__default.bool,

  /**
   * Provide an optional `onChange` hook that is called whenever the value of
   * the group changes
   */
  onChange: PropTypes__default.func,

  /**
   * Specify the value that is currently selected in the group
   */
  valueSelected: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.number]),

  /**
   * Specify whether the elements should be displayed vertically.
   */
  vertical: PropTypes__default.bool,

  /**
   * Specify whether you want the underlying label to be visually hidden
   */
  hideLabel: PropTypes__default.bool,

  /**
   * Provide text that is used alongside the control label for additional help
   */
  helperText: PropTypes__default.node,

  /**
   * Provide the text that will be read by a screen reader when visiting this
   * control
   */
  labelText: PropTypes__default.node
});

_defineProperty(InputGroup, "defaultProps", {
  onChange:
  /* istanbul ignore next */
  function onChange() {},
  controlled: false
});

var prefix$k = settings.prefix;

var MoreLink = function MoreLink(_ref) {
  var handleToggleClick = _ref.handleToggleClick,
      link = _ref.link,
      text = _ref.text,
      showMore = _ref.showMore;

  if (link) {
    var clonedLink = /*#__PURE__*/React__default.cloneElement(link, {
      onClick: handleToggleClick
    });
    return clonedLink;
  } else {
    return /*#__PURE__*/React__default.createElement(Link, {
      className: "".concat(prefix$k, "--read-more__trigger"),
      small: true,
      onClick: handleToggleClick
    }, text, /*#__PURE__*/React__default.createElement(Icon, {
      icon: showMore ? icons.iconCaretUp : icons.iconCaretDown,
      width: "10",
      height: "10",
      description: showMore ? 'icon up' : 'icon down'
    }));
  }
};
/** ReadMore component is a simple way to keep longer content from cluttering up your page, giving you more control over how much content is displayed to visitor */


var ReadMore = /*#__PURE__*/function (_Component) {
  _inherits(ReadMore, _Component);

  var _super = _createSuper(ReadMore);

  function ReadMore(props) {
    var _this;

    _classCallCheck(this, ReadMore);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleToggleClick", function (e) {
      e.preventDefault();
      var innerHeight = _this.divElement.clientHeight;

      _this.setState(function (prevState) {
        return {
          showMore: !prevState.showMore,
          innerHeight: innerHeight
        };
      });
    });

    _this.state = {
      showMore: false,
      innerHeight: 0
    };
    return _this;
  }

  _createClass(ReadMore, [{
    key: "render",
    value: function render() {
      var _classnames,
          _this2 = this;

      var _this$props = this.props,
          collapseLink = _this$props.collapseLink,
          collapseText = _this$props.collapseText,
          children = _this$props.children,
          collapsed = _this$props.collapsed,
          className = _this$props.className,
          expandLink = _this$props.expandLink,
          expandText = _this$props.expandText,
          fade = _this$props.fade,
          maxHeight = _this$props.maxHeight;
      var _this$state = this.state,
          innerHeight = _this$state.innerHeight,
          showMore = _this$state.showMore;
      var classNames = classnames(className, (_classnames = {}, _defineProperty(_classnames, "".concat(prefix$k, "--read-more"), true), _defineProperty(_classnames, "".concat(prefix$k, "--read-more--expanded"), showMore), _defineProperty(_classnames, "".concat(prefix$k, "--read-more--fade"), fade), _defineProperty(_classnames, "".concat(prefix$k, "--read-more--max-height"), maxHeight), _classnames));
      var contentStyle = !maxHeight ? {
        undefined: undefined
      } : maxHeight && !showMore ? {
        maxHeight: maxHeight
      } : {
        maxHeight: innerHeight + 20
      };
      var collapseStyle = showMore ? {
        display: 'none'
      } : {
        display: 'block'
      };
      return /*#__PURE__*/React__default.createElement("div", {
        className: classNames
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "".concat(prefix$k, "--read-more__content"),
        style: contentStyle
      }, /*#__PURE__*/React__default.createElement("div", {
        ref: function ref(divElement) {
          return _this2.divElement = divElement;
        }
      }, (showMore || !collapsed) && children, collapsed && /*#__PURE__*/React__default.createElement("div", {
        style: collapseStyle
      }, collapsed))), /*#__PURE__*/React__default.createElement(MoreLink, {
        handleToggleClick: this.handleToggleClick,
        showMore: showMore,
        link: showMore ? collapseLink : expandLink,
        text: showMore ? collapseText : expandText
      }));
    }
  }]);

  return ReadMore;
}(React.Component);

_defineProperty(ReadMore, "propTypes", {
  /**
   * Specify an optional className to be applied to the wrapper node
   */
  className: PropTypes__default.string,

  /**
   * The content of the expanded element
   */
  children: PropTypes__default.node.isRequired,

  /**
   * The content of the collapsed content (optional)
   */
  collapsed: PropTypes__default.node,

  /**
   * A custom link for collapsing
   */
  collapseLink: PropTypes__default.node,

  /**
   * A custom link for expanding
   */
  expandLink: PropTypes__default.node,

  /**
   * Enables the fade effect when the content is collapsed (optional) when enabled collapsed will be ignored
   */
  fade: PropTypes__default.bool,

  /**
   * The maximum height when the content is collapsed (optional)
   */
  maxHeight: PropTypes__default.number
});

_defineProperty(ReadMore, "defaultProps", {
  expandText: 'Read more',
  collapseText: 'Read less'
});

var didWarnAboutDeprecation = false;

var ReduxFormWrapper = function ReduxFormWrapper(_ref) {
  var input = _ref.input,
      inputComponent = _ref.inputComponent,
      InputComponent = _ref.InputComponent,
      classNamePrefix = _ref.classNamePrefix,
      invalidText = _ref.invalidText,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error,
      submitError = _ref$meta.submitError,
      warning$1 = _ref$meta.warning,
      other = _objectWithoutProperties(_ref, ["input", "inputComponent", "InputComponent", "classNamePrefix", "invalidText", "meta"]);

  if (inputComponent === undefined && InputComponent === undefined) return null;
  var InputComponentConnect = inputComponent ? inputComponent : InputComponent;

  if (process.env.NODE_ENV !== "production" && InputComponent !== undefined) {
    warning(didWarnAboutDeprecation, 'The `InputComponent` prop of ReduxFormWrapper has been deprecated and will be removed ' + 'in the next major release of `@wfp/ui`. Please use ' + '`children` instead.');
    didWarnAboutDeprecation = true;
  }
  /* if (typeof children === 'object') {
    const element = React.cloneElement(children, {
      input,
      other,
      labelText: (
        <React.Fragment>
          {other.labelText}
          {other.required && <div className="wfp--label__required" />}
        </React.Fragment>
      ),
      invalidText: error,
      onBlur: input.onBlur,
      onChange: input.onChange,
      invalid: touched && error
    })
  return (element) 
  } */


  return /*#__PURE__*/React__default.createElement(InputComponentConnect, _extends({}, input, other, {
    labelText: /*#__PURE__*/React__default.createElement(React__default.Fragment, null, other.labelText, other.required && /*#__PURE__*/React__default.createElement("div", {
      className: "wfp--label__required"
    })),
    invalidText: error || submitError,
    onBlur: input.onBlur,
    onChange: input.onChange,
    invalid: touched && (error || submitError) ? true : false
  }));
};

ReduxFormWrapper.propTypes = {
  /**
   * Provide a custom className that is applied directly to the underlying
   * input node
   */
  className: PropTypes__default.string,

  /**
   * Specify the input component which is getting connected
   */
  inputComponent: PropTypes__default.func.isRequired,

  /**
   * Specify whether the control is disabled
   */
  disabled: PropTypes__default.bool,

  /**
   * Provide a unique identifier for the control
   */
  id: PropTypes__default.string,

  /**
   * Provide the text that will be read by a screen reader when visiting this
   * control
   */
  labelText: PropTypes__default.node.isRequired,

  /**
   * Optionally provide an `onChange` handler that is called whenever <InputComponent>
   * is updated
   */
  onChange: PropTypes__default.func,

  /**
   * Optionally provide an `onClick` handler that is called whenever the
   * <InputComponent> is clicked
   */
  onClick: PropTypes__default.func,

  /**
   * Specify the placeholder attribute for the <textarea>
   */
  placeholder: PropTypes__default.string,

  /**
   * Provide the current value of the <textarea>
   */
  value: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.number]),

  /**
   * Specify whether the control is currently invalid
   */
  invalid: PropTypes__default.bool,

  /**
   * Provide the text that is displayed when the control is in an invalid state
   */
  invalidText: PropTypes__default.string,

  /**
   * Provide text that is used alongside the control label for additional help
   */
  helperText: PropTypes__default.node,

  /**
   * Specify whether you want the underlying label to be visually hidden
   */
  hideLabel: PropTypes__default.bool
};
ReduxFormWrapper.defaultProps = {
  onChange: function onChange() {},
  onClick: function onClick() {}
};

var SecondaryNavigationTitle = function SecondaryNavigationTitle(_ref) {
  var className = _ref.className,
      children = _ref.children;
  var wrapperClasses = classnames('wfp--secondary-navigation__title', className);
  return /*#__PURE__*/React__default.createElement("h1", {
    className: wrapperClasses
  }, children);
};

SecondaryNavigationTitle.propTypes = {
  /**
   * The CSS class name to be placed on the wrapping element.
   */
  className: PropTypes__default.string,

  /**
   * The content of the SecondaryNavigation can be fully customized.
   */
  children: PropTypes__default.node.isRequired
};
/** The SecondaryNavigation shows the page title and and optional tab navigation. */

var SecondaryNavigation = function SecondaryNavigation(_ref2) {
  var additional = _ref2.additional,
      children = _ref2.children,
      className = _ref2.className,
      id = _ref2.id,
      pageWidth = _ref2.pageWidth;
  var wrapperClasses = classnames('wfp--secondary-navigation', className);
  return /*#__PURE__*/React__default.createElement("div", {
    id: id,
    className: wrapperClasses
  }, /*#__PURE__*/React__default.createElement(Wrapper, {
    pageWidth: pageWidth,
    className: "wfp--secondary-navigation__wrapper"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "wfp--secondary-navigation__list"
  }, children), additional && /*#__PURE__*/React__default.createElement("div", {
    className: "wfp--secondary-navigation__additional"
  }, additional)));
};

SecondaryNavigation.propTypes = {
  children: PropTypes__default.node.isRequired,

  /**
   * The CSS class name to be placed on the wrapping element
   */
  className: PropTypes__default.string,
  id: PropTypes__default.string,

  /**
   * Specify the max-width on desktop devices (same as \`Wrapper\` component)
   */
  pageWidth: PropTypes__default.oneOf(['sm', 'md', 'lg', 'full']),
  wrapperClassName: PropTypes__default.string
};
SecondaryNavigation.defaultProps = {
  pageWidth: 'narrower'
};

var prefix$l = settings.prefix;
/** Step Navigation provide indications to help users reach their destination from their current position */

function StepNavigation(_ref) {
  var _classNames;

  var children = _ref.children,
      inline = _ref.inline,
      small = _ref.small,
      vertical = _ref.vertical,
      className = _ref.className,
      role = _ref.role,
      selectedPage = _ref.selectedPage,
      onSelectionChange = _ref.onSelectionChange,
      other = _objectWithoutProperties(_ref, ["children", "inline", "small", "vertical", "className", "role", "selectedPage", "onSelectionChange"]);

  var _useState = React.useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      dropdownHidden = _useState2[0],
      setDropdownHidden = _useState2[1];

  var _useState3 = React.useState({}),
      _useState4 = _slicedToArray(_useState3, 2),
      elRefs = _useState4[0],
      setElRefs = _useState4[1];

  var getTabAt = function getTabAt(index) {
    return elRefs["tab".concat(index)] || React__default.Children.toArray(children)[index];
  };

  React__default.useEffect(function () {
    // add or remove refs
    setElRefs(function (elRefs) {
      return Array(arrLength).fill().map(function (_, i) {
        return elRefs[i] || /*#__PURE__*/React.createRef();
      });
    });
  }, [arrLength]);

  var getTabs = function getTabs() {
    return React__default.Children.map(children, function (tab) {
      return tab;
    });
  };

  var arrLength = getTabs().length;

  var handleTabClick = function handleTabClick(onSelectionChange) {
    return function (index, label, evt) {
      evt.preventDefault();
      selectTabAt(index, onSelectionChange);
    };
  };

  var handleTabAnchorFocus = function handleTabAnchorFocus(onSelectionChange) {
    return function (index) {
      var tabCount = React__default.Children.count(children) - 1;
      var tabIndex = index;

      if (index < 0) {
        tabIndex = tabCount;
      } else if (index > tabCount) {
        tabIndex = 0;
      }

      var tab = getTabAt(tabIndex);

      if (tab) {
        selectTabAt(tabIndex, onSelectionChange);

        if (tab.tabAnchor) {
          tab.tabAnchor.focus();
        }
      }
    };
  };

  var selectTabAt = function selectTabAt(index, onSelectionChange) {

    if (typeof onSelectionChange === 'function') {
      onSelectionChange(index);
    }
  };

  var tabsWithProps = getTabs().map(function (tab, index) {
    var newTab = /*#__PURE__*/React__default.cloneElement(tab, {
      index: index,
      selectedPage: selectedPage,
      handleTabClick: handleTabClick(onSelectionChange),
      handleTabAnchorFocus: handleTabAnchorFocus(onSelectionChange),
      ref: elRefs[index]
    });
    return newTab;
  });
  var classes = {
    tabs: classnames(className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefix$l, "--step-navigation"), true), _defineProperty(_classNames, "".concat(prefix$l, "--step-navigation--vertical"), vertical), _defineProperty(_classNames, "".concat(prefix$l, "--step-navigation--small"), small), _defineProperty(_classNames, "".concat(prefix$l, "--step-navigation--regular"), !small), _classNames)),
    tablist: classnames('wfp--step-navigation__nav', {
      'wfp--step-navigation__nav--hidden': dropdownHidden,
      'wfp--step-navigation__nav--inline': inline
    })
  };
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("nav", {
    className: classes.tabs,
    role: role
  }, /*#__PURE__*/React__default.createElement("ul", {
    role: "tablist",
    className: classes.tablist
  }, tabsWithProps)));
}
StepNavigation.defaultProps = {
  role: 'navigation',
  selected: 0
};
StepNavigation.propTypes = {
  /**
   * Pass in a collection of <StepNavigationItem> children to be rendered depending on the
   * currently selected tab
   */
  children: PropTypes__default.node,

  /**
   * Provide a className that is applied to the root <nav> component for the
   * <Tabs>
   */
  className: PropTypes__default.string,

  /**
   * Specify whether the StepNavigation will be displayed small
   */
  small: PropTypes__default.bool,

  /**
   * Specify whether the StepNavigation will be displayed vertically
   */
  vertical: PropTypes__default.bool,

  /**
   * By default, this value is "navigation". You can also provide an alternate
   * role if it makes sense from the accessibility-side
   */
  role: PropTypes__default.string.isRequired,

  /**
   * Provide an optional handler that is called whenever the selection
   * changes. This method is called with the index of the tab that was
   * selected
   */
  onSelectionChange: PropTypes__default.func,

  /**
   * Optionally provide an index for the currently selected <Tab>
   */
  selected: PropTypes__default.number
};

var StepNavigationItem = /*#__PURE__*/function (_React$Component) {
  _inherits(StepNavigationItem, _React$Component);

  var _super = _createSuper(StepNavigationItem);

  function StepNavigationItem() {
    _classCallCheck(this, StepNavigationItem);

    return _super.apply(this, arguments);
  }

  _createClass(StepNavigationItem, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          className = _this$props.className,
          handleTabClick = _this$props.handleTabClick,
          index = _this$props.index,
          label = _this$props.label,
          status = _this$props.status,
          helperText = _this$props.helperText,
          selectedPage = _this$props.selectedPage,
          _onClick = _this$props.onClick,
          page = _this$props.page,
          renderAnchor = _this$props.renderAnchor;
      var classes = classnames('wfp--step-navigation__nav-item', {
        'wfp--step-navigation__nav-item--before': page < selectedPage
      }, {
        'wfp--step-navigation__nav-item--selected': page === selectedPage
      }, _defineProperty({}, "wfp--step-navigation__nav-item--".concat(status), status), className);
      var anchorProps = {
        className: 'wfp--step-navigation__nav-link',
        ref: function ref(e) {
          _this.tabAnchor = e;
        }
      };
      var icon = {
        'not-started': {
          icon: icons.iconEllipsis
        },
        warning: {
          icon: icons.iconWarningGlyph
        },
        locked: {
          icon: icons.iconLocked
        },
        skip: {
          icon: icons.iconOverflowMenu
        },
        disabled: {
          icon: icons.iconErrorGlyph
        },
        complete: {
          icon: icons.iconCheckmark
        },
        summary: {
          icon: icons.iconMenu
        }
      };
      return /*#__PURE__*/React__default.createElement("li", {
        tabIndex: -1,
        className: classes,
        onClick: function onClick(evt) {
          if (status !== 'locked') {
            handleTabClick(index, label, evt);

            _onClick(evt);
          }
        },
        role: "presentation"
      }, renderAnchor ? renderAnchor(anchorProps) : /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
        className: "wfp--step-navigation__nav-item__indicator"
      }, status && page !== selectedPage ? /*#__PURE__*/React__default.createElement(Icon, {
        icon: icon[status].icon,
        width: "14",
        height: "14",
        description: "Step Item"
      }) : /*#__PURE__*/React__default.createElement("span", null, page + 1)), /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("span", {
        className: "wfp--step-navigation__nav-item__text"
      }, label), helperText && /*#__PURE__*/React__default.createElement("span", {
        className: "wfp--step-navigation__nav-item__helper-text"
      }, helperText))));
    }
  }]);

  return StepNavigationItem;
}(React__default.Component);

_defineProperty(StepNavigationItem, "propTypes", {
  className: PropTypes__default.string,
  handleTabClick: PropTypes__default.func,
  handleTabAnchorFocus: PropTypes__default.func,
  handleTabKeyDown: PropTypes__default.func,
  helperText: PropTypes__default.node,
  href: PropTypes__default.string.isRequired,
  index: PropTypes__default.number,
  label: PropTypes__default.string,
  role: PropTypes__default.string.isRequired,
  onClick: PropTypes__default.func.isRequired,
  selected: PropTypes__default.bool.isRequired,
  tabIndex: PropTypes__default.number.isRequired,

  /*
   * An optional parameter to allow overriding the anchor rendering.
   * Useful for using Tab along with react-router or other client
   * side router libraries.
   **/
  renderAnchor: PropTypes__default.func
});

_defineProperty(StepNavigationItem, "defaultProps", {
  role: 'presentation',
  label: 'provide a label',
  tabIndex: 0,
  href: '#',
  selected: false,
  onClick: function onClick() {}
});

var SelectItemGroup = function SelectItemGroup(_ref) {
  var children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      label = _ref.label,
      other = _objectWithoutProperties(_ref, ["children", "className", "disabled", "label"]);

  var classNames = classnames('wfp--select-optgroup', className);
  return /*#__PURE__*/React__default.createElement("optgroup", _extends({
    className: classNames,
    label: label,
    disabled: disabled
  }, other), children);
};

SelectItemGroup.propTypes = {
  children: PropTypes__default.node,
  className: PropTypes__default.string,
  disabled: PropTypes__default.bool,
  label: PropTypes__default.string.isRequired
};
SelectItemGroup.defaultProps = {
  disabled: false,
  label: 'Provide label'
};

var Switch = function Switch(props) {
  var className = props.className,
      index = props.index,
      kind = props.kind,
      name = props.name,
      onClick = props.onClick,
      onKeyDown = props.onKeyDown,
      selected = props.selected,
      text = props.text,
      icon = props.icon,
      href = props.href,
      other = _objectWithoutProperties(props, ["className", "index", "kind", "name", "onClick", "onKeyDown", "selected", "text", "icon", "href"]);

  var handleClick = function handleClick(e) {
    e.preventDefault();
    onClick({
      index: index,
      name: name,
      text: text
    });
  };

  var handleKeyDown = function handleKeyDown(e) {
    var key = e.key || e.which;

    if (key === 'Enter' || key === 13 || key === ' ' || key === 32) {
      onKeyDown({
        index: index,
        name: name,
        text: text
      });
    }
  };

  var classes = classnames(className, 'wfp--content-switcher-btn', {
    'wfp--content-switcher--selected': selected
  });
  var commonProps = {
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    className: classes
  };
  var btnIcon = icon ? /*#__PURE__*/React__default.cloneElement(icon, {
    className: classnames(icon.props.className, ' wfp--content-switcher__icon')
  }) : null;

  if (kind === 'button') {
    return /*#__PURE__*/React__default.createElement("button", _extends({}, other, commonProps), btnIcon, text);
  }

  return /*#__PURE__*/React__default.createElement("a", _extends({
    href: href
  }, other, commonProps), btnIcon, text);
};

Switch.propTypes = {
  className: PropTypes__default.string,
  index: PropTypes__default.number,
  kind: PropTypes__default.oneOf(['button', 'anchor']).isRequired,
  name: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.number]),
  onClick: PropTypes__default.func,
  onKeyDown: PropTypes__default.func,
  selected: PropTypes__default.bool,
  text: PropTypes__default.string.isRequired,
  icon: PropTypes__default.element,
  href: PropTypes__default.string
};
Switch.defaultProps = {
  selected: false,
  kind: 'anchor',
  text: 'Provide text',
  href: '',
  onClick: function onClick() {},
  onKeyDown: function onKeyDown() {}
};

var lodash_isequal = createCommonjsModule(function (module, exports) {
/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = isEqual;
});

var prefix$m = settings.prefix;
/** Text inputs enable the user to interact with and input content and data. This component can be used for long and short form entries. */

var TextInput = function TextInput(props) {
  var _classNames;

  var disabled = props.disabled,
      labelText = props.labelText,
      className = props.className,
      id = props.id,
      formItemClassName = props.formItemClassName,
      placeholder = props.placeholder,
      type = props.type,
      onChange = props.onChange,
      onClick = props.onClick,
      hideLabel = props.hideLabel,
      invalid = props.invalid,
      invalidText = props.invalidText,
      helperText = props.helperText,
      inputRef = props.inputRef,
      light = props.light,
      pattern = props.pattern,
      required = props.required,
      other = _objectWithoutProperties(props, ["disabled", "labelText", "className", "id", "formItemClassName", "placeholder", "type", "onChange", "onClick", "hideLabel", "invalid", "invalidText", "helperText", "inputRef", "light", "pattern", "required"]);

  var textInputClasses = classnames("".concat(prefix$m, "--text"), className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefix$m, "--text--light"), light), _defineProperty(_classNames, "".concat(prefix$m, "--text--helpertext"), helperText), _defineProperty(_classNames, "".concat(prefix$m, "--text--nolabel"), hideLabel), _defineProperty(_classNames, "".concat(prefix$m, "--text--required"), required), _classNames));
  var newProps = {
    disabled: disabled,
    id: id
  };
  return /*#__PURE__*/React__default.createElement(Input, _extends({}, props, {
    formItemClassName: formItemClassName
  }), function (e) {
    return /*#__PURE__*/React__default.createElement("input", _extends({
      pattern: pattern
    }, other, newProps, {
      ref: inputRef,
      className: textInputClasses
    }, e));
  });
};

TextInput.propTypes = {
  /**
   * Specify an optional className to be applied to the &lt;input&gt; node
   */
  className: PropTypes__default.string,

  /**
   * Optionally provide the default value of the &lt;input&gt;
   */
  defaultValue: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.number]),

  /**
   * Specify whether the &lt;input&gt; should be disabled
   */
  disabled: PropTypes__default.bool,

  /**
   * Specify an optional className to be applied to the form-item node
   */
  formItemClassName: PropTypes__default.string,

  /**
   * Specify a custom `id` for the &lt;input&gt;
   */
  id: PropTypes__default.string,

  /**
   * Provide the text that will be read by a screen reader when visiting this
   * control
   */
  labelText: PropTypes__default.node,

  /**
   * Specify a custom `name` for the &lt;input&gt;
   */
  name: PropTypes__default.string.isRequired,

  /**
   * Optionally provide an `onChange` handler that is called whenever &lt;input&gt;
   * is updated
   */
  onChange: PropTypes__default.func,

  /**
   * Optionally provide an `onClick` handler that is called whenever the
   * &lt;input&gt; is clicked
   */
  onClick: PropTypes__default.func,

  /**
   * Specify the placeholder attribute for the &lt;input&gt;
   */
  placeholder: PropTypes__default.string,

  /**
   * Specify the type of the &lt;input&gt;
   */
  type: PropTypes__default.string,

  /**
   * Specify the value of the &lt;input&gt;
   */
  value: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.number]),

  /**
   * Specify whether you want the underlying label to be visually hidden
   */
  hideLabel: PropTypes__default.bool,

  /**
   * Specify whether the control is currently invalid
   */
  invalid: PropTypes__default.bool,

  /**
   * Provide the text that is displayed when the control is in an invalid state
   */
  invalidText: PropTypes__default.string,

  /**
   * Provide additional component that is used alongside the input for customization
   */
  additional: PropTypes__default.node,

  /**
   * Provide text that is used alongside the control label for additional help
   */
  helperText: PropTypes__default.node,

  /**
   * `true` to use the light version.
   */
  light: PropTypes__default.bool
};
TextInput.defaultProps = {
  className: 'wfp--text-input',
  disabled: false,
  type: 'text',
  onChange: function onChange() {},
  onClick: function onClick() {},
  invalid: false,
  invalidText: '',
  helperText: '',
  light: false
};

var prefix$n = settings.prefix;

var defaultFormatLabel = function defaultFormatLabel(value, label) {
  return typeof label === 'function' ? label(value) : "".concat(value).concat(label);
};
/** Sliders provide a visual indication of adjustable content, where the user can move the handle along a horizontal track to increase or decrease the value. */


var Slider = /*#__PURE__*/function (_Component) {
  _inherits(Slider, _Component);

  var _super = _createSuper(Slider);

  function Slider() {
    var _this;

    _classCallCheck(this, Slider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      dragging: false,
      value: _this.props.value,
      left: 0
    });

    _defineProperty(_assertThisInitialized(_this), "updatePosition", function (evt) {
      if (evt && _this.props.disabled) {
        return;
      }

      if (evt && evt.dispatchConfig) {
        evt.persist();
      }

      if (_this.state.dragging) {
        return;
      }

      _this.setState({
        dragging: true
      });

      requestAnimationFrame(function () {
        _this.setState(function (prevState, props) {
          // Note: In FF, `evt.target` of `mousemove` event can be `HTMLDocument` which doesn't have `classList`.
          // One example is dragging out of browser viewport.
          var fromInput = evt && evt.target && evt.target.classList && evt.target.classList.contains('wfp-slider-text-input');

          var _this$calcValue = _this.calcValue(evt, prevState, props),
              left = _this$calcValue.left,
              newSliderValue = _this$calcValue.newValue;

          var newValue = fromInput ? Number(evt.target.value) : newSliderValue;

          if (prevState.left === left && prevState.value === newValue) {
            return {
              dragging: false
            };
          }

          if (typeof props.onChange === 'function') {
            props.onChange(newValue);
          }

          return {
            dragging: false,
            left: left,
            value: newValue
          };
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "calcValue", function (evt, prevState, props) {
      var min = props.min,
          max = props.max,
          step = props.step,
          stepMuliplier = props.stepMuliplier;
      var value = prevState.value;
      var range = max - min;
      var valuePercentage = (value - min) / range * 100;
      var left;
      var newValue;
      left = valuePercentage;
      newValue = value;

      if (evt) {
        var type = evt.type;

        if (type === 'keydown') {
          var direction = {
            40: -1,
            // decreasing
            37: -1,
            // decreasing
            38: 1,
            // increasing
            39: 1 // increasing

          }[evt.which];

          if (direction !== undefined) {
            var multiplier = evt.shiftKey === true ? range / step / stepMuliplier : 1;
            var stepMultiplied = step * multiplier;
            var stepSize = stepMultiplied / range * 100;
            left = valuePercentage + stepSize * direction;
            newValue = Number(value) + stepMultiplied * direction;
          }
        }

        if (type === 'mousemove' || type === 'click' || type === 'touchmove') {
          var clientX = evt.touches ? evt.touches[0].clientX : evt.clientX;

          var track = _this.track.getBoundingClientRect();

          var ratio = (clientX - track.left) / track.width;
          var rounded = min + Math.round(range * ratio / step) * step;
          left = (rounded - min) / range * 100;
          newValue = rounded;
        }
      }

      if (newValue <= Number(min)) {
        left = 0;
        newValue = min;
      }

      if (newValue >= Number(max)) {
        left = 100;
        newValue = max;
      }

      return {
        left: left,
        newValue: newValue
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseStart", function () {
      _this.element.ownerDocument.addEventListener('mousemove', _this.updatePosition);

      _this.element.ownerDocument.addEventListener('mouseup', _this.handleMouseEnd);
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseEnd", function () {
      _this.element.ownerDocument.removeEventListener('mousemove', _this.updatePosition);

      _this.element.ownerDocument.removeEventListener('mouseup', _this.handleMouseEnd);
    });

    _defineProperty(_assertThisInitialized(_this), "handleTouchStart", function () {
      _this.element.ownerDocument.addEventListener('touchmove', _this.updatePosition);

      _this.element.ownerDocument.addEventListener('touchup', _this.handleTouchEnd);

      _this.element.ownerDocument.addEventListener('touchend', _this.handleTouchEnd);

      _this.element.ownerDocument.addEventListener('touchcancel', _this.handleTouchEnd);
    });

    _defineProperty(_assertThisInitialized(_this), "handleTouchEnd", function () {
      _this.element.ownerDocument.removeEventListener('touchmove', _this.updatePosition);

      _this.element.ownerDocument.removeEventListener('touchup', _this.handleTouchEnd);

      _this.element.ownerDocument.removeEventListener('touchend', _this.handleTouchEnd);

      _this.element.ownerDocument.removeEventListener('touchcancel', _this.handleTouchEnd);
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (evt) {
      _this.setState({
        value: evt.target.value
      });

      _this.updatePosition(evt);
    });

    return _this;
  }

  _createClass(Slider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updatePosition();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if ( !lodash_isequal(nextProps, this.props)) {
        this.updatePosition();
      }

      return true;
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames,
          _this2 = this;

      var _this$props = this.props,
          ariaLabelInput = _this$props.ariaLabelInput,
          className = _this$props.className,
          hideTextInput = _this$props.hideTextInput,
          _this$props$id = _this$props.id,
          id = _this$props$id === void 0 ? this.inputId = this.inputId || "__wfp-slider_".concat(Math.random().toString(36).substr(2)) : _this$props$id,
          min = _this$props.min,
          minLabel = _this$props.minLabel,
          max = _this$props.max,
          maxLabel = _this$props.maxLabel,
          _this$props$formatLab = _this$props.formatLabel,
          formatLabel = _this$props$formatLab === void 0 ? defaultFormatLabel : _this$props$formatLab,
          fullWidth = _this$props.fullWidth,
          labelText = _this$props.labelText,
          step = _this$props.step,
          stepMuliplier = _this$props.stepMuliplier,
          inputType = _this$props.inputType,
          required = _this$props.required,
          disabled = _this$props.disabled,
          helperText = _this$props.helperText,
          invalid = _this$props.invalid,
          invalidText = _this$props.invalidText,
          hideLabel = _this$props.hideLabel,
          name = _this$props.name,
          light = _this$props.light,
          other = _objectWithoutProperties(_this$props, ["ariaLabelInput", "className", "hideTextInput", "id", "min", "minLabel", "max", "maxLabel", "formatLabel", "fullWidth", "labelText", "step", "stepMuliplier", "inputType", "required", "disabled", "helperText", "invalid", "invalidText", "hideLabel", "name", "light"]);

      var _this$state = this.state,
          value = _this$state.value,
          left = _this$state.left;
      var sliderClasses = classnames('wfp--slider', {
        'wfp--slider--disabled': disabled
      }, className);
      var sliderContainerClasses = classnames('wfp--slider-container', {
        'wfp--slider-container--full-width': fullWidth
      });
      var inputClasses = classnames('wfp--slider-text-input', {
        'wfp--text-input--light': light
      });
      var filledTrackStyle = {
        transform: "translate(0%, -50%) scaleX(".concat(left / 100, ")")
      };
      var thumbStyle = {
        left: "".concat(left, "%")
      };
      var errorId = id + '-error-msg';
      var labelClasses = classnames("".concat(prefix$n, "--label"), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix$n, "--visually-hidden"), hideLabel), _defineProperty(_classNames, "".concat(prefix$n, "--label--disabled"), other.disabled), _classNames));
      var label = labelText ? /*#__PURE__*/React__default.createElement("label", {
        htmlFor: id,
        className: labelClasses
      }, labelText) : null;
      var error = invalid ? /*#__PURE__*/React__default.createElement("div", {
        className: "wfp--form-requirement",
        id: errorId
      }, invalidText) : null;
      var helper = helperText ? /*#__PURE__*/React__default.createElement("div", {
        className: "wfp--form__helper-text"
      }, helperText) : null;
      return /*#__PURE__*/React__default.createElement("div", {
        className: "wfp--form-item"
      }, label, helper, /*#__PURE__*/React__default.createElement("div", {
        className: sliderContainerClasses
      }, /*#__PURE__*/React__default.createElement("span", {
        className: "wfp--slider__range-label"
      }, formatLabel(min, minLabel)), /*#__PURE__*/React__default.createElement("div", _extends({
        className: sliderClasses,
        ref: function ref(node) {
          _this2.element = node;
        },
        onClick: this.updatePosition,
        onKeyPress: this.updatePosition,
        role: "presentation",
        tabIndex: -1
      }, other), /*#__PURE__*/React__default.createElement("div", {
        className: "wfp--slider__track",
        ref: function ref(node) {
          _this2.track = node;
        }
      }), /*#__PURE__*/React__default.createElement("div", {
        className: "wfp--slider__filled-track",
        style: filledTrackStyle
      }), /*#__PURE__*/React__default.createElement("div", {
        className: "wfp--slider__thumb",
        role: "slider",
        id: id,
        tabIndex: 0,
        "aria-valuemax": max,
        "aria-valuemin": min,
        "aria-valuenow": value,
        style: thumbStyle,
        onMouseDown: this.handleMouseStart,
        onTouchStart: this.handleTouchStart,
        onKeyDown: this.updatePosition
      }), /*#__PURE__*/React__default.createElement("input", {
        type: "hidden",
        name: name,
        value: value,
        required: required,
        min: min,
        max: max,
        step: step,
        onChange: this.handleChange
      })), /*#__PURE__*/React__default.createElement("span", {
        className: "wfp--slider__range-label"
      }, formatLabel(max, maxLabel)), !hideTextInput && /*#__PURE__*/React__default.createElement(TextInput, {
        disabled: disabled,
        type: inputType,
        id: "input-for-slider",
        className: inputClasses,
        value: value,
        onChange: this.handleChange,
        labelText: "",
        "aria-label": ariaLabelInput
      })), error);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref, state) {
      var value = _ref.value,
          min = _ref.min,
          max = _ref.max;
      var currentValue = state.value,
          prevValue = state.prevValue,
          prevMin = state.prevMin,
          prevMax = state.prevMax;

      {
        return null;
      }
    }
  }]);

  return Slider;
}(React.Component);

_defineProperty(Slider, "propTypes", {
  /**
   * The CSS class name for the slider.
   */
  className: PropTypes__default.string,

  /**
   * `true` to hide the number input box.
   */
  hideTextInput: PropTypes__default.bool,

  /**
   * The ID of the `<input>`.
   */
  id: PropTypes__default.string,

  /**
   * The callback to get notified of change in value.
   */
  onChange: PropTypes__default.func,

  /**
   * The value.
   */
  value: PropTypes__default.number.isRequired,

  /**
   * The minimum value.
   */
  min: PropTypes__default.number.isRequired,

  /**
   * The label associated with the minimum value.
   */
  minLabel: PropTypes__default.string,

  /**
   * The maximum value.
   */
  max: PropTypes__default.number.isRequired,

  /**
   * The label associated with the maximum value.
   */
  maxLabel: PropTypes__default.string,

  /**
   * The callback to format the label associated with the minimum/maximum value.
   */
  formatLabel: PropTypes__default.func,

  /**
   * The label for the slider.
   */
  labelText: PropTypes__default.node,

  /**
   * A value determining how much the value should increase/decrease by moving the thumb by mouse.
   */
  step: PropTypes__default.number,

  /**
   * A value determining how much the value should increase/decrease by Shift+arrow keys, which will be `(max - min) / stepMuliplier`.
   */
  stepMuliplier: PropTypes__default.number,

  /**
   * The child nodes.
   */
  children: PropTypes__default.node,

  /**
   * `true` to disable this slider.
   */
  disabled: PropTypes__default.bool,

  /**
   * The `name` attribute of the `<input>`.
   */
  name: PropTypes__default.string,

  /**
   * The `type` attribute of the `<input>`.
   */
  inputType: PropTypes__default.string,

  /**
   * The `ariaLabel` for the `<input>`.
   */
  ariaLabelInput: PropTypes__default.string,

  /**
   * `true` to use the light version. (experimental)
   */
  light: PropTypes__default.bool,

  /**
   * Use the width of the parent element
   */
  fullWidth: PropTypes__default.bool
});

_defineProperty(Slider, "defaultProps", {
  fullWidth: false,
  hideTextInput: false,
  step: 1,
  stepMuliplier: 4,
  disabled: false,
  minLabel: '',
  maxLabel: '',
  inputType: 'number',
  ariaLabelInput: 'Slider number input',
  light: false
});

var ReactTablePagination = function ReactTablePagination(_ref) {
  var data = _ref.data,
      page = _ref.page,
      pageSizeOptions = _ref.pageSizeOptions,
      paginationClassName = _ref.paginationClassName,
      totalItems = _ref.totalItems,
      style = _ref.style,
      onPageChange = _ref.onPageChange,
      onPageSizeChange = _ref.onPageSizeChange,
      isLastPage = _ref.isLastPage,
      pages = _ref.pages,
      showPageSizeOptions = _ref.showPageSizeOptions,
      pageInputDisabled = _ref.pageInputDisabled,
      pageSize = _ref.pageSize,
      pagesUnknown = _ref.pagesUnknown,
      backwardText = _ref.backwardText,
      forwardText = _ref.forwardText,
      itemsPerPageText = _ref.itemsPerPageText,
      itemsPerPageFollowsText = _ref.itemsPerPageFollowsText,
      itemRangeText = _ref.itemRangeText,
      pageRangeText = _ref.pageRangeText,
      pageSizesDisabled = _ref.pageSizesDisabled,
      itemText = _ref.itemText,
      pageNumberText = _ref.pageNumberText;

  var getSafePage = function getSafePage(newPage) {
    if (isNaN(newPage)) {
      newPage = page;
    }

    return newPage;
  };

  var changePage = function changePage(page) {
    var nextPage = getSafePage(page.page - 1); // Update Page

    if (page !== nextPage) {
      onPageChange(nextPage);
    } // Update PageSize


    if (pageSize !== page.pageSize) {
      onPageSizeChange(page.pageSize);
    }
  };

  var propList = {
    isLastPage: isLastPage,
    pages: pages,
    //showPageSizeOptions,
    pageInputDisabled: pageInputDisabled,
    pageSize: pageSize,
    pagesUnknown: pagesUnknown,
    backwardText: backwardText,
    forwardText: forwardText,
    itemsPerPageText: itemsPerPageText,
    itemsPerPageFollowsText: itemsPerPageFollowsText,
    itemRangeText: itemRangeText,
    pageRangeText: pageRangeText,
    pageSizesDisabled: pageSizesDisabled,
    itemText: itemText,
    pageNumberText: pageNumberText
  };
  return /*#__PURE__*/React__default.createElement("div", {
    className: classnames(paginationClassName, '-pagination'),
    style: style
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "wfp-pagination"
  }, /*#__PURE__*/React__default.createElement(Pagination, _extends({
    onChange: changePage,
    pageSizes: pageSizeOptions,
    page: page,
    totalItems: totalItems ? totalItems : data ? data.length : undefined
  }, propList))));
};

var Tab = /*#__PURE__*/function (_React$Component) {
  _inherits(Tab, _React$Component);

  var _super = _createSuper(Tab);

  function Tab() {
    _classCallCheck(this, Tab);

    return _super.apply(this, arguments);
  }

  _createClass(Tab, [{
    key: "setTabFocus",
    value: function setTabFocus(evt) {
      var leftKey = 37;
      var rightKey = 39;

      if (evt.which === leftKey) {
        this.props.handleTabAnchorFocus(this.props.index - 1);
      } else if (evt.which === rightKey) {
        this.props.handleTabAnchorFocus(this.props.index + 1);
      } else {
        return;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          className = _this$props.className,
          disabled = _this$props.disabled,
          handleTabClick = _this$props.handleTabClick,
          handleTabAnchorFocus = _this$props.handleTabAnchorFocus,
          handleTabKeyDown = _this$props.handleTabKeyDown,
          href = _this$props.href,
          index = _this$props.index,
          label = _this$props.label,
          selected = _this$props.selected,
          tabIndex = _this$props.tabIndex,
          _onClick = _this$props.onClick,
          _onKeyDown = _this$props.onKeyDown,
          renderAnchor = _this$props.renderAnchor,
          renderListElement = _this$props.renderListElement;
      var classes = classnames('wfp--tabs__nav-item', {
        'wfp--tabs__nav-item--disabled': disabled
      }, {
        'wfp--tabs__nav-item--selected': selected
      }, className);
      var selectedClasses = classnames('wfp--tabs__nav-item', 'wfp--tabs__nav-item--selected', className);
      var anchorProps = {
        className: 'wfp--tabs__nav-link',
        href: disabled ? undefined : href,
        label: label,
        role: 'tab',
        tabIndex: tabIndex,
        'aria-selected': selected,
        ref: function ref(e) {
          _this.tabAnchor = e;
        }
      }; //  {...other}

      var liProps = {
        tabIndex: -1,
        className: classes,
        onClick: function onClick(evt) {
          if (!disabled) {
            handleTabClick(index, label, evt);

            _onClick(evt);
          }
        },
        onKeyDown: function onKeyDown(evt) {
          if (!disabled) {
            _this.setTabFocus(evt);

            handleTabKeyDown(index, label, evt);

            _onKeyDown(evt);
          }
        },
        role: 'presentation',
        selected: selected
      };
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, renderListElement ? renderListElement(_objectSpread2(_objectSpread2(_objectSpread2({}, this.props), liProps), {}, {
        anchor: anchorProps,
        selectedClasses: selectedClasses
      })) : /*#__PURE__*/React__default.createElement("li", liProps, renderAnchor ? renderAnchor(anchorProps) : disabled ? /*#__PURE__*/React__default.createElement("span", anchorProps, label) : /*#__PURE__*/React__default.createElement("a", anchorProps, label)));
    }
  }]);

  return Tab;
}(React__default.Component);

_defineProperty(Tab, "propTypes", {
  /**
   * Specify an optional className to be added to your Tab
   */
  className: PropTypes__default.string,

  /**
   * A handler that is invoked when a user clicks on the control.
   * Reserved for usage in Tabs
   */
  handleTabClick: PropTypes__default.func,

  /**
   * A handler that is invoked when a user presses left/right key.
   * Reserved for usage in Tabs
   */
  handleTabAnchorFocus: PropTypes__default.func,

  /**
   * A handler that is invoked on the key down event for the control.
   * Reserved for usage in Tabs
   */
  handleTabKeyDown: PropTypes__default.func,

  /**
   * Whether your Tab is disabled.
   */
  disabled: PropTypes__default.bool,

  /**
   * Provide a string that represents the `href` of the Tab
   */
  href: PropTypes__default.string.isRequired,

  /**
   * The index of your Tab in your Tabs. Reserved for usage in Tabs
   */
  index: PropTypes__default.number,

  /**
   * Provide the contents of your Tab
   */
  label: PropTypes__default.node,

  /**
   * Provide an accessibility role for your Tab
   */
  role: PropTypes__default.string.isRequired,

  /**
   * Provide a handler that is invoked when a user clicks on the control
   */
  onClick: PropTypes__default.func.isRequired,

  /**
   * Provide a handler that is invoked on the key down event for the control
   */
  onKeyDown: PropTypes__default.func.isRequired,

  /**
   * Whether your Tab is selected.
   * Reserved for usage in Tabs
   */
  selected: PropTypes__default.bool.isRequired,

  /**
   * Specify the tab index of the <a> node
   */
  tabIndex: PropTypes__default.number.isRequired,

  /*
   * An optional parameter to allow overriding the anchor rendering.
   * Useful for using Tab along with react-router or other client
   * side router libraries.
   **/
  renderAnchor: PropTypes__default.func,

  /*
   * An optional parameter to allow overriding the content rendering.
   **/
  renderContent: PropTypes__default.func,

  /*
   * An optional parameter to allow overriding the list element rendering.
   **/
  renderListElement: PropTypes__default.node
});

_defineProperty(Tab, "defaultProps", {
  role: 'presentation',
  label: 'provide a label',
  tabIndex: 0,
  href: '#',
  selected: false,
  onClick: function onClick() {},
  onKeyDown: function onKeyDown() {}
});

var TabContent = function TabContent(props) {
  var selected = props.selected,
      children = props.children,
      other = _objectWithoutProperties(props, ["selected", "children"]);

  return /*#__PURE__*/React__default.createElement("div", _extends({}, other, {
    selected: selected,
    hidden: !selected
  }), children);
};

TabContent.propTypes = {
  /**
   * Specify whether the TabContent is selected
   */
  selected: PropTypes__default.bool,

  /**
   * Pass in content to render inside of the TabContent
   */
  children: PropTypes__default.node
};
TabContent.defaultProps = {
  selected: false
};

/** Tabs allow users to navigate easily between views within the same context */

var Tabs = /*#__PURE__*/function (_React$Component) {
  _inherits(Tabs, _React$Component);

  var _super = _createSuper(Tabs);

  function Tabs(props) {
    var _this;

    _classCallCheck(this, Tabs);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "getTabAt", function (index) {
      return _this["tab".concat(index)] || React__default.Children.toArray(_this.props.children)[index];
    });

    _defineProperty(_assertThisInitialized(_this), "getSizes", function () {
      if (_this.rootRef.current === null || _this.rootRef.current.length > 1) {
        return null;
      }

      var rootBounds = _this.rootRef.current.getBoundingClientRect();

      var sizes = {};
      Object.values(_this.rootRef.current.children).forEach(function (el, key) {
        var bounds = el.children[0].getBoundingClientRect();
        var left = bounds.left - rootBounds.left;
        var right = rootBounds.right - bounds.right;
        sizes[key] = {
          left: left,
          right: right
        };
      });

      _this.setState({
        sizes: sizes
      });

      return sizes;
    });

    _defineProperty(_assertThisInitialized(_this), "setTabAt", function (index, tabRef) {
      _this["tab".concat(index)] = tabRef;
    });

    _defineProperty(_assertThisInitialized(_this), "handleTabClick", function (onSelectionChange) {
      return function (index, label, evt) {
        if (evt) {
          evt.preventDefault();
        }

        _this.selectTabAt(index, onSelectionChange);
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleTabKeyDown", function (onSelectionChange) {
      return function (index, label, evt) {
        var key = evt.key || evt.which;

        if (key === 'Enter' || key === 13 || key === ' ' || key === 32) {
          _this.selectTabAt(index, onSelectionChange);
        }
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleTabAnchorFocus", function (onSelectionChange) {
      return function (index) {
        var tabCount = React__default.Children.count(_this.props.children) - 1;
        var tabIndex = index;

        if (index < 0) {
          tabIndex = tabCount;
        } else if (index > tabCount) {
          tabIndex = 0;
        }

        var tab = _this.getTabAt(tabIndex);

        if (tab) {
          _this.selectTabAt(tabIndex, onSelectionChange);

          if (tab.tabAnchor) {
            tab.tabAnchor.focus();
          }
        }
      };
    });

    _defineProperty(_assertThisInitialized(_this), "selectTabAt", function (index, onSelectionChange) {
      if (_this.state.selected !== index) {
        _this.setState({
          selected: index
        });

        if (typeof onSelectionChange === 'function') {
          onSelectionChange(index);
        }
      }
    });

    _this.state = {}; // Create the ref

    _this.rootRef = /*#__PURE__*/React__default.createRef();
    return _this;
  }

  _createClass(Tabs, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getSizes();
      window.addEventListener('resize', this.getSizes);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.getSizes);
    }
  }, {
    key: "getTabs",
    value: function getTabs() {
      return React__default.Children.map(this.props.children, function (tab) {
        return tab;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          ariaLabel = _this$props.ariaLabel,
          disableAnimation = _this$props.disableAnimation,
          inline = _this$props.inline,
          className = _this$props.className,
          customTabContent = _this$props.customTabContent,
          triggerHref = _this$props.triggerHref,
          role = _this$props.role,
          onSelectionChange = _this$props.onSelectionChange,
          other = _objectWithoutProperties(_this$props, ["ariaLabel", "disableAnimation", "inline", "className", "customTabContent", "triggerHref", "role", "onSelectionChange"]);

      var _this$state = this.state,
          selected = _this$state.selected,
          sizes = _this$state.sizes;
      var tabsWithProps = this.getTabs().map(function (tab, index) {
        var newTab = /*#__PURE__*/React__default.cloneElement(tab, {
          index: index,
          selected: index === selected,
          handleTabClick: _this2.handleTabClick(onSelectionChange),
          handleTabAnchorFocus: _this2.handleTabAnchorFocus(onSelectionChange),
          ref: function ref(e) {
            _this2.setTabAt(index, e);
          },
          handleTabKeyDown: _this2.handleTabKeyDown(onSelectionChange)
        });
        return newTab;
      });
      var tabContentWithProps = !customTabContent ? React__default.Children.map(tabsWithProps, function (tab) {
        var _tab$props = tab.props,
            children = _tab$props.children,
            selected = _tab$props.selected;

        if (!children) {
          return null;
        }

        return /*#__PURE__*/React__default.createElement(TabContent, {
          className: "wfp--tab-content",
          "aria-hidden": !selected,
          hidden: !selected,
          selected: selected
        }, children);
      }) : null;
      var classes = {
        tabs: classnames('wfp--tabs', {
          'wfp--tabs--no-animation': disableAnimation
        }, className),
        tablist: classnames('wfp--tabs__nav', {
          'wfp--tabs__nav--inline': inline
        })
      };
      var sizeBar = sizes ? sizes[selected] : undefined;
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("nav", _extends({}, other, {
        className: classes.tabs,
        role: role
      }), /*#__PURE__*/React__default.createElement("div", {
        className: "wfp--tabs__nav__bar",
        style: sizeBar
      }), /*#__PURE__*/React__default.createElement("ul", {
        ref: this.rootRef,
        role: "tablist",
        className: classes.tablist
      }, tabsWithProps)), tabContentWithProps);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref, state) {
      var selected = _ref.selected;
      var prevSelected = state.prevSelected;
      return prevSelected === selected ? null : {
        selected: selected,
        prevSelected: selected
      };
    }
  }]);

  return Tabs;
}(React__default.Component);

_defineProperty(Tabs, "propTypes", {
  /**
   * Specify the text to be read by screen-readers when visiting the <Tabs>
   * component
   */
  ariaLabel: PropTypes__default.string,

  /**
   * Pass in a collection of <Tab> children to be rendered depending on the
   * currently selected tab
   */
  children: PropTypes__default.node,

  /**
   * Provide a className that is applied to the root <nav> component for the
   * <Tabs>
   */
  className: PropTypes__default.string,

  /**
   * Provide a customTabContent by using independent action triggers
   * inside the Tabs
   */
  customTabContent: PropTypes__default.bool,

  /**
   * Specify whether the animation should be used
   */
  disableAnimation: PropTypes__default.bool,

  /**
   * Specify whether the Tabs are displayed inline
   */
  inline: PropTypes__default.bool,

  /**
   * Specify whether the Tab content is hidden
   */
  hidden: PropTypes__default.bool,

  /**
   * By default, this value is "navigation". You can also provide an alternate
   * role if it makes sense from the accessibility-side
   */
  role: PropTypes__default.string.isRequired,

  /**
   * Optionally provide an `onClick` handler that is invoked when a <Tab> is
   * clicked
   */
  onClick: PropTypes__default.func,

  /**
   * Optionally provide an `onKeyDown` handler that is invoked when keyed
   * navigation is triggered
   */
  onKeyDown: PropTypes__default.func,

  /**
   * Provide an optional handler that is called whenever the selection
   * changes. This method is called with the index of the tab that was
   * selected
   */
  onSelectionChange: PropTypes__default.func,

  /**
   * Provide a string that represents the `href` for the triggered <Tab>
   */
  triggerHref: PropTypes__default.string.isRequired,

  /**
   * Optionally provide an index for the currently selected <Tab>
   */
  selected: PropTypes__default.number
});

_defineProperty(Tabs, "defaultProps", {
  role: 'navigation',
  triggerHref: '#',
  selected: 0,
  ariaLabel: 'listbox'
});

var TYPES = {
  beta: 'Beta',
  custom: 'Custom',
  wfp: 'WFP',
  error: 'error',
  success: 'Success',
  warning: 'Warning'
};
/** Tag is used to label, categorize, or organize items using keywords that describe them. */

var Tag = function Tag(_ref) {
  var children = _ref.children,
      className = _ref.className,
      type = _ref.type,
      other = _objectWithoutProperties(_ref, ["children", "className", "type"]);

  var tagClass = "wfp--tag--".concat(type);
  var tagClasses = classnames('wfp--tag', tagClass, className);
  return /*#__PURE__*/React__default.createElement("span", _extends({
    className: tagClasses
  }, other), children || TYPES[type]);
};

Tag.propTypes = {
  /**
   * Provide content to be rendered inside of a <Tag>
   */
  children: PropTypes__default.node,

  /**
   * Provide a custom className that is applied to the containing <span>
   */
  className: PropTypes__default.string,

  /**
   * Specify the type of the <Tag>
   */
  type: PropTypes__default.oneOf(Object.keys(TYPES)).isRequired
};
Tag.defaultProps = {
  type: 'wfp'
};

var prefix$o = settings.prefix;
/** A textarea is an input dedicated for a large volume of text. It may be used in a variety of components like forms, comment sections, and forums. */

var TextArea = function TextArea(_ref) {
  var _classNames;

  var className = _ref.className,
      formItemClassName = _ref.formItemClassName,
      id = _ref.id,
      labelText = _ref.labelText,
      hideLabel = _ref.hideLabel,
      _onChange = _ref.onChange,
      _onClick = _ref.onClick,
      invalid = _ref.invalid,
      invalidText = _ref.invalidText,
      inputRef = _ref.inputRef,
      helperText = _ref.helperText,
      light = _ref.light,
      other = _objectWithoutProperties(_ref, ["className", "formItemClassName", "id", "labelText", "hideLabel", "onChange", "onClick", "invalid", "invalidText", "inputRef", "helperText", "light"]);

  var textareaProps = {
    id: id,
    onChange: function onChange(evt) {
      if (!other.disabled) {
        _onChange(evt);
      }
    },
    onClick: function onClick(evt) {
      if (!other.disabled) {
        _onClick(evt);
      }
    }
  };
  var textareaClasses = classnames('wfp--text-area', className, {
    'wfp--text-area--light': light
  });
  var labelClasses = classnames("".concat(prefix$o, "--label"), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix$o, "--visually-hidden"), hideLabel), _defineProperty(_classNames, "".concat(prefix$o, "--label--disabled"), other.disabled), _classNames));
  var label = labelText ? /*#__PURE__*/React__default.createElement("label", {
    htmlFor: id,
    className: labelClasses
  }, labelText) : null;
  var helperTextClasses = classnames("".concat(prefix$o, "--form__helper-text"), _defineProperty({}, "".concat(prefix$o, "--form__helper-text--disabled"), other.disabled));
  var error = invalid ? /*#__PURE__*/React__default.createElement("div", {
    className: "wfp--form-requirement"
  }, invalidText) : null;
  var input = invalid ? /*#__PURE__*/React__default.createElement("textarea", _extends({}, other, textareaProps, {
    ref: inputRef,
    className: textareaClasses,
    "data-invalid": true
  })) : /*#__PURE__*/React__default.createElement("textarea", _extends({}, other, {
    ref: inputRef
  }, textareaProps, {
    className: textareaClasses
  }));
  var helper = helperText ? /*#__PURE__*/React__default.createElement("div", {
    className: helperTextClasses
  }, helperText) : null;
  return /*#__PURE__*/React__default.createElement(FormItem, {
    className: formItemClassName
  }, label, input, helper, error);
};

TextArea.propTypes = {
  /**
   * Provide a custom className that is applied directly to the underlying
   * &lt;textarea&gt; node
   */
  className: PropTypes__default.string,

  /**
   * Specify the `cols` attribute for the underlying &lt;textarea&gt; node
   */
  cols: PropTypes__default.number,

  /**
   * Optionally provide the default value of the &lt;textarea&gt;
   */
  defaultValue: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.number]),

  /**
   * Specify whether the control is disabled
   */
  disabled: PropTypes__default.bool,

  /**
   * Provide a unique identifier for the control
   */
  id: PropTypes__default.string,

  /**
   * Provide the text that will be read by a screen reader when visiting this
   * control
   */
  labelText: PropTypes__default.node.isRequired,

  /**
   * Optionally provide an `onChange` handler that is called whenever &lt;textarea&gt;
   * is updated
   */
  onChange: PropTypes__default.func,

  /**
   * Optionally provide an `onClick` handler that is called whenever the
   * &lt;textarea&gt; is clicked
   */
  onClick: PropTypes__default.func,

  /**
   * Specify the placeholder attribute for the &lt;textarea&gt;
   */
  placeholder: PropTypes__default.string,

  /**
   * Specify the rows attribute for the &lt;textarea&gt;
   */
  rows: PropTypes__default.number,

  /**
   * Provide the current value of the &lt;textarea&gt;
   */
  value: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.number]),

  /**
   * Specify whether the control is currently invalid
   */
  invalid: PropTypes__default.bool,

  /**
   * Provide the text that is displayed when the control is in an invalid state
   */
  invalidText: PropTypes__default.string,

  /**
   * Provide text that is used alongside the control label for additional help
   */
  helperText: PropTypes__default.node,

  /**
   * Specify whether you want the underlying label to be visually hidden
   */
  hideLabel: PropTypes__default.bool,

  /**
   * Specify whether you want the light version of this control
   */
  light: PropTypes__default.bool
};
TextArea.defaultProps = {
  disabled: false,
  onChange: function onChange() {},
  onClick: function onClick() {},
  placeholder: '',
  rows: 4,
  cols: 50,
  invalid: false,
  invalidText: '',
  helperText: '',
  light: false
};

/** A toggle is used to quickly switch between two possible states. They are commonly used for “on/off” switches */

var Toggle = function Toggle(_ref) {
  var className = _ref.className,
      defaultToggled = _ref.defaultToggled,
      toggled = _ref.toggled,
      _onChange = _ref.onChange,
      onToggle = _ref.onToggle,
      id = _ref.id,
      name = _ref.name,
      labelA = _ref.labelA,
      labelB = _ref.labelB,
      other = _objectWithoutProperties(_ref, ["className", "defaultToggled", "toggled", "onChange", "onToggle", "id", "name", "labelA", "labelB"]);

  var input;
  var wrapperClasses = classnames(_defineProperty({
    'wfp--form-item': true
  }, className, className));
  var checkedProps = {};

  if (typeof toggled !== 'undefined') {
    checkedProps.checked = toggled;
  } else {
    checkedProps.defaultChecked = defaultToggled;
  }

  var htmlFor = id ? id : name;
  return /*#__PURE__*/React__default.createElement("div", {
    className: wrapperClasses
  }, /*#__PURE__*/React__default.createElement("input", _extends({}, other, checkedProps, {
    type: "checkbox",
    id: htmlFor,
    className: "wfp--toggle",
    onChange: function onChange(evt) {
      console.log('change', evt);
      _onChange && _onChange(evt);
      onToggle(input.checked, htmlFor, evt);
    },
    ref: function ref(el) {
      input = el;
    }
  })), /*#__PURE__*/React__default.createElement("label", {
    className: "wfp--toggle__label",
    htmlFor: htmlFor
  }, /*#__PURE__*/React__default.createElement("span", {
    className: "wfp--toggle__text--left"
  }, labelA), /*#__PURE__*/React__default.createElement("span", {
    className: "wfp--toggle__appearance"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: "wfp--toggle__text--right"
  }, labelB)));
};

Toggle.propTypes = {
  /**
   * Specify a custom className to apply to the form-item node
   */
  className: PropTypes__default.string,

  /**
   * Specify whether the toggle should be on by default
   */
  defaultToggled: PropTypes__default.bool,

  /**
   * Provide an optional hook that is called when the control is toggled
   */
  onToggle: PropTypes__default.func,

  /**
   * Provide an id that unique represents the underlying `input`
   */
  id: PropTypes__default.string,

  /**
   * Provide an name that unique represents the underlying `input`
   */
  name: PropTypes__default.string.isRequired,

  /**
   * Specify whether the control is toggled
   */
  toggled: PropTypes__default.bool,

  /**
   * Specify the label for the "off" position
   */
  labelA: PropTypes__default.string.isRequired,

  /**
   * Specify the label for the "on" position
   */
  labelB: PropTypes__default.string.isRequired
};
Toggle.defaultProps = {
  defaultToggled: false,
  labelA: 'Off',
  labelB: 'On',
  name: 'toggle',
  onToggle: function onToggle() {}
};

/** The User is used inside the MainNavigation and form, and can display an avatar and username. */

var User = function User(_ref) {
  var alt = _ref.alt,
      className = _ref.className,
      children = _ref.children,
      description = _ref.description,
      ellipsis = _ref.ellipsis,
      extendedDescription = _ref.extendedDescription,
      image = _ref.image,
      showName = _ref.showName,
      small = _ref.small,
      missingImage = _ref.missingImage,
      name = _ref.name,
      other = _objectWithoutProperties(_ref, ["alt", "className", "children", "description", "ellipsis", "extendedDescription", "image", "showName", "small", "missingImage", "name"]);

  var avatar;

  if (!image && missingImage === 'avatar') {
    avatar = /*#__PURE__*/React__default.createElement(Icon, _extends({
      icon: icons.iconUser,
      fill: "#ffffff",
      width: "14",
      height: "14",
      description: alt,
      className: "wfp--user__icon wfp--user__icon--empty"
    }, other));
  } else if (image === undefined && missingImage === 'letter') {
    avatar = /*#__PURE__*/React__default.createElement("svg", {
      id: "Layer_1",
      className: "wfp--user__icon wfp--user__icon--empty wfp--user__icon--letter",
      x: "0px",
      y: "0px",
      viewBox: "0 0 25 25",
      height: "25px",
      width: "25px"
    }, /*#__PURE__*/React__default.createElement("text", {
      x: "50%",
      y: "57%",
      dominantBaseline: "middle",
      textAnchor: "middle"
    }, name && name.toUpperCase()[0]));
  } else {
    avatar = /*#__PURE__*/React__default.createElement("div", {
      className: "wfp--user__icon"
    }, /*#__PURE__*/React__default.createElement("img", {
      alt: alt,
      src: image
    }));
  }

  var classes = classnames('wfp--user', className, {
    'wfp--user--has-description': description,
    'wfp--user--has-extended-description': extendedDescription
  });
  var titleClasses = classnames({
    'wfp--user__title': true,
    'wfp--user__title--ellipsis': ellipsis,
    'wfp--user__title--small': small
  });
  return /*#__PURE__*/React__default.createElement("div", _extends({
    className: classes
  }, other), avatar, showName && /*#__PURE__*/React__default.createElement("span", {
    className: titleClasses
  }, /*#__PURE__*/React__default.createElement("span", null, name), description && /*#__PURE__*/React__default.createElement("div", {
    className: "wfp--user__description"
  }, description)), children, extendedDescription && /*#__PURE__*/React__default.createElement("div", {
    className: "wfp--user__extended-description"
  }, extendedDescription));
};

User.propTypes = {
  /**
   * The alt-text of the avatar
   */
  alt: PropTypes__default.string,

  /**
   * Sets the max-width of the user name to 130px and shows an ellipsis
   */
  ellipsis: PropTypes__default.bool,

  /**
   * Provide a custom className that is applied directly to the underlying
   * &lt;textarea&gt; node
   */
  className: PropTypes__default.string,

  /**
   * Additional description under the Name will also increase the size
   * of the Avatar use &lt;List kind="simple" small /&gt; as default content
   */
  description: PropTypes__default.node,

  /**
   * Selects the generated empty icon if no image is provided.
   * Can be `avatar` or `letter`.
   */
  missingImage: PropTypes__default.oneOf(['avatar', 'letter']),

  /**
   * Extended Description column
   */
  extendedDescription: PropTypes__default.node,

  /**
   * Url to an avatar image The size of the image is 25px * 25px.
   * Provide at least 50px * 50px to support HiDPI displays.
   */
  image: PropTypes__default.string,

  /**
   * Show the name next to the avatar
   */
  showName: PropTypes__default.bool,

  /**
   * The username which will be displayed. Usually `Firstname Lastname`.
   */
  name: PropTypes__default.string
};
User.defaultProps = {
  alt: 'User Icon',
  missingImage: 'avatar',
  ellipsis: false,
  showName: true
};

var scaleLookup = {
  thousand: {
    pow: 1000,
    defaultmaximumFractionDigits: 2,
    default: {
      after: 'T'
    }
  },
  million: {
    pow: 1000000,
    defaultmaximumFractionDigits: 1,
    default: {
      after: 'M'
    }
  },
  billion: {
    pow: 1000000000,
    defaultmaximumFractionDigits: 2,
    default: {
      after: 'B'
    }
  }
};

var Invalid = function Invalid(props) {
  return /*#__PURE__*/React__default.createElement("span", {
    className: props.className + ' invalid'
  }, "\u2013");
}; // For invalid Values

var InvalidSvg = function InvalidSvg(props) {
  return /*#__PURE__*/React__default.createElement("tspan", {
    className: props.className + ' invalid'
  }, "\u2013");
};

var StringUnit = function StringUnit(value) {
  if (value) {
    var before = value.before ? value.before + ' ' : '';
    var afterOutput = value.output && value.output.default ? value.output.default.after + '' : '';
    var after = value.after ? ' ' + value.after : '';
    return before + value.value + afterOutput + after;
  } else return '';
};

var SvgUnit = function SvgUnit(value, props) {
  var style = props.style,
      other = _objectWithoutProperties(props, ["style"]);

  if (value) return /*#__PURE__*/React__default.createElement("text", _extends({
    className: props.className
  }, other), /*#__PURE__*/React__default.createElement("tspan", {
    style: style
  }, value.before, " "), /*#__PURE__*/React__default.createElement("tspan", {
    style: style
  }, value.value), /*#__PURE__*/React__default.createElement("tspan", {
    style: style
  }, ' ', value.output ? value.output.default.after + '' : '', value.after));else return /*#__PURE__*/React__default.createElement(InvalidSvg, {
    className: props.className
  });
};

var currencyCalc = function currencyCalc(props, after, before, afterSingular, isAbsolute) {
  var children = props.children,
      input = props.input,
      output = props.output,
      minimumFractionDigits = props.minimumFractionDigits,
      maximumFractionDigits = props.maximumFractionDigits,
      _props$localeStringLa = props.localeStringLanguage,
      localeStringLanguage = _props$localeStringLa === void 0 ? 'en-EN' : _props$localeStringLa,
      calcOnly = props.calcOnly,
      string = props.string,
      svg = props.svg,
      hideZero = props.hideZero; // Remove commas

  var value = typeof children === 'string' ? children.replace(/,/g, '') : children; // Parse as float

  value = parseFloat(value); // Input

  value = value !== 0 && input && scaleLookup[input] ? scaleLookup[input].pow * value : value; // output

  var outputCalc = output && scaleLookup[output] ? scaleLookup[output] : undefined;
  value = value !== 0 && output ? value / outputCalc.pow : value;
  var minimumFractionDigitsCalculated = isAbsolute === true && output === undefined ? minimumFractionDigits === 0 :
  /*: maximumFractionDigits === 0
  ? 0*/
  typeof minimumFractionDigits === 'number' ? minimumFractionDigits : outputCalc && outputCalc.defaultmaximumFractionDigits ? outputCalc.defaultmaximumFractionDigits : 2;
  var maximumFractionDigitsCalculated = isAbsolute === true && output === undefined ? maximumFractionDigits === 0 : value <= 0.005 ? 4 : value <= 0.05 ? 3 : value <= 0.5 ? 2 : maximumFractionDigits === 0 ? 0 : typeof maximumFractionDigits === 'number' ? maximumFractionDigits : outputCalc && outputCalc.defaultmaximumFractionDigits ? outputCalc.defaultmaximumFractionDigits : 2;
  var toLocalStringConfig = {
    //maximumSignificantDigits: maximumSignificantDigits,
    minimumFractionDigits: minimumFractionDigitsCalculated,
    maximumFractionDigits: maximumFractionDigitsCalculated > minimumFractionDigitsCalculated ? maximumFractionDigitsCalculated : minimumFractionDigitsCalculated
  }; // Convert to Locale String

  value = value.toLocaleString(localeStringLanguage, toLocalStringConfig);
  var calcObject = {
    value: value,
    before: before,
    after: after,
    output: outputCalc
  };
  var className = props.className;

  if (value === '1' && afterSingular) {
    className = className + ' wfp--unit--singular';
  }

  if ((!value || value === 'NaN' || parseFloat(value) === 0) && hideZero) return false;else if (calcOnly) return calcObject;else if (svg) return SvgUnit(calcObject, props);else if (string) return StringUnit(calcObject);else if (value !== false) return /*#__PURE__*/React__default.createElement("span", {
    className: className
  }, value);else return /*#__PURE__*/React__default.createElement(Invalid, {
    className: props.className
  });
};

var percentageCalc = function percentageCalc(props, after, before) {
  var calcOnly = props.calcOnly,
      children = props.children,
      from = props.from,
      string = props.string,
      svg = props.svg,
      hideZero = props.hideZero,
      maximumSignificantDigits = props.maximumSignificantDigits,
      maximumFractionDigits = props.maximumFractionDigits; // Remove commas

  var value = typeof children === 'string' ? children.replace(/,/g, '') : children; // Parse as float

  value = parseFloat(value);

  if (parseFloat(from) === 0) {
    value = false;
  } else if (from) {
    value = value / parseFloat(from) * 100;
  } // Convert to Locale String


  value = value.toLocaleString('en-EN', {
    minimumFractionDigits: maximumSignificantDigits ? maximumSignificantDigits : 0,
    maximumSignificantDigits: maximumSignificantDigits,
    maximumFractionDigits: value <= 0.5 ? 5 : maximumFractionDigits ? maximumFractionDigits : 1
  });
  var calcObject = {
    value: value,
    before: before,
    after: after,
    output: undefined
  };
  if ((!value || value === 'NaN' || parseFloat(value) === 0) && hideZero) return false;else if (calcOnly) return calcObject;else if (svg) return SvgUnit(calcObject, props);else if (string) return StringUnit(calcObject);else if (value !== false) return /*#__PURE__*/React__default.createElement("span", {
    className: props.className
  }, value);else return /*#__PURE__*/React__default.createElement(Invalid, {
    className: props.className
  });
};

var SimpleCalc = function SimpleCalc(props, after, before) {
  var calcOnly = props.calcOnly,
      className = props.className,
      children = props.children,
      string = props.string,
      svg = props.svg,
      hideUnit = props.hideUnit; // Remove commas

  var value = children;
  var afterCalc = after ? after : '';
  var unit = hideUnit ? '' : before + children + afterCalc;
  var calcObject = {
    value: value,
    before: before,
    after: after,
    output: value + unit
  };
  if (calcOnly) return calcObject;else if (svg) return SvgUnit({
    value: value + unit,
    before: before,
    after: after
  }, props);else if (string) return StringUnit(calcObject);else if (value !== false) return /*#__PURE__*/React__default.createElement("span", {
    className: className
  }, value);
};

var YearMonthGen = function YearMonthGen(props) {
  var children = props.children;
  var value = children;
  var newDate;
  /* Generate Date from Date */

  if (typeof value === 'number' && value.length >= 7) {
    newDate = new Date(value, props);
  } else if (value.getMonth) {
    /* Use Date Object */
    newDate = value;
  } else {
    /* Generate Date from String YYYYMM */
    var year = value.toString().substring(0, 4);
    var month = parseInt(value.toString().substring(4, 7), 10) - 1;
    newDate = new Date(year, month, 1);
  }

  var monthName = newDate.toLocaleString('en-us', {
    month: 'short'
  });
  var monthNameFull = newDate.toLocaleString('en-us', {
    month: 'long'
  });
  return {
    monthName: monthName,
    monthNameFull: monthNameFull,
    year: newDate.getFullYear(),
    date: newDate
  };
};
/*const MonthYearCalcDate = ( value, showZero, showUnit ) => {
  const year = value.toString().substring(0, 4);
  const month = parseInt(value.toString().substring(4, 7), 10) - 1;
  const newDate = new Date(year, month, 1);
  return newDate
}*/
// Format YYYYMM / from 201709  => Sep 2017


var YearMonthCalc = function YearMonthCalc(props) {
  var className = props.className,
      string = props.string,
      svg = props.svg,
      calcOnly = props.calcOnly;
  var YearMonthgenerated = YearMonthGen(props);
  var calcObject = {
    value: YearMonthgenerated.monthName + ' ' + YearMonthgenerated.year,
    before: '',
    after: '',
    output: undefined
  };
  if (calcOnly) return calcObject;else if (svg) return SvgUnit(calcObject, props);else if (string) return StringUnit(calcObject);else if (calcObject !== false) return /*#__PURE__*/React__default.createElement("span", {
    className: className
  }, calcObject.value);
};

var Usd = function Usd(props) {
  return currencyCalc(props, '', 'US$');
}; // Generate Partners

var People = function People(props) {
  return currencyCalc(props, 'People', undefined, true, true);
}; // Generate Partners

var Partners = function Partners(props) {
  return currencyCalc(props, 'Partners', undefined, true, true);
}; // Generate MT

var Mt = function Mt(props) {
  return currencyCalc(props, 'MT', undefined, true);
}; // Generate MT

var Months = function Months(props) {
  return currencyCalc(props, 'Months', undefined, true, 'Month');
}; // Generate MT

var Num = function Num(props) {
  return currencyCalc(props, '');
}; // Generate Beneficiaries

var Beneficiaries = function Beneficiaries(props) {
  return currencyCalc(props, 'Beneficaries', undefined, true, true);
}; // Generate Households

var Households = function Households(props) {
  return currencyCalc(props, 'Households', undefined, true, true);
}; // Generate Trips

var Trips = function Trips(props) {
  return currencyCalc(props, 'Trips', undefined, true, true);
}; // Generate Households

var Level = function Level(props) {
  return SimpleCalc(props, '');
}; // Generate Countries

var Countries = function Countries(props) {
  return SimpleCalc(props, 'Countries');
}; // Generate None

var None = function None(props) {
  return SimpleCalc(props, '');
}; // Generate Percentage

var Percentage = function Percentage(props) {
  return percentageCalc(props, '%');
}; // Generate YearMonth

var YearMonth = function YearMonth(props) {
  return YearMonthCalc(props);
};

var components = {
  Usd: Usd,
  Partners: Partners,
  Beneficiaries: Beneficiaries,
  Households: Households,
  Months: Months,
  Mt: Mt,
  Num: Num,
  Level: Level,
  None: None,
  Trips: Trips,
  Countries: Countries,
  People: People,
  Percentage: Percentage,
  YearMonth: YearMonth
};
/** The Unit component method returns a component with a language and unit sensitive representation of this number based on [Numbers and Unit from the Editorial Guidelines](https://cdn.wfp.org/guides/editorial/content/numbers-and-units/) the [Numbers and Units Reference on developer.mozilla.org](http://cdn.wfp.org/guides/editorial/content/numbers-and-units). */

var Unit = function Unit(props) {
  var className = props.className,
      output = props.output,
      string = props.string,
      textAnchor = props.textAnchor,
      setup = props.setup;
  var type = props.type ? props.type.charAt(0).toUpperCase() + props.type.slice(1) : 'None';
  var Unit = components[type]; //const unitHideClass = setup && setup.hideUnit ? 'wfp--unit--hide' : '';

  var textAnchorCalc = textAnchor ? textAnchor : 'start';
  var unitClassName = type ? 'wfp--unit--' + type.toLowerCase() : '';
  var outputClassName = output && scaleLookup[output] ? 'wfp--unit--' + output : '';
  var setupClassName = setup ? 'wfp--unit--' + setup : '';
  var classNameCalc = 'wfp--unit ' + className + ' ' + unitClassName + ' ' + outputClassName + ' ' + setupClassName;

  if (string) {
    return Unit(props);
  }

  if (Unit === undefined) {
    /* console.warn(`The unit "${type}" is undefined`); */
    return null;
  }

  return /*#__PURE__*/React__default.createElement(Unit, _extends({}, props, {
    className: classNameCalc,
    textAnchor: textAnchorCalc
  }));
};

Unit.propTypes = {
  /**
    The value which should be displayed
  */
  children: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.number]),

  /**
    Only used for type Percentage will divide value/from string, float
  */
  from: PropTypes__default.oneOfType([PropTypes__default.string, PropTypes__default.number]),

  /**
    Hide the Unit if it's value is zero.
  */
  hideEmpty: PropTypes__default.bool,

  /**
    The minimum number of fraction digits to use. Possible values are from 0 to 20. Only used on numeric types 
  */
  minimumFractionDigits: PropTypes__default.number,

  /**
    A value between 1-21, The maximum number of significant digits to use. Possible values are from 1 to 21; the default is minimumSignificantDigits.
  */
  maximumSignificantDigits: PropTypes__default.number,

  /**
    A value between 1-21, The minimum number of fraction digits to use. Possible values are from 0 to 20. Only used on numeric types 
  */
  maximumFractionDigits: PropTypes__default.number,

  /**
   * A string with a BCP 47 language code, or an array of language codes. For the general form and interpretation of the locale argument see the [toLocaleString on developer.mozilla.org](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString) page.
   */
  locale: PropTypes__default.string,

  /**
    Render output as svg text 
  */
  svg: PropTypes__default.bool,

  /**
    The unit type  */
  type: PropTypes__default.oneOf([undefined, 'none', 'narrow', 'usd', 'partners', 'beneficiaries', 'households', 'months', 'mt', 'metricTons', 'kg', 'num', 'yearMonth', 'level', 'people', 'countries', 'percentage'])
};
Unit.defaultProps = {
  type: 'none',
  svg: false,
  localeStringLanguage: 'en-EN'
};

var prefix$p = settings.prefix;
/** Value are typically used to show KPI values and additional information. */

var Value = function Value(_ref) {
  var value = _ref.value,
      secondaryValue = _ref.secondaryValue,
      className = _ref.className,
      href = _ref.href,
      title = _ref.title,
      other = _objectWithoutProperties(_ref, ["value", "secondaryValue", "className", "href", "title"]);

  var classNames = classnames("".concat(prefix$p, "--value"), className);
  return /*#__PURE__*/React__default.createElement("div", _extends({
    className: classNames
  }, other), /*#__PURE__*/React__default.createElement("h4", {
    className: "".concat(prefix$p, "--value__title")
  }, title), /*#__PURE__*/React__default.createElement("div", {
    className: "".concat(prefix$p, "--value__primary-value")
  }, value), /*#__PURE__*/React__default.createElement("div", {
    className: "".concat(prefix$p, "--value__secondary-value")
  }, secondaryValue));
};

Value.propTypes = {
  /**
   * Provide the content for the primary Value
   */
  value: PropTypes__default.node,

  /**
   * Provide the content for the secondary Value
   */
  secondaryValue: PropTypes__default.node,

  /**
   * Provide the content for the title
   */
  title: PropTypes__default.node,

  /**
   * Provide a custom className to be applied to the containing <a> node
   */
  className: PropTypes__default.string
};

exports.BannerNavigation = BannerNavigation;
exports.BannerNavigationItem = BannerNavigationItem;
exports.BannerNavigationWithContent = BannerNavigationWithContent;
exports.Blockquote = Blockquote;
exports.Breadcrumb = Breadcrumb;
exports.BreadcrumbHome = BreadcrumbHome;
exports.BreadcrumbItem = BreadcrumbItem;
exports.Button = Button;
exports.Card = Card;
exports.Checkbox = Checkbox;
exports.ContentSwitcher = ContentSwitcher;
exports.Credits = Credits;
exports.DateRangePickerInput = DateRangePickerInput;
exports.FileUploader = FileUploader;
exports.FileUploaderButton = FileUploaderButton;
exports.FileUploaderDropContainer = FileUploaderDropContainer;
exports.FileUploaderItem = FileUploaderItem;
exports.Footer = Footer;
exports.Form = Form;
exports.FormControls = FormControls;
exports.FormError = FormError;
exports.FormGroup = FormGroup;
exports.FormHint = FormHint;
exports.FormItem = FormItem;
exports.FormLabel = FormLabel;
exports.FormWizard = FormWizard;
exports.Icon = Icon;
exports.InfoBar = InfoBar;
exports.InlineLoading = InlineLoading;
exports.Input = Input;
exports.InputGroup = InputGroup;
exports.Link = Link;
exports.List = List;
exports.ListItem = ListItem;
exports.Loading = Loading;
exports.MainNavigation = MainNavigation;
exports.MainNavigationItem = MainNavigationItem;
exports.MdxComponents = MdxComponents;
exports.Modal = Modal;
exports.ModalWrapper = ModalWrapper;
exports.Module = Module;
exports.ModuleBody = ModuleBody;
exports.ModuleFooter = ModuleFooter;
exports.ModuleHeader = ModuleHeader;
exports.NumberInput = NumberInput$1;
exports.Pagination = Pagination;
exports.RadioButton = RadioButton;
exports.ReadMore = ReadMore;
exports.ReduxFormWrapper = ReduxFormWrapper;
exports.Search = NumberInput;
exports.SecondaryNavigation = SecondaryNavigation;
exports.SecondaryNavigationTitle = SecondaryNavigationTitle;
exports.Select = Select;
exports.SelectItem = SelectItem;
exports.SelectItemGroup = SelectItemGroup;
exports.SingleDatePickerInput = SingleDatePickerInput;
exports.Slider = Slider;
exports.StepNavigation = StepNavigation;
exports.StepNavigationItem = StepNavigationItem;
exports.Story = Story;
exports.SubNavigation = SubNavigation;
exports.SubNavigationContent = SubNavigationContent;
exports.SubNavigationFilter = SubNavigationFilter;
exports.SubNavigationGroup = SubNavigationGroup;
exports.SubNavigationHeader = SubNavigationHeader;
exports.SubNavigationItem = SubNavigationItem;
exports.SubNavigationLink = SubNavigationLink;
exports.SubNavigationList = SubNavigationList;
exports.SubNavigationTitle = SubNavigationTitle;
exports.Switch = Switch;
exports.Tab = Tab;
exports.TabContent = TabContent;
exports.TablePagination = ReactTablePagination;
exports.Tabs = Tabs;
exports.Tag = Tag;
exports.TextArea = TextArea;
exports.TextInput = TextInput;
exports.Toggle = Toggle;
exports.Tooltip = Tooltip;
exports.Unit = Unit;
exports.User = User;
exports.Value = Value;
exports.Wrapper = Wrapper;
exports.notificationStyle = notificationStyle;
exports.pageWidths = pageWidths;
exports.tooltipStyle = tooltipStyle;
exports.tooltipStyleDark = tooltipStyleDark;
