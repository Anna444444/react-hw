import React from 'react';
import logo from './logo.svg';
import './App.css';

import NewComp from './components/NewComp';

// const name = "Timothy";
// const cl = "App";
// let firstTime = true;

// const element = (<h1 className="el">Первый элемент</h1>);
// // Создание элемента в виде объекта.
// // createElement(тег, атрибуты, содержимое тега)
// const element2 = React.createElement("h1", {className: cl}, `Элемент для ${name}`);

// function App() {
  // if (firstTime) 
  // return (
  //   <div className={cl}>
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       {element2}
  //       <p>
  //         Hello, {name}
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  // else return (<p>Не работает</p>);

function App() {
  users = [
    {
      name: "John",
      status: 
    }
  ]
  return (
    <NewComp name="Timothy"/>
  );
}

export default App;