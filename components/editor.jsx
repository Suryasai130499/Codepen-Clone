import { useRef } from 'react';
import Editor from '@monaco-editor/react';

import styles from '@/styles/editor.module.css';

const CodeEditor = ({ value, language, setValue }) => {
  const options = {
    bracketPairColorization: {
      enabled: true,
    },
    codeActionsOnSaveTimeout: 10,
    cursorBlinking: 'expand',
    cursorSmoothCaretAnimation: true,
    formatOnPaste: true,
    formatOnType: true,
    glyphMargin: true,
    smoothScrolling: true,
    wordWrap: 'wordWrapColumn',
  };

  const editorRef = useRef(null);

  function handleEditorDidMount(editor) {
    editorRef.current = editor;
  }

  return (
    <div className={styles.editor}>
      <div className={styles.topSection}>
        <p className={styles.title}>{language}</p>
        <button>O/C</button>
      </div>
      <Editor
        width="100%"
        height="90%"
        language={language}
        theme="vs-dark"
        defaultValue={value}
        onMount={handleEditorDidMount}
        onChange={setValue}
        options={options}
      />
    </div>
  );
};

export default CodeEditor;
