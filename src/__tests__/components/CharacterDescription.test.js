import React from 'react';
import { render } from '@testing-library/react';

import CharacterDescription from '../../components/CharacterDescription';

const character = {
  char_id: 1,
  name: 'Walter White',
  birthday: '09-07-1958',
  occupation: ['High School Chemistry Teacher', 'Meth King Pin'],
  img:
    'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
  status: 'Presumed dead',
  nickname: 'Heisenberg',
  appearance: [1, 2, 3, 4, 5],
  portrayed: 'Bryan Cranston',
  category: 'Breaking Bad',
  better_call_saul_appearance: [],
};

describe('tests of Card component', () => {
  it('should be render a card', () => {
    const { getByText } = render(
      <CharacterDescription character={character} />
    );

    expect(getByText('Walter White')).toBeTruthy();
  });
});
