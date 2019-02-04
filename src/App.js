import React, { Component } from 'react';
import './App.css';
import TextEditor from './TextEditor';

class App extends Component {
  render() {
    return (
      <div className="editor-container">
        <TextEditor />
      </div>
    );
  }
}

export default App;
