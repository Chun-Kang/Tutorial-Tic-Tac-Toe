import { FC, useState } from 'react';

import './style.css';

// function MyButton({count, onClick }) {

//   return (
//     <button onClick={onClick}>Button {count}</button>
//   )
// }

function Square() {
  const  [value, setValue] = useState(null);

  function handleClick() {
    console.log('click');
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

// export const App: FC<{ name: string }> = ({ name }) => {
//   const  [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <div>
//       <h1>Hello {name}!</h1>
//       <p>Start editing to see some magic happen :)</p>
//       <MyButton count={count} onClick={handleClick}/>
//       <br/>
//       <MyButton count={count} onClick={handleClick}/>
//     </div>
//   );
// };
