import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import { iconHome } from '@wfp/icons';

import Icon from '../Icon';

const BreadcrumbHome = ({ className, hometext, ...other }) => {
  const classNames = classnames('wfp--breadcrumb-home', className);
  return (
    <Icon
      icon={iconHome}
      fill="#0b77c2"
      width="14"
      height="14"
      description={hometext}
      className={classNames}
      {...other}
    />
  );
};

BreadcrumbHome.propTypes = {
  /**
   * Specify an optional className to be added to the `Home` Icon
   */
  className: PropTypes.string,
  /**
   * Specify an optional text for the `Home` Icon
   */
  hometext: PropTypes.string,
};

export default BreadcrumbHome;
