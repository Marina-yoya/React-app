import React from 'react';
import '../styles.css';

function Animal({ name, description, isMammal }) {

  const getImageUrl = (name) => {
    return `../images/${name.toLowerCase()}.png`;
  };

  const image = getImageUrl(name);
  console.log('Image URL:', image);
  
  return (
    <div className="animal-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{isMammal ? "Mammal" : "Not a Mammal"}</p>
    </div>
  );
}

export default Animal;