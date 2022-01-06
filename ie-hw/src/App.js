import logo from './logo.svg';
import './App.css';
import Button from './components/button';
import Counter from './components/counter';
import {useEffect} from 'react';
import UserList from './components/UserList';

function App() {
  // var Count = 0;
  // const increase = () => {
  //     Count += 1;
  //     console.log(Count);
  // }
  // const makeZero = () => {
  //   Count = 0;
  //   console.log(Count);
  // }
  // const decrease = () => {
  //   Count -= 1;
  //   console.log(Count);
  // }

  useEffect(()=>{},[])

  return (
    <div className="App">
    {/* <div><Counter></Counter></div> */}
    <div><UserList></UserList></div>

    {/* <Button text="Reset" onClick={makeZero}></Button>
    <Button text="Start" onClick={increase}></Button>
    <Button text="Down Counting" onClick={decrease}></Button> */}
    </div>
  );
}

export default App;
