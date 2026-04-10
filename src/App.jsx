import Counter from './counter'
import './App.css'
import './Batsman'
import Batsman from './Batsman';
import Api from './Api';
import { Suspense } from 'react';

const fetchUser = fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=> res.json())

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
    <Suspense fallback={<h3>Loading....</h3>}>
      <Api fetchUser={fetchUser}></Api>
    </Suspense>
    <Counter></Counter>
    <Batsman></Batsman>
    <button onClick={handleClick}>CLick Me</button>
    <button onClick={handleClick2}>Click Me Again</button>
    <button onClick={()=> handleClick3(10)}>Click me</button>
    </>
  )
}

export default App
