import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import Wrapper from '../Wrapper';

const BannerNavigationItem = ({ className, children }) => {
  const wrapperClasses = classNames('wfp--banner-navigation__item', className);
  return <li className={wrapperClasses}>{children}</li>;
};

BannerNavigationItem.propTypes = {
  /**
   * The CSS class name to be placed on the wrapping element.
   */
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

/**
 * A thin bar on top of the main navigation used to crosslink among apps or pages.
 */
const BannerNavigation = ({ children, className, ...props }) => {
  const wrapperClasses = classNames('wfp--banner-navigation', className);

  return (
    <div className={wrapperClasses}>
      <Wrapper {...props}>
        <ul className="wfp--banner-navigation__list">{children}</ul>
      </Wrapper>
    </div>
  );
};

BannerNavigation.propTypes = {
  /**
   * The content usually consisting out of `BannerNavigationItem`
   */
  children: PropTypes.node.isRequired,
  /**
   * The CSS class name to be placed on the wrapping element.
   */
  className: PropTypes.string,
  /**
   * Specify the max-width on desktop devices (same as \`Wrapper\` component)
   */
  pageWidth: PropTypes.oneOf(['sm', 'md', 'lg', 'full']),
};

BannerNavigation.defaultProps = {
  pageWidth: 'md',
};

export { BannerNavigationItem, BannerNavigation };
