import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 0px auto;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 425px) {
      flex-wrap: wrap;
      justify-content: space-evenly;
    }

    li {
      background: #0d4d38;
      border-radius: 4px;

      @media (max-width: 425px) {
        margin-bottom: 10px;
      }

      &.active {
        background: #072f22;
      }

      a {
        display: block;
        color: #fff;
        padding: 10px 10px;
        border-radius: 4px;
        transition: background 0.6s;

        &:hover {
          background: ${darken(0.05, '#0d4d38')};
        }
      }
    }
  }
`;
