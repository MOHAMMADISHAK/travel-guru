import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Hotel.css'

const Hotel = (props) => {
    const { title, description, bed, capacity, bedType, price, imgUrl, rating } = props.room;
    return (
        <div className="room row">
            <div className="col-md-4 d-flex align-items-center">
                <img src={imgUrl} alt="" className="img-control img-size"></img>
            </div>
            <div className="col-md-8 description">
                <h3 >{title}</h3>
                <p>{capacity} guests {bed} beds {bed} baths.</p>
                <p>{bedType}</p>
                <p>{description}</p>
                <p><small>Rating : {rating}</small> <FontAwesomeIcon icon={faStar} /></p>
                <p><b>$</b>{price}</p>

            </div>
        </div>
    );

};

export default Hotel;