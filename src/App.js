import React from 'react';
import Header from './components/Header';
import Table from './components/Table';

const App = () => {
  return (
    <>
      <Header />
      <div className="tableContainer"><Table /></div>
    </>
  )
}

export default App;