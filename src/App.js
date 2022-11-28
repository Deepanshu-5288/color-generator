import { useState } from 'react';
import './App.css';
import Values from "values.js";
import SingleColor from './SingleColor';

function App() {

  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(value).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }
  return (
    <>
    <section className='container'>
      <h3>Color generator</h3>
      <form  onSubmit={handleSubmit}>
        <input className={`${error? 'error': null}`} type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="#f15025" />
        <button type='submit' className='btn'>Submit</button>
      </form>
    </section>
    <section className='colors'>
      {list.map((color, index) =>{
        return <SingleColor key={index} {...color} index={index} hexColor={color.hex} />
      })}
    </section>
    </>
  );
}

export default App;
