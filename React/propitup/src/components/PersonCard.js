import React from 'react'; 

function PersonCard(props) {
    const { firstName, lastName, age, hair} = props;
    return(
        <div>
            <h2>{firstName} {lastName}</h2>
            <p>{age}</p>
            <p>{hair}</p>
        </div>
    );
}

export default PersonCard;