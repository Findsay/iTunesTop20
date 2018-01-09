import React from 'react';
import SongList from '../components/SongList.jsx';

class SongContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      topSongs:[],
    };
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener('load', () => {
      if (request.status === 200) {
        const jsonString = request.responseText;
        const data = JSON.parse(jsonString);
        this.setState({ topSongs: data });
      }
    });
    request.send();
  }

  render(){
    return(
      <SongList/>
    )
  }
}

export default SongContainer;
