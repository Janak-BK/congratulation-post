import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';

function Congratulation() {
  const editor = useRef(null);
  const [content, setContent] = useState('');
  const [savedContent, setSavedContent] = useState('');
  const [isEditing, setIsEditing] = useState(true); // state to track if we are in edit mode or view mode

  const handleSave = () => {
    setSavedContent(content);
    setIsEditing(false);
    alert('Template saved!');
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="template-editor">
      <h1 className='text-red-500 text-2xl text-center'>Congratulation post</h1>
      {isEditing ? (
        <div>
         
          <JoditEditor
            ref={editor}
            value={content}
            config={{
              readonly: false, // all options from https://xdsoft.net/jodit/doc/
              height: 100
            }}
            tabIndex={1} // tabIndex of textarea
            onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            onChange={newContent => {}}
          />
          <button onClick={handleSave} className='bg-blue-700 p-1 rounded-lg'>Save Template</button>
        </div>
      ) : (
        <div>
          
          <div dangerouslySetInnerHTML={{ __html: savedContent }} />
          <button onClick={handleEdit} className='bg-blue-700 p-1 rounded-lg'>Edit Template</button>
        </div>
      )}
    </div>
  );
}

export default Congratulation;
