import React from 'react';

class SongContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      topSongs:[],
    };
  }

  render(){
    return(
      <div>
        I am a song container
      </div>
    )
  }
}

export default SongContainer;
