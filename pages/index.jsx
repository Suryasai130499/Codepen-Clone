import { useState, useEffect } from 'react';
import CodeEditor from '@/components/editor';
import useLocalStorage from '@/lib/hooks/useLocalStorage';
import styles from '@/styles/index.module.css';

const Home = () => {
  const [srcDoc, setSrcDoc] = useState('');
  const [html, setHTML] = useLocalStorage('html', '');
  const [css, setCSS] = useLocalStorage('css', '');
  const [js, setJS] = useLocalStorage(
    'js',
    `// import js modules using the prefix "https://cdn.skypack.dev/{package-name}" for using various other packages`,
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(
        `
        <html lang="en">
          <head>
            <style>${css}</style>
          </head>
          <body>
            ${html}
            <script type="module">
              ${js}
            </script>
          </body>
        </html>
        `,
      );
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <>
      <div className={`${styles.pane} ${styles.topPane}`}>
        <CodeEditor
          language={'html'}
          value={html}
          setValue={setHTML}
        />
        <CodeEditor
          language={'css'}
          value={css}
          setValue={setCSS}
        />
        <CodeEditor
          language={'javascript'}
          value={js}
          setValue={setJS}
        />
      </div>
      <div className={styles.pane}>
        <iframe
          srcDoc={srcDoc}
          title="Rendered Page"
          width="100%"
          height="100%"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
    </>
  );
};

export default Home;
