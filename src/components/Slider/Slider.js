import React, { Component } from 'react';
import { sliderValuePropSync } from '../../internal/FeatureFlags';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import isEqual from 'lodash.isequal';
import TextInput from '../TextInput';

import settings from '../../globals/js/settings';
const { prefix } = settings;

const defaultFormatLabel = (value, label) => {
  return typeof label === 'function' ? label(value) : `${value}${label}`;
};

/** Sliders provide a visual indication of adjustable content, where the user can move the handle along a horizontal track to increase or decrease the value. */

export default class Slider extends Component {
  static propTypes = {
    /**
     * The CSS class name for the slider.
     */
    className: PropTypes.string,

    /**
     * `true` to hide the number input box.
     */
    hideTextInput: PropTypes.bool,

    /**
     * The ID of the `<input>`.
     */
    id: PropTypes.string,

    /**
     * The callback to get notified of change in value.
     */
    onChange: PropTypes.func,

    /**
     * The value.
     */
    value: PropTypes.number.isRequired,

    /**
     * The minimum value.
     */
    min: PropTypes.number.isRequired,

    /**
     * The label associated with the minimum value.
     */
    minLabel: PropTypes.string,

    /**
     * The maximum value.
     */
    max: PropTypes.number.isRequired,

    /**
     * The label associated with the maximum value.
     */
    maxLabel: PropTypes.string,

    /**
     * The callback to format the label associated with the minimum/maximum value.
     */
    formatLabel: PropTypes.func,

    /**
     * The label for the slider.
     */
    labelText: PropTypes.node,

    /**
     * A value determining how much the value should increase/decrease by moving the thumb by mouse.
     */
    step: PropTypes.number,

    /**
     * A value determining how much the value should increase/decrease by Shift+arrow keys, which will be `(max - min) / stepMuliplier`.
     */
    stepMuliplier: PropTypes.number,

    /**
     * The child nodes.
     */
    children: PropTypes.node,

    /**
     * `true` to disable this slider.
     */
    disabled: PropTypes.bool,

    /**
     * The `name` attribute of the `<input>`.
     */
    name: PropTypes.string,

    /**
     * The `type` attribute of the `<input>`.
     */
    inputType: PropTypes.string,

    /**
     * The `ariaLabel` for the `<input>`.
     */
    ariaLabelInput: PropTypes.string,
    /**
     * `true` to use the light version. (experimental)
     */
    light: PropTypes.bool,
    /**
     * Use the width of the parent element
     */
    fullWidth: PropTypes.bool,
  };

  static defaultProps = {
    fullWidth: false,
    hideTextInput: false,
    step: 1,
    stepMuliplier: 4,
    disabled: false,
    minLabel: '',
    maxLabel: '',
    inputType: 'number',
    ariaLabelInput: 'Slider number input',
    light: false,
  };

  state = {
    dragging: false,
    value: this.props.value,
    left: 0,
  };

  componentDidMount() {
    this.updatePosition();
  }

  static getDerivedStateFromProps({ value, min, max }, state) {
    const { value: currentValue, prevValue, prevMin, prevMax } = state;
    if (
      !sliderValuePropSync ||
      (prevValue === value && prevMin === min && prevMax === max)
    ) {
      return null;
    }
    const effectiveValue = Math.min(
      Math.max(prevValue === value ? currentValue : value, min),
      max
    );
    return {
      value: effectiveValue,
      left: ((effectiveValue - min) / (max - min)) * 100,
      prevValue: value,
      prevMin: min,
      prevMax: max,
    };
  }

  shouldComponentUpdate(nextProps) {
    if (!sliderValuePropSync && !isEqual(nextProps, this.props)) {
      this.updatePosition();
    }
    return true;
  }

  updatePosition = (evt) => {
    if (evt && this.props.disabled) {
      return;
    }

    if (evt && evt.dispatchConfig) {
      evt.persist();
    }

    if (this.state.dragging) {
      return;
    }

    this.setState({ dragging: true });

    requestAnimationFrame(() => {
      this.setState((prevState, props) => {
        // Note: In FF, `evt.target` of `mousemove` event can be `HTMLDocument` which doesn't have `classList`.
        // One example is dragging out of browser viewport.
        const fromInput =
          evt &&
          evt.target &&
          evt.target.classList &&
          evt.target.classList.contains('wfp-slider-text-input');
        const { left, newValue: newSliderValue } = this.calcValue(
          evt,
          prevState,
          props
        );
        const newValue = fromInput ? Number(evt.target.value) : newSliderValue;
        if (prevState.left === left && prevState.value === newValue) {
          return { dragging: false };
        }
        if (typeof props.onChange === 'function') {
          props.onChange(newValue);
        }
        return {
          dragging: false,
          left,
          value: newValue,
        };
      });
    });
  };

