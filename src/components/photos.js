import React from 'react';
import axios from 'axios';
import Auxillary from './Auxillary';

class photos extends React.Component {
  state = {
    photos: [],
    selectedPhoto: null
  }

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/photos')
      .then(res => {
          const photos = res.data.slice(0, 10);
          const updatedPhotos = photos.map(photo => {
            return {
              ...photo
            }
          })
          this.setState({photos: updatedPhotos});
      })
  }

  photoSelectedHandler = (id) => {
    this.setState({selectedPhotoId: id});
  }

  renderPhotos() {
    return (
      this.state.photos.map(photo => {
        return(
          <li key={photo.id}>
            <img src={photo.thumbnailUrl} 
            alt="" 
            />
          </li>
        )
      })
    );
  }

  render() {
    return(
      <Auxillary>
      <div>
        {this.renderPhotos()}
      </div>
      </Auxillary>
    );
  }
}

export default photos;