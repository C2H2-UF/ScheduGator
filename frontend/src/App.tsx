import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './Search';



function TickerBtn(props: { onClick: () => void, value: number}) {
  return (
    <button
      className="ticker"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );

}

function App() {

  const [value, setValue] = useState<number>(0)

  const btnClick = () => {
    setValue(value+1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <SearchBar/>
        <TickerBtn onClick={() => btnClick()} value={value}/>
        <HoverBtn/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

     
  );
}

//Button that appears on hover
function HoverBtn() {
  const [style, setStyle] = useState({display: 'none'});

  return (
      <div className="hoverBtn">
          <div style={{border: '1px solid gray', width: 100, height: 20, padding: 0, margin: 1}}
               onMouseEnter={e => {
                   setStyle({display: 'inline'});
               }}
               onMouseLeave={e => {
                   setStyle({display: 'none'})
               }}
          >
            <button className = 'inLine' style={style}>x</button> 
            testing
          </div>
      </div>
  );
}


export default App