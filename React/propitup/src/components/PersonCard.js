import React from 'react'; 
import { useState } from 'react';

const PersonCard = (props) => {
    const {firstName, lastName, age, hair} = props;
    const  [ stateAge, setStateAge ] = useState(age);

    return(
        <div>
            <h2>{firstName} {lastName}</h2>
            <p>Age:{stateAge}</p>
            <p>Hair:{hair}</p>
            <button onClick= { () => setStateAge(stateAge + 1)}> Birthday button for  {firstName}
            </button>
            </div>
    );
}

export default PersonCard;
