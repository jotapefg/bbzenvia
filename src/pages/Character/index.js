import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';
import api from '../../services/api';

import CharacterDescription from '../../components/CharacterDescription';

import { ButtonBack, Loading } from './styles';

export default function Character() {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function loadCharacter() {
      setLoading(true);

      const response = await api.get(`/characters/${id}`);
      const occupationModified = {
        occupationModified: response.data[0].occupation.join(', '),
      };
      const seasonsModified = {
        seasonsModified: response.data[0].appearance.join(', '),
      };

      const name = response.data[0].name.split(' ').join('+');
      const quoteResponse = await api.get(`/quote/random?author=${name}`);
      let quote = [];
      if (quoteResponse.data.length > 0) {
        quote = { quote: quoteResponse.data[0].quote };
      }

      const deathsResponse = await api.get(`/death-count?name=${name}`);
      const deaths = { deaths: deathsResponse.data[0].deathCount };

      const modified = {
        ...response.data[0],
        ...occupationModified,
        ...seasonsModified,
        ...quote,
        ...deaths,
      };

      setCharacter(modified);

      setLoading(false);
    }

    loadCharacter();
  }, [id]);

  if (loading) {
    return (
      <>
        <Loading>
          <div className="lds-grid">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </Loading>
      </>
    );
  }
  return (
    <>
      <ButtonBack>
        <Link to="/">
          <MdArrowBack size={36} color="#0d4d38" /> <b>Back</b>
        </Link>
      </ButtonBack>
      <CharacterDescription character={character} />
    </>
  );
}
