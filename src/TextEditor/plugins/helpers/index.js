import React from 'react';

export const MarkHotkey = options => {
  const { type, key } = options;
  return {
    onKeyDown(event, editor, next) {
      if (!event.metaKey || event.key !== key) return next();
      event.preventDefault();
      editor.toggleMark(type);
    }
  };
};

export const RenderMark = options => {
  const { type, component } = options;
  return {
    renderMark(props, editor, next) {
      return props.mark.type === type
        ? React.createElement(component, props)
        : next();
    }
  };
};
