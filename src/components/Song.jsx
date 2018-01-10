import React from 'react';

const Song = ({song}) => {
  return (
    <li>
      <h5>{song["im:name"].label}</h5>
      <h6>{song["im:artist"].label}</h6>
      <img alt="" src={song["im:image"][2].label}></img>
    </li>
  )

}

export default Song;
