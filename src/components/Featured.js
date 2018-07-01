import React from 'react';


const Featured = ({match}) => {
  let paramsName = match.params.name
  let paramsTopic = match.params.topic
  return (
    <div className="main-content">
      <h2>Featured: {paramsName}</h2>
      <p>Introducing <strong>{paramsName}</strong>, a teacher who loves teaching courses about <strong>{paramsTopic}</strong>!</p>
    </div>
  );
}

export default Featured;
