/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import PrismCode from 'react-prism';
import Page from '../Page';
import Blockquote from '../../components/Blockquote';

storiesOf('Getting started|Getting started', module)
  .addParameters({
    options: { showPanel: false, isToolshown: false, sort: 'z' },
  })
  .add('CSS', () => (
    <Page title="CSS/SCSS Usage" subTitle="css styling">
      <p>
        Each components requires css. You can import the css/scss from npm or
        use it from the CDN.
      </p>

      <h3>React import</h3>
      <p>You can also import the css directly from the npm package.</p>
      <Blockquote title="Import css via react" kind="code">
        <PrismCode component="pre" className="language-css">
          {`// Import all stylesheets
import  '~@wfp/ui/assets/css/styles.css';
`}
        </PrismCode>
      </Blockquote>
      <p>Make sure you have a scss loader installed.</p>
      <Blockquote title="Import scss via react" kind="code">
        <PrismCode component="pre" className="language-css">
          {`// Import all stylesheets
import  '~@wfp/ui/src/globals/scss/styles';

// Only import the Button stylesheet
import '~@wfp/ui/src/components/Button/button';
`}
        </PrismCode>
      </Blockquote>
      <h3>SCSS</h3>
      <p>
        When using scss you can import the SCSS sources from the node_module.
        This allows you to use only parts of the SCSS, reuse common variables
        and functions from WFP UI or to override settings.
      </p>
      <Blockquote title="Use Source scss" kind="code">
        <PrismCode component="pre" className="language-css">
          {`// Sample overriding settings
$input-border-radius: 5px;
$button-border-radius: 60px;
$button-font-size: 25px;
$button-padding: 10px 25px;
$color__main: #0076FF;

// Disable css reset
$css--reset==false

// Import all stylesheets
@import "~@wfp/ui/src/globals/scss/styles";

// Only import the Button stylesheet
@import "~@wfp/ui/src/components/Button/button";

// Only use variables
@import "~@wfp/ui/src/globals/scss/vars";`}
        </PrismCode>
      </Blockquote>
      <h3>CDN Usage</h3>

      <p>
        Import the WFP UI css from the WFP CDN. Change the version number to the
        UI Kit version you are using.
      </p>

      <Blockquote title="CDN" kind="code">
        <PrismCode component="pre" className="language-html">
          {`<link
rel="stylesheet"
type="text/css"
href="https://cdn.wfp.org/guides/ui/v1.8.2/assets/css/styles.min.css"
/>`}
        </PrismCode>
      </Blockquote>
    </Page>
  ));
