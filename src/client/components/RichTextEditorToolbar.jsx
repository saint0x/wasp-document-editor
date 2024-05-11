// client/components/RichTextEditorToolbar.jsx

import React from 'react';

const RichTextEditorToolbar = ({ onToggle }) => {
  const handleToggle = (style) => {
    onToggle(style);
  };

  return (
    <div>
      <button onClick={() => handleToggle('BOLD')}>Bold</button>
      <button onClick={() => handleToggle('ITALIC')}>Italic</button>
      <button onClick={() => handleToggle('UNDERLINE')}>Underline</button>
    </div>
  );
};

export default RichTextEditorToolbar;
