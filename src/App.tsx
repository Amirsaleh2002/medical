// import React from 'react'
import "./App.css";
import {useRoutes} from 'react-router-dom'
import allRoutes from '../routes'

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
