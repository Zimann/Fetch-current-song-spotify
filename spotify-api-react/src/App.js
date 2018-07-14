import React, { Component } from 'react';
import './App.css';
import SongDetails from './components/SongDetails/SongDetails'
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

class App extends Component {

    state = {
      loggedIn: false,      
      showArtistInfo: false,
      artistObjectResponse: null,
      nowPlaying: {name: null, albumArt: ''}
    }

  //process search URL for all the queries that will follow
  getHashParams() {
    let token = new URLSearchParams(window.location.search).get('access_token');
    spotifyApi.setAccessToken(token);
    return token;
  }
  
  //get the current playing song
  getNowPlaying() {   

    spotifyApi.getMyCurrentPlaybackState()
    .then((response) => {
      if(response === ''){
        alert('Please turn on Spotify on your device and play a song!');
      } else {

        console.log(response);
        this.setState({
          loggedIn: true,
          showArtistInfo: true,
          artistObjectResponse: response,
          nowPlaying: { 
              name: response.item.name, 
              albumArt: response.item.album.images[0].url
            }
        });
      }
    })
  }
  
  componentDidMount() {
    let returnedToken = this.getHashParams();
    if(returnedToken !== null){
      this.getNowPlaying();
    }
  }

  render() {
    
    let checkSongSection = null;

    //check for songs markup after successful login
    if(this.state.loggedIn) {
      checkSongSection =  <SongDetails
      clickFunction= {()=>{this.getNowPlaying()}}
      artistInfo ={this.state.artistObjectResponse}
      />
    }

    return ( 
        <div className="App">
          <p className ="App-title">
            Spotify search
          </p>
          {!this.state.loggedIn &&
            <a className="login-link" href='http://localhost:8888/login'> Login to Spotify </a> 
          }
            <div className="Album-info">
              {checkSongSection}
            </div>
        </div>
    );
  }
}

export default App;
