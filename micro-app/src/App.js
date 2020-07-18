import React from 'react';
// import logo from './logo.svg';
import './App.css';

// 这行代码导致qiankun无法找到子应用正确添加的最后一个window下变量
// 虽然可以通过【设置主应用中加载子应用的name与子应用的webpack output.library 值一致】来解决问题，但是增加了少量性能折损以及主子应用的耦合度
window.console = window.console || (() => {});
function App() {
  return (
    <div className="App">
      <h1>micro app</h1>
    </div>
  );
}

export default App;
