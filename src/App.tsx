// import React from 'react'
import {useRoutes} from 'react-router-dom'
import allRoutes from '../routes'
import "./App.css";

function App() {

  let router = useRoutes(allRoutes)
  return (
    <>
      <div className="grid grid-cols-12">
        {router}
      </div>
    </>
  );
}

export default App;
