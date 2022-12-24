import React from 'react';
//import logo from './logo.svg';
import './App.css';

import { sampleList } from './sampleList';

function ListDisplay() {
  let items: JSX.Element[] = [];
  for (let i = 0; i < sampleList.length; i++) {
    let displayName = sampleList[i].name;
    let item =
      <div key={i}>
        <span>
          {displayName}
        </span>
      </div>

    items.push(item);
  }
  
  return <div>{items}</div>
}

function App() {
  return (
    <ListDisplay />
  );
}

export default App;
