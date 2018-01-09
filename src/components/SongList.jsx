import React from 'react';
import Song from '../components/Song.jsx';

const SongList = ({songs}) => {
  if ( !songs ) {
    return null
  } else {
    const songNodes = songs.map((song, index) => {
      return ( <Song song={song} key={index} /> )
    });

    return (
      <ol>
        {songNodes}
      </ol>
    )
  }
}

export default SongList;
