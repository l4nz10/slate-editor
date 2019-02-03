import React from 'react';
import { MarkHotkey, RenderMark } from './helpers';
import { UnderlineMark } from '../Marks';
import { underline } from 'react-icons-kit/feather/underline';
import MarkButton from './buttons/MarkButton';

const TYPE = 'underline';

const Underline = options => {
  return [
    MarkHotkey({ type: TYPE, key: 'u' }),
    RenderMark({ type: TYPE, component: UnderlineMark })
  ];
};

export const UnderlineButton = props => (
  <MarkButton {...props} mark={TYPE} icon={underline} />
);

export default Underline;
