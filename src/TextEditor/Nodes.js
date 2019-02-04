import React from 'react';

export const ParagraphNode = props => (
  <p {...props.attributes}>{props.children}</p>
);
