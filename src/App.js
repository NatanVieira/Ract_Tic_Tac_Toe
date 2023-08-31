// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import './style.css';

// export default function Square() {
//   //return <button className="square">X</button>;
//   // Para colocar mais de um elemento JSX no mesmo componente
//   return(
//     <>
//       <div className="board-row">
//         <button className="square">1</button>
//         <button className="square">2</button>
//         <button className="square">3</button>
//       </div>
//       <div className="board-row">
//         <button className="square">4</button>
//         <button className="square">5</button>
//         <button className="square">6</button>
//       </div>
//       <div className="board-row">
//         <button className="square">7</button>
//         <button className="square">8</button>
//         <button className="square">9</button>
//       </div>
//     </>
//   );
// }

// function Square() {
//   return <button className="square">1</button>;
// }

// export default function Board() {
//   return(
//     <>
//       <div className="board-row">
//         <Square/>
//         <Square/>
//         <Square/>
//       </div>
//       <div className="board-row">
//         <Square/>
//         <Square/>
//         <Square/>
//       </div>
//       <div className="board-row">
//         <Square/>
//         <Square/>
//         <Square/>
//       </div>
//     </>

//   );
// }

// function Square() {
//   return <button className="square">1</button>;
// }

// function LineBoard() {
//   return (
//     <>
//       <div className="board-row">
//         <Square/>
//         <Square/>
//         <Square/>
//       </div>
//     </>
//   );
// }

// export default function Board() {
//   return (
//     <>
//       <LineBoard/>
//       <LineBoard/>
//       <LineBoard/>
//     </>
//   );
// }

// function Square({value}) {
//   return <button className="square">{value}</button>
// }

// // function LineBoard({minValue, maxValue}){
// //   return(
// //     <>
// //       for(let i = {minValue};i <= {maxValue};{i}++){
// //         <Square value=i/>
// //       }
// //     </>
// //   );
// // }

// export default function Board(){
//   return(
//     <>
//       <div className="board-row">
//         <Square value="1"/>
//         <Square value="2"/>
//         <Square value="3"/>
//       </div>
//       <div className="board-row">
//         <Square value="4"/>
//         <Square value="5"/>
//         <Square value="6"/>
//       </div>
//       <div className="board-row">
//         <Square value="7"/>
//         <Square value="8"/>
//         <Square value="9"/>
//       </div>
//     </>
//   );
// }


// function Square({value}) {

//   function handleClick() {
//     console.log('clicked');
//   }
//   return <button className="square" onClick={handleClick}>{value}</button>
// }



// export default function Board(){
//   return(
//     <>
//       <div className="board-row">
//         <Square value=""/>
//         <Square value=""/>
//         <Square value=""/>
//       </div>
//       <div className="board-row">
//         <Square value=""/>
//         <Square value=""/>
//         <Square value=""/>
//       </div>
//       <div className="board-row">
//         <Square value=""/>
//         <Square value=""/>
//         <Square value=""/>
//       </div>
//     </>
//   );
// }

// import { useState } from 'react';

// function Square() {
//   const [value, setValue] = useState(null);

//   function handleClick() {
//     setValue('X');
//   }
//   return <button className="square" onClick={handleClick}>{value}</button>
// }



// export default function Board(){
//   return(
//     <>
//       <div className="board-row">
//         <Square />
//         <Square />
//         <Square />
//       </div>
//       <div className="board-row">
//         <Square />
//         <Square />
//         <Square />
//       </div>
//       <div className="board-row">
//         <Square />
//         <Square />
//         <Square />
//       </div>
//     </>
//   );
// }


// import { useState } from 'react';

// export default function Board(){
//   const [squares, setSquares] = useState(Array(9).fill(null));

//   function handleClicked (){
//     const nextSquares = squares.slice();
//     nextSquares[0] = "X";
//     setSquares(nextSquares);
//   }
//   return(
//     <>
//       <div className="board-row">
//         <Square value={squares[0]} onSquareClick={handleClicked}/>
//         <Square value={squares[1]} onSquareClick={handleClicked}/>
//         <Square value={squares[2]} onSquareClick={handleClicked}/>
//       </div>
//       <div className="board-row">
//         <Square value={squares[3]} onSquareClick={handleClicked}/>
//         <Square value={squares[4]} onSquareClick={handleClicked}/>
//         <Square value={squares[5]} onSquareClick={handleClicked}/>
//       </div>
//       <div className="board-row">
//         <Square value={squares[6]} onSquareClick={handleClicked}/>
//         <Square value={squares[7]} onSquareClick={handleClicked}/>
//         <Square value={squares[8]} onSquareClick={handleClicked}/>
//       </div>
//     </>
//   );
// }

// function Square({value, onSquareClick}) {

//   // function handleClick() {
//   //   setValue('X');
//   // }
//   return <button className="square" onClick={onSquareClick}>{value}</button>
// }

// import { useState } from 'react';

// export default function Board(){
//   const [squares, setSquares] = useState(Array(9).fill(null));

//   function handleClicked (i){
//     const nextSquares = squares.slice();
//     nextSquares[i] = "X";
//     setSquares(nextSquares);
//   }
//   return(
//     <>
//       <div className="board-row">
//         <Square value={squares[0]} onSquareClick={() => handleClicked(0)}/>
//         <Square value={squares[1]} onSquareClick={() => handleClicked(1)}/>
//         <Square value={squares[2]} onSquareClick={() => handleClicked(2)}/>
//       </div>
//       <div className="board-row">
//         <Square value={squares[3]} onSquareClick={() => handleClicked(3)}/>
//         <Square value={squares[4]} onSquareClick={() => handleClicked(4)}/>
//         <Square value={squares[5]} onSquareClick={() => handleClicked(5)}/>
//       </div>
//       <div className="board-row">
//         <Square value={squares[6]} onSquareClick={() => handleClicked(6)}/>
//         <Square value={squares[7]} onSquareClick={() => handleClicked(7)}/>
//         <Square value={squares[8]} onSquareClick={() => handleClicked(8)}/>
//       </div>
//     </>
//   );
// }

// function Square({value, onSquareClick}) {

//   return <button className="square" onClick={onSquareClick}>{value}</button>
// }

import { useState } from 'react';

export default function Board(){
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const winner = calculateWinner(squares);
  let status;
  if(winner){
    status = "Winner: " + winner;
  }
  else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }


  function handleClicked (i){
    if(squares[i] || calculateWinner(squares))
      return;

    const nextSquares = squares.slice();
    if (xIsNext)
      nextSquares[i] = "X";
    else
      nextSquares[i] = "O";
    setXIsNext(!xIsNext);
    setSquares(nextSquares);
  }
  return(
    <>
      <div className="status">
        {status}
      </div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClicked(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClicked(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClicked(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClicked(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClicked(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClicked(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClicked(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClicked(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClicked(8)}/>
      </div>
    </>
  );
}

function Square({value, onSquareClick}) {

  return <button className="square" onClick={onSquareClick}>{value}</button>
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

//fonte: https://react.dev/learn/tutorial-tic-tac-toe