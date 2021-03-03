import React from 'react';

const Heroe = ({ data }) => {
  console.log(data);
  const pathImage = `${data.thumbnail.path}.${data.thumbnail.extension}`;
  return (
    <div>
      <h1>{data.title}</h1>
      <div className="descriptionDiv">
        <p className="description">{data.description}</p>
      </div>
      { data.creators.items[0] && <p>Autor: {data.creators.items[0].name}</p> }
      <img src={pathImage} alt="" width="200" height=""/>
    </div>
  );
};

export default Heroe;
