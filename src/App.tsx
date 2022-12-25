import React from 'react';
//import logo from './logo.svg';
import './App.css';

import { sampleList } from './sampleList';
  

function ListDisplay() {
  let items: JSX.Element[] = [];
  for (let i = 0; i < sampleList.length; i++) {
    let displayName = sampleList[i].name;
    let item =
    <div key={i} >
      <div className='row'>
          <div className = 'col1'>
            <div className='box1'>
              { sampleList[i].id } 
            </div>
          </div>
          <div className = 'col2'>
            <div className='box2'>
              { displayName} 
            </div>
          </div>
        </div>
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
