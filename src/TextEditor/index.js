import React from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate';

import FormatToolbar from './FormatToolbar';

import Bold, { BoldButton } from './plugins/Bold';
import Italic, { ItalicButton } from './plugins/Italic';
import Underline, { UnderlineButton } from './plugins/Underline';

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: 'Some content'
              }
            ]
          }
        ]
      }
    ]
  }
});

const plugins = [Bold(), Italic(), Underline()];
const buttons = [BoldButton, ItalicButton, UnderlineButton];

class TextEditor extends React.Component {
  state = {
    value: initialValue
  };

  editor = React.createRef();

  onChange = ({ value }) => this.setState({ value });

  onMarkClick = event => {
    event.preventDefault();
    const mark = event.target.dataset.mark;
    this.editor.current.toggleMark(mark);
    this.editor.current.focus();
  };

  render() {
    return (
      <>
        <FormatToolbar>
          {buttons.map((Type, index) => (
            <Type
              key={index}
              editorRef={this.editor}
              value={this.state.value}
            />
          ))}
        </FormatToolbar>
        <Editor
          ref={this.editor}
          value={this.state.value}
          onChange={this.onChange}
          plugins={plugins}
        />
      </>
    );
  }
}

export default TextEditor;
