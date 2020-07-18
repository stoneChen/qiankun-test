import React, { useEffect, useRef } from 'react';
import { loadMicroApp } from 'qiankun';
import './App.css';

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    loadMicroApp({
      name: 'microApp',
      entry: '//localhost:3001/',
      container: containerRef.current,
      props: {
      },
    });
  }, []);

  return (
    <div className="App">
      master app
      <div className="micro-app-container" ref={containerRef}></div>
    </div>
  );
}

export default App;
