import Counter from './counter'
import './App.css'
import './Batsman'
import Batsman from './Batsman';

function App() {

  function handleClick(){
    alert('Hey this is a button');
  }

  const handleClick2=()=>{
    alert('Hey this a another button');
  }

  const handleClick3=(num)=>
  {
    const newNum = num+5;
    alert(newNum);
  }
  return (
    <>
    <Counter></Counter>
    <Batsman></Batsman>
    <button onClick={handleClick}>CLick Me</button>
    <button onClick={handleClick2}>Click Me Again</button>
    <button onClick={()=> handleClick3(10)}>Click me</button>
    </>
  )
}

export default App
