import React from 'react';
import { Link } from 'react-router-dom';

import { CardContainer } from './styles';

export default function Card({ character }) {
  return (
    <CardContainer key={character.char_id}>
      <img src={character.img} alt={character.name} />
      <div>{character.status}</div>
      <strong>{character.name}</strong>
      <p>{character.nickname}</p>
      <Link to={`character/${character.char_id}`}>See more</Link>
    </CardContainer>
  );
}
