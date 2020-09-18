import React from 'react';
import { useHistory } from 'react-router-dom';
import './Place.css'

const Place = ({place}) => {
    const history = useHistory();
    const handleBook = (title) => {
        history.push(`/book/${title}`);
    }
    return (
        <div className="container">
    <div className="card card-style" >
  <img src={place.imgUrl} className="card-img-top img-style" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">{place.title}</h5>
    <p className="card-text">{place.description}</p>
    <button type="button" onClick={() => handleBook(place.title)} className="btn btn-warning">Book Now</button>
  </div>
</div>

</div>
    );
};

export default Place;