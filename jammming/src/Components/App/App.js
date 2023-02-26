import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResult/SearchResults';
import Playlist from '../PlayList/Playlist';
import Spotify from '../../util/Spotify';

class App extends React.Component {

  //  CONSTRUCTOR
  ///////////////////////////////////////////////////////////

  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{ name: 'name1', artist: 'artist1', album: 'album1', id: 1 },
      { name: 'name2', artist: 'artist2', album: 'album2', id: 2 },
      { name: 'name3', artist: 'artist3', album: 'album3', id: 3 },
      ],
      playlistName: 'Tarzán y Champiñón Vol.II',
      playlistTracks: [{ name: 'name4', artist: 'artist4', album: 'album4', id: 4 },
      { name: 'name5', artist: 'artist5', album: 'album5', id: 5 },
      ]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
    // TO TEST - DELETE AFTER!!!!!!
    // this.testSpotify = this.testSpotify.bind(this);
  }

  //  FUNCTIONS
  ///////////////////////////////////////////////////////////

  addTrack(track) {
    if (this.state.playlistTracks.some(existingTrack => existingTrack.id === track.id)) return undefined;

    const updatedPlaylist = this.state.playlistTracks;
    updatedPlaylist.push(track);
    this.setState({ playlistTracks: updatedPlaylist });
    return undefined;
  }

  removeTrack(track) {
    let updatedPlaylist = this.state.playlistTracks;
    // updatedPlaylist = updatedPlaylist.filter(existingTrack => existingTrack.id !== track.id);
    this.setState({ playlistTracks: updatedPlaylist.filter(existingTrack => existingTrack.id !== track.id) });
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
    return trackURIs;
  }

  search(term) {
    Spotify.search(term)
      .then(searchRESULTS => {
        console.log(searchRESULTS)
        this.setState({ searchResults: searchRESULTS }) // PROBLEM!!! DOUBLE BRAQUETS NEEDED IN searchResults?????
      })
      return undefined;   
  }

  // // TO TEST - DELETE AFTER!!!!!!
  // testSpotify() {
  //   console.log('Inside testSpotify!');
  //   console.log(Spotify.search());
  // }

  //  RENDER
  ///////////////////////////////////////////////////////////

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">

          {/* TO TEST - DELETE AFTER!!!!!!
          <button style={{width:'150px', height: '70px', fontSize:'1rem'}} onClick={this.testSpotify}>Get Access Token</button> */}

          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
