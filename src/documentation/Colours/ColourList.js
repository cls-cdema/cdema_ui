import React from 'react';
import { List, ListItem } from '../../components/List';
import Tooltip from '../../components/Tooltip';

import { Module, ModuleBody } from '../../components/Module';
import colors from '../../globals/data/colors';
import { hex, score } from 'wcag-contrast';
import './colours.scss';

export const ColourList = ({ filter }) => {
  const filteredColors = Object.values(colors).filter(
    (ui_colors) => ui_colors.type === filter
  );

  const list = filteredColors.map((color) => (
    <Tooltip
      // options
      content={
        <div>
          {color.description && <p>{color.description}</p>}
          {color.name}
        </div>
      }>
      <li>
        <Module fullHeight noMargin light className="color__item">
          <div className="color__field" style={{ backgroundColor: color.hex }}>
            <div className="color__contrast">
              <span>A</span>
              <div>>{score(hex(color.hex, '#000000'))}</div>
            </div>
            <div className="color__contrast color__contrast--light">
              <span>A</span>
              <div>{score(hex(color.hex, '#FFFFFF'))}</div>
            </div>
          </div>
          <div
            style={{
              flexGrow: '1',
              fontSize: '0.7em',
              lineHeight: '2em',
            }}>
            <ModuleBody>
              <h4>{color.name}</h4>
              <List colon kind="simple">
                {color.shortDescription && (
                  <h4 className="wfp--story__sub-heading">
                    {color.shortDescription}
                  </h4>
                )}
                <ListItem>
                  <strong>Hex:</strong> {color.hex}
                </ListItem>

                {color.css && (
                  <ListItem>
                    <strong>CSS:</strong> .{color.css}
                  </ListItem>
                )}
              </List>
            </ModuleBody>
          </div>
        </Module>
      </li>
    </Tooltip>
  ));

  return <ul className="color--list">{list}</ul>;
};
