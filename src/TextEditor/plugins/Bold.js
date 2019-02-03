import React from 'react';
import { MarkHotkey, RenderMark } from './helpers';
import { BoldMark } from '../Marks';
import { bold } from 'react-icons-kit/feather/bold';

import MarkButton from './buttons/MarkButton';

const TYPE = 'bold';

const Bold = options => {
  return [
    MarkHotkey({ type: TYPE, key: 'b' }),
    RenderMark({ type: TYPE, component: BoldMark })
  ];
};

export const BoldButton = props => (
  <MarkButton {...props} mark={TYPE} icon={bold} />
);

export default Bold;
