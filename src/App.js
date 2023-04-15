import './App.css';
import Playlist from './components/Playlist/Playlist';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';


function App() {
  return (
    <div className="App">
      <h1>Jammming</h1>
      <SearchBar />
      <div>
        <SearchResults />
        <Playlist />
      </div>
    </div>
  );
}

export default App;
