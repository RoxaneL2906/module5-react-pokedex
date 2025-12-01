import './App.css'

import { PokemonList } from './components/PokemonList'
import { SearchBar } from './components/SearchBar'
import { PokemonDetail } from './components/PokemonDetail'

function App() {

  return (
    <>
      <PokemonList />
      <div>
        <SearchBar />
        <PokemonDetail />
      </div>
    </>
  )
}

export default App
