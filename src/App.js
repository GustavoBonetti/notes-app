import React from 'react';
import logo from './logo.svg';
import './assets/App.scss';
import { Form } from './components/form';

function App() {
  return (
    <div className="App">
      <Form />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
