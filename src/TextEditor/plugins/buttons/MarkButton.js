import React from 'react';
import PropTypes from 'prop-types';

import { Value } from 'slate';

import classNames from 'classnames';
import Icon from 'react-icons-kit';

class MarkButton extends React.Component {
  static propTypes = {
    editorRef: PropTypes.object.isRequired,
    value: PropTypes.instanceOf(Value).isRequired,
    mark: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired
  };

  handleClick = event => {
    const editor = this.props.editorRef.current;
    const mark = this.props.mark;

    event.preventDefault();

    editor.toggleMark(mark);
    editor.focus();
  };

  isActive = () => {
    const value = this.props.value;
    const mark = this.props.mark;
    return value.activeMarks.some(elem => elem.type === mark);
  };

  render() {
    const spanClass = classNames({ active: this.isActive() });
    return (
      <span className={spanClass} onClick={this.handleClick}>
        <Icon icon={this.props.icon} />
      </span>
    );
  }
}

export default MarkButton;
