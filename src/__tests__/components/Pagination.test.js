import React from 'react';
import { render } from '@testing-library/react';

import Pagination from '../../components/Pagination';

describe('tests of Pagination component', () => {
  it('should be render pagination', () => {
    const { getByText } = render(
      <Pagination charactersPerPage={1} totalCharacters={5} currentPage={1} />
    );

    expect(getByText('1')).toBeTruthy();
  });
});
