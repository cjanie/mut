import React, { useContext, useState } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import DataLoader from './components/DataLoader';
import { Keyboard } from './components/Keyboard';
import { incremented } from './features/counter/counter-slice';
import { useFetchBreedsQuery } from './features/dogs/dogs-api-slice';

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const [numDogs, setNumDogs] = useState(10)
  const { data = [], isFetching } = useFetchBreedsQuery(numDogs); // default is 10, defined in apiSlice

  function handleClick() {
    dispatch(incremented());
  }

  return (
    <div className="App">
      <DataLoader/>
      <Keyboard/>
      <header className="App-header">
        
        <p>
          <button onClick={handleClick}>count is: {count}</button>
        </p>
        <div>
          <p>Dogs to fetch:</p>
          <select value={numDogs} onChange={(e) => setNumDogs(Number(e.target.value))}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
        <div>
          <p>Number of dogs fetched: {data.length}</p>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Picture</th>
              </tr>
            </thead>
            <tbody>
              {data.map((breed) => (
                <tr key={breed.id}>
                  <td>{breed.name}</td>
                  <td>
                    <img src={breed.image.url} alt={breed.name} height={250}/>
                  </td>
                </tr>))}
            </tbody>
          </table>
        </div>
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

export default App;
