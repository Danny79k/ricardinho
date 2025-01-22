import imageRickAndMorty from './img/rick-morty.png'
import './App.css';
import { useEffect, useState } from 'react'
import { Characters } from './components/Characters';
import useFetch from './components/UseFetch';

function App() {

  const [characters , setCharacters] = useState(null)
  
  const { data, loading, error} = useFetch('https://rickandmortyapi.com/api/character')

  useEffect(() => {
    if (!loading && data) setCharacters(data.results)
  },[data])

  if (loading) return (<div>Cargando...</div>)
  if (error) return (<div>Error...</div>)

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {
          characters ? (<Characters characters={characters} setCharacters={setCharacters}></Characters>) : (<><img src={imageRickAndMorty} className="Rick & Morty" alt="img-home" />
          </>)
        }
      </header>
    </div>
  );
}

export default App;
