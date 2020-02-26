import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import Card from '../../components/Card';
import Pagination from '../../components/Pagination';

import { Container, Loading } from './styles';

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadCharacters() {
      setLoading(true);
      const response = await api.get(`/characters`);

      setCharacters(response.data);
      setLoading(false);
    }
    loadCharacters();
  }, []);

  // Get current posts
  const charactersPerPage = 3;
  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = characters.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );

  const paginate = pageNumber => setCurrentPage(pageNumber);

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
      <Container>
        <ul>
          {currentCharacters.map(char => (
            <Card key={char.char_id} character={char} />
          ))}
        </ul>
      </Container>
      <Pagination
        charactersPerPage={charactersPerPage}
        totalCharacters={characters.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </>
  );
}
