// client/pages/CollaborationPage.tsx

import React, { useState, useEffect } from 'react';
import { Editor, EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';
import socket from '../socket';

const CollaborationPage = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  useEffect(() => {
    // Subscribe to real-time updates from the server
    socket.on('document-update', (newEditorState) => {
      setEditorState(EditorState.createWithContent(convertFromRaw(newEditorState)));
    });

    // Unsubscribe from socket events on component unmount
    return () => {
      socket.off('document-update');
    };
  }, []);

  const onChange = (newEditorState) => {
    setEditorState(newEditorState);
    // Send real-time updates to the server
    socket.emit('document-update', convertToRaw(newEditorState.getCurrentContent()));
  };

  return (
    <div>
      <h2>Collaboration Editor</h2>
      <Editor
        editorState={editorState}
        onChange={onChange}
      />
    </div>
  );
};

export default CollaborationPage;
