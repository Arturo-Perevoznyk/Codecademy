import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: 'Your Song',
          artist: 'John Lennon',
          album: 'Brilliant',
          id: 1
        },
        {
          name: 'Mary Has Gonorrhea',
          artist: 'Billy Joe',
          album: 'My Story',
          id: 2
        },
        {
          name: 'Trala Lala La',
          artist: 'The Beatles',
          album: 'Pictures and Flamingos',
          id: 3
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>Ja<span className='highlight'>mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}/>
            <Playlist />
          </div>
        </div>
      </div>
    )
  }

}

export default App;
