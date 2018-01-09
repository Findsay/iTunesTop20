import React from 'react';
import Song from '../components/Song.jsx';

const SongList = ({songs}) => {

  return (
    <ol>
      <Song/>
    </ol>
  )

}

export default SongList;
