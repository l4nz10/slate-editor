import React from 'react';
import { MarkHotkey, RenderMark } from './helpers';
import { ItalicMark } from '../Marks';
import MarkButton from './buttons/MarkButton';
import { italic } from 'react-icons-kit/feather/italic';

const TYPE = 'italic';

const Italic = options => {
  return [
    MarkHotkey({ type: TYPE, key: 'i' }),
    RenderMark({ type: TYPE, component: ItalicMark })
  ];
};

export const ItalicButton = props => (
  <MarkButton {...props} mark={TYPE} icon={italic} />
);

export default Italic;
