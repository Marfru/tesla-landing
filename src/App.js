import React from 'react';
import './App.css';
import Container from './components/common/Container'
import Header from './components/layouts/Header'
import Content from './components/layouts/Content';

function App() {
  return (
    <div className="App">
      <Header />
       {/* <Container>
         <div className="tesla-header">
        <h1 className="tesla-header__title">Hello this is a test</h1>
        </div>
      </Container> */}
      <Content />
    </div>
  );
}

export default App;
