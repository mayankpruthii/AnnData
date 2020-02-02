import React from 'react';
import Aux from './hoc/hoc';
import AnnData from './containers/AnnData';
import './App.css';
// import Predictions from './components/Predictions/Predictions';
// import Nutrients from './components/Nutrients/Nutrients';

function App() {
  return (
    <Aux>
      <AnnData />
    </Aux>
  );
}

export default App;
