import React from 'react';

class FormatToolbar extends React.Component {
  render() {
    return <div className="format-toolbar">{this.props.children}</div>;
  }
}

export default FormatToolbar;
