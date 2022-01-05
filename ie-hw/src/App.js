import logo from './logo.svg';
import './App.css';
import Button from './components/button';
import Counter from './components/counter';

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
  return (
    <div className="App"><Counter></Counter>
    {/* <Button text="Reset" onClick={makeZero}></Button>
    <Button text="Start" onClick={increase}></Button>
    <Button text="Down Counting" onClick={decrease}></Button> */}
    </div>
  );
}

export default App;
