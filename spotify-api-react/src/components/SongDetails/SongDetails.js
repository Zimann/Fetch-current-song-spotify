import React from 'react';
import './SongDetails.css';

const SongDetails = (props) => {

  let entireObjectResponse = props.artistInfo;
  let songDuration = entireObjectResponse.item.duration_ms;
  let secondProcessing;

  //process duration miliseconds for 'minute: seconds' format
  songDuration = ((songDuration/1000)/60).toFixed(2).toString().split('.');
  secondProcessing = Math.round(Number(songDuration[1].split('').join('.') * 6));

  if(secondProcessing === 0 ) {
    secondProcessing = '00';
  }
  
    return(
    <div className="song-details">
        <img src={entireObjectResponse.item.album.images[0].url} style={{ height: 200 }} alt ="album art"/>
        <div className="song-info-wrapper">
          <p className="artist-name">{entireObjectResponse.item.album.artists[0].name}</p>
          <p className = "song-name">{entireObjectResponse.item.name}</p>
          <p className="song-duration"><span className="minute-duration"></span>{songDuration[0]}:{secondProcessing} minutes</p>
        </div>
  </div>
  );
}

export default SongDetails;