  calcValue = (evt, prevState, props) => {
    const { min, max, step, stepMuliplier } = props;

    const { value } = prevState;

    const range = max - min;
    const valuePercentage = ((value - min) / range) * 100;

    let left;
    let newValue;
    left = valuePercentage;
    newValue = value;

    if (evt) {
      const { type } = evt;

      if (type === 'keydown') {
        const direction = {
          40: -1, // decreasing
          37: -1, // decreasing
          38: 1, // increasing
          39: 1, // increasing
        }[evt.which];

        if (direction !== undefined) {
          const multiplier =
            evt.shiftKey === true ? range / step / stepMuliplier : 1;
          const stepMultiplied = step * multiplier;
          const stepSize = (stepMultiplied / range) * 100;
          left = valuePercentage + stepSize * direction;
          newValue = Number(value) + stepMultiplied * direction;
        }
      }
      if (type === 'mousemove' || type === 'click' || type === 'touchmove') {
        const clientX = evt.touches ? evt.touches[0].clientX : evt.clientX;
        const track = this.track.getBoundingClientRect();
        const ratio = (clientX - track.left) / track.width;
        const rounded = min + Math.round((range * ratio) / step) * step;
        left = ((rounded - min) / range) * 100;
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

    return { left, newValue };
  };

  handleMouseStart = () => {
    this.element.ownerDocument.addEventListener(
      'mousemove',
      this.updatePosition
    );
    this.element.ownerDocument.addEventListener('mouseup', this.handleMouseEnd);
  };

  handleMouseEnd = () => {
    this.element.ownerDocument.removeEventListener(
      'mousemove',
      this.updatePosition
    );
    this.element.ownerDocument.removeEventListener(
      'mouseup',
      this.handleMouseEnd
    );
  };

  handleTouchStart = () => {
    this.element.ownerDocument.addEventListener(
      'touchmove',
      this.updatePosition
    );
    this.element.ownerDocument.addEventListener('touchup', this.handleTouchEnd);
    this.element.ownerDocument.addEventListener(
      'touchend',
      this.handleTouchEnd
    );
    this.element.ownerDocument.addEventListener(
      'touchcancel',
      this.handleTouchEnd
    );
  };

  handleTouchEnd = () => {
    this.element.ownerDocument.removeEventListener(
      'touchmove',
      this.updatePosition
    );
    this.element.ownerDocument.removeEventListener(
      'touchup',
      this.handleTouchEnd
    );
    this.element.ownerDocument.removeEventListener(
      'touchend',
      this.handleTouchEnd
    );
    this.element.ownerDocument.removeEventListener(
      'touchcancel',
      this.handleTouchEnd
    );
  };

  handleChange = (evt) => {
    this.setState({ value: evt.target.value });
    this.updatePosition(evt);
  };

  render() {
    const {
      ariaLabelInput,
      className,
      hideTextInput,
      id = (this.inputId =
        this.inputId || `__wfp-slider_${Math.random().toString(36).substr(2)}`),
      min,
      minLabel,
      max,
      maxLabel,
      formatLabel = defaultFormatLabel,
      fullWidth,
      labelText,
      step,
      stepMuliplier, // eslint-disable-line no-unused-vars
      inputType,
      required,
      disabled,
      helperText,
      invalid,
      invalidText,
      hideLabel,
      name,
      light,
      ...other
    } = this.props;

    const { value, left } = this.state;

    const sliderClasses = classNames(
      'wfp--slider',
      { 'wfp--slider--disabled': disabled },
      className
    );

    const sliderContainerClasses = classNames('wfp--slider-container', {
      'wfp--slider-container--full-width': fullWidth,
    });

    const inputClasses = classNames('wfp--slider-text-input', {
      'wfp--text-input--light': light,
    });

    const filledTrackStyle = {
      transform: `translate(0%, -50%) scaleX(${left / 100})`,
    };
    const thumbStyle = {
      left: `${left}%`,
    };

    const errorId = id + '-error-msg';

    const labelClasses = classNames(`${prefix}--label`, {
      [`${prefix}--visually-hidden`]: hideLabel,
      [`${prefix}--label--disabled`]: other.disabled,
    });

    const label = labelText ? (
      <label htmlFor={id} className={labelClasses}>
        {labelText}
      </label>
    ) : null;

    const error = invalid ? (
      <div className="wfp--form-requirement" id={errorId}>
        {invalidText}
      </div>
    ) : null;

    const helper = helperText ? (
      <div className="wfp--form__helper-text">{helperText}</div>
    ) : null;

    return (
      <div className="wfp--form-item">
        {label}
        {helper}
        <div className={sliderContainerClasses}>
          <span className="wfp--slider__range-label">
            {formatLabel(min, minLabel)}
          </span>
          <div
            className={sliderClasses}
            ref={(node) => {
              this.element = node;
            }}
            onClick={this.updatePosition}
            onKeyPress={this.updatePosition}
            role="presentation"
            tabIndex={-1}
            {...other}>
            <div
              className="wfp--slider__track"
              ref={(node) => {
                this.track = node;
              }}
            />
            <div
              className="wfp--slider__filled-track"
              style={filledTrackStyle}
            />
            <div
              className="wfp--slider__thumb"
              role="slider"
              id={id}
              tabIndex={0}
              aria-valuemax={max}
              aria-valuemin={min}
              aria-valuenow={value}
              style={thumbStyle}
              onMouseDown={this.handleMouseStart}
              onTouchStart={this.handleTouchStart}
              onKeyDown={this.updatePosition}
            />
            <input
              type="hidden"
              name={name}
              value={value}
              required={required}
              min={min}
              max={max}
              step={step}
              onChange={this.handleChange}
            />
          </div>
          <span className="wfp--slider__range-label">
            {formatLabel(max, maxLabel)}
          </span>
          {!hideTextInput && (
            <TextInput
              disabled={disabled}
              type={inputType}
              id="input-for-slider"
              className={inputClasses}
              value={value}
              onChange={this.handleChange}
              labelText=""
              aria-label={ariaLabelInput}
            />
          )}
        </div>
        {error}
      </div>
    );
  }
}
