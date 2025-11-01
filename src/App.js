import React from 'react';
import CountFun from './Components/CountFun';
import CountCls from './Components/CountCls';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="container-fluid vh-100 d-flex flex-column">
      <div className="row">
        <div className="col-12 text-center py-3 bg-light text-dark">
          <h1>Assignment-2 Counter Application</h1>
        </div>
      </div>
      <div className="row flex-grow-1">
        <div className="col-6 d-flex flex-column justify-content-center align-items-center">
          <h2 className="mb-3">Function Component</h2>
          <CountFun />
        </div>

        <div className="col-6 d-flex flex-column justify-content-center align-items-center">
          <h2 className="mb-3">Class Component</h2>
          <CountCls />
        </div>
      </div>
    </div>
  );
};

export default App;

