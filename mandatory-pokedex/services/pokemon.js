import Navbar from '../components/navbar';
import React from 'react'; 

const Pokemon = ({pokemon,index}) => {
    return(
        <div>
            {pokemon.name}
        </div>
    );
};

export default Pokemon;