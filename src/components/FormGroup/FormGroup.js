import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';

/** A FormGroup element is used to group several controls as well as labels  within a web form. It uses  `<fieldset>` */
const FormGroup = ({
  align,
  breakpoint,
  legendText,
  inline,
  invalid,
  children,
  className,
  inputSpacing,
  message,
  messageText,
  ...other
}) => {
  const classNamesLegend = classnames('wfp--form-group__title', className);
  const classNamesFieldset = classnames(
    'wfp--fieldset',
    {
      'wfp--fieldset__inline': inline,
      [`wfp--fieldset__align-${align}`]: align,
      [`wfp--fieldset__breakpoint-${breakpoint}`]: breakpoint,
      [`wfp--fieldset__input-spacing-${inputSpacing}`]: inputSpacing,
    },
    className
  );

  return (
    <div
      {...(invalid && { 'data-invalid': '' })}
      className={classNamesFieldset}
      {...other}>
      <legend className={classNamesLegend}>{legendText}</legend>
      <div className="wfp--fieldset__content">{children}</div>
      {message ? (
        <div className="wfp--form__requirements">{messageText}</div>
      ) : null}
    </div>
  );
};

FormGroup.propTypes = {
  /**
   * Specify the contained form elements
   */
  children: PropTypes.node,
  /**
   * Specify a breakpoint to show containing inputs vertically on mobile devices
   */
  breakpoint: PropTypes.oneOf(['none', 'sm', 'md', 'lg']),
  /**
   * Specify a title for the `FormGroup`
   */
  legendText: PropTypes.string,
  /**
   * Specify an optional className to be applied to the wrapper node
   */
  className: PropTypes.string,
  /**
   * Specify an invalid attribute for the `fieldset`
   */
  invalid: PropTypes.bool,
  /**
   * Specify if a message is shown for the `fieldset`
   */
  message: PropTypes.bool,
  /**
   * Specify a message for the `fieldset`
   */
  messageText: PropTypes.string,
  /**
   * Specify a message for the `fieldset`
   */
  align: PropTypes.oneOf(['vertical', 'horizontal']),
  /**
   * Specify the spacing between horizontaly aligned inputs
   */
  inputSpacing: PropTypes.oneOf(['none', 'md', 'lg']),
};

FormGroup.defaultProps = {
  align: 'vertical',
  invalid: false,
  inputSpacing: 'lg',
  breakpoint: 'md',
  message: false,
  messageText: '',
};

export default FormGroup;
