import Editor from '@monaco-editor/react';
import { emmetHTML, emmetCSS, emmetJSX } from 'emmet-monaco-es';

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
    smoothScrolling: true,
    wordWrap: 'wordWrapColumn',
    minimap: {
      enabled: false,
    },
  };

  const EditorOnMount = () => {
    console.log(window.monaco);
    emmetHTML(window.monaco);
    emmetCSS(window.monaco);
    emmetJSX(window.monaco);
  };

  // TODO: Add Collapsing Button

  return (
    <div className={`${styles.editor}`}>
      <div className={styles.topSection}>
        <p className={styles.title}>{language}</p>
      </div>
      <Editor
        width="100%"
        height="90%"
        language={language}
        theme="vs-dark"
        value={value}
        onMount={EditorOnMount}
        onChange={setValue}
        options={options}
      />
    </div>
  );
};

export default CodeEditor;
