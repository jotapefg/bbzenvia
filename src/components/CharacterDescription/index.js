import React from 'react';

import { Container } from './styles';

export default function CharacterDescription({ character }) {
  return (
    <Container>
      <img src={character.img} alt={character.name} />
      <div className="container-infos">
        <div className="container-infos-row">
          <div>
            <strong>{character.name}</strong>
            <p>
              <b>Birthday:</b> {character.birthday}
            </p>
            <p>
              <b>Nickname:</b> {character.nickname}
            </p>
            <p>
              <b>Occupation:</b> {character.occupation}
            </p>
            <p>
              <b>Status:</b> {character.status}
            </p>
          </div>
          <div>
            <p>
              <b>Seasons:</b> {character.seasons}
            </p>
            <p>
              <b>Portrayed:</b> {character.portrayed}
            </p>
            <p>
              <b>Responsible for:</b> {character.deaths} deaths
            </p>
          </div>
        </div>
        {character.quote ? (
          <div className="container-quote">
            <p className="random-quote">
              <b>Random Quote:</b> {character.quote}
            </p>
          </div>
        ) : (
          ''
        )}
      </div>
    </Container>
  );
}
