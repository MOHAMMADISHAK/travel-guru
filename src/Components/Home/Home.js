import React from 'react';
import Book from '../Book/Book';
import Place from '../Place/Place';

const Home = () => {
    const style = {
        display: 'flex',
       
        justifyContent: 'space-between'
    }
    const places = [
        {

            title: 'CoxBazar',
            description: 'The modern Coxs Bazar derives its name from Captain Hiram Cox, an officer of the British East India Company. The modern Coxs Bazar derives its name from Captain Hiram Cox, an officer of the British East India Company.',
            imgUrl: 'https://i.ibb.co/5LKjJ9T/Sajek.png',
            price: 119
        },
        {
            title: 'Sremangals',
            description: 'The modern Coxs Bazar derives its name from Captain Hiram Cox, an officer of the British East India Company. The modern Coxs Bazar derives its name from Captain Hiram Cox, an officer of the British East India Company.',
            imgUrl: 'https://i.ibb.co/BrhHknN/Sreemongol.png',    
            price: 149
        },
        {
            title: 'Sundarbans',
            description: 'The modern Coxs Bazar derives its name from Captain Hiram Cox, an officer of the British East India Company. The modern Coxs Bazar derives its name from Captain Hiram Cox, an officer of the British East India Company.',
            imgUrl: 'https://i.ibb.co/2krN2fB/sundorbon.png',
            price: 199
        }
    ]
    return (
       
        <div style={style}>
            {
                places.map(place => <Place  place={place}></Place>)
            }
        </div>
        
    );
};

export default Home;