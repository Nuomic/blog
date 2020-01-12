import React, { useState } from 'react';
import BraftEditor from 'braft-editor';
import { Style } from 'react-imvc/component';
export default () => {
  const [editorState, setEditorState] = useState(
    BraftEditor.createEditorState(null)
  );
  const handleChange = editorState => {
    setEditorState(editorState);
  };

  return (
    <div>
      <Style name="braft" />
      <Style name="output" />
      sdddd
      <BraftEditor value={editorState} onChange={handleChange} />
    </div>
  );
};
