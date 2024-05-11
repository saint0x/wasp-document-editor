// client/pages/EditorPage.tsx

import React, { useState, useEffect } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
import socket from '../socket';

const EditorPage = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  useEffect(() => {
    // Subscribe to real-time updates from the server
    socket.on('document-update', (newEditorState) => {
      setEditorState(EditorState.createWithContent(newEditorState));
    });

    // Unsubscribe from socket events on component unmount
    return () => {
      socket.off('document-update');
    };
  }, []);

  const onChange = (newEditorState) => {
    setEditorState(newEditorState);
    // Send real-time updates to the server
    socket.emit('document-update', newEditorState.getCurrentContent());
  };

  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  return (
    <div>
      <h2>Document Editor</h2>
      <Editor
        editorState={editorState}
        onChange={onChange}
        handleKeyCommand={handleKeyCommand}
      />
    </div>
  );
};

export default EditorPage;
