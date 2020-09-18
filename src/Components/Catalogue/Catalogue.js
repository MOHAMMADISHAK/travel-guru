import React from 'react';
import { useParams } from 'react-router-dom';
import Hotel from '../Hotel/Hotel';
import './Catalogue.css'

const Catalogue = () => {

   
    const { title } = useParams();
    const rooms = [
        {
            title: 'Light bright airy stylish apt & safe peaceful stay',
            description: 'Cancellation Flexibility available',
            imgUrl: 'https://i.ibb.co/yqmj3MQ/Rectangle-26.png',
            bed: 2,
            capacity: 4,
            bedType: 'Air Conditioned',
            price: 119,
            rating:4.5
        },
        {
            title: 'Apartment in lost Paranoma',
            description: 'Cancellation Flexibility available',
             imgUrl: 'https://i.ibb.co/09L0qCf/Rectangle-27.png',
            bed: 2,
            capacity: 4,
            bedType: 'Air Conditioned',
            price: 149,
            rating:4.5
        },
        {
            title: 'Air Lounge and Pool',
            description: 'Cancellation Flexibility available',
             imgUrl: 'https://i.ibb.co/zGhxYbY/Rectangle-28.png',
            bed: 2,
            capacity: 4,
            bedType: 'Air Conditioned',
            price: 199,
            rating:4.5
        }
    ]

    return (
        <div className="catalogue-container row">
            
            <div className="col-md-7">
                 <h1 style= {{color:'white'}}>Stay in {title}</h1>
                {      
                        rooms.map(room => <Hotel room={room}></Hotel>)                 
                }
            </div>
            <div className="col-md-5">              
            </div>

        </div>
    );
};

export default Catalogue;