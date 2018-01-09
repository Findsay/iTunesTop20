import React from 'react';
import SongList from '../components/SongList.jsx';

class SongContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      topSongs:[],
    };
  }

  render(){
    return(
      <SongList/>
    )
  }
}

export default SongContainer;
