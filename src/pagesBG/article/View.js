import React, { useState } from 'react';
// import Editor from 'for-editor';
import { Style } from 'react-imvc/component';
export default ({ state }) => {
  console.log('state', state);
  const BraftEditor = state.Editor.default;
  const [editorState, setEditorState] = useState(
    BraftEditor.createEditorState(null)
  );

  const submitContent = async () => {
    const htmlContent = editorState.toHTML();
    // const result = await saveEditorContent(htmlContent)
  };

  const handleEditorChange = editorState => {
    setEditorState(editorState);
  };
  return (
    <div>
      <Style name="braft" />
      <Style name="output" />
      <BraftEditor
        value={editorState}
        onChange={handleEditorChange}
        onSave={submitContent}
      />
    </div>
  );
};
