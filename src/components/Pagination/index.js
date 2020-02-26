import React from 'react';

import { Container } from './styles';

export default function Pagination({
  charactersPerPage,
  totalCharacters,
  currentPage,
  paginate,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCharacters / charactersPerPage); i++) {
    pageNumbers.push(i);
  }

  function handleClick(e, pageNumber) {
    e.preventDefault();
    paginate(pageNumber);
  }

  return (
    <Container>
      <nav>
        <ul>
          {pageNumbers.map(number => {
            const active = number === currentPage;

            return (
              <li key={number} className={active ? 'active' : ''}>
                <a onClick={e => handleClick(e, number)} href="!#">
                  {number}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </Container>
  );
}
