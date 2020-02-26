import styled from 'styled-components';
import { darken } from 'polished';

export const CardContainer = styled.li`
  background: #fff;
  position: relative;
  -webkit-box-shadow: 3px 3px 11px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 3px 11px -1px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 3px 11px -1px rgba(0, 0, 0, 0.75);
  border-radius: 0px 0px 20px 20px;
  padding: 0px 0px 20px 0px;

  img {
    width: 100%;
    height: 400px;
    -webkit-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);

    @media (max-width: 425px) {
      height: 200px;
    }
  }
  div {
    position: absolute;
    bottom: 118px;
    left: 0px;
    background: #0d4d38;
    color: #fff;
    padding: 10px 10px;

    @media (max-width: 425px) {
      top: 164px;
    }
  }
  strong {
    display: block;
    padding: 15px 0px 0px 10px;
  }
  p {
    padding: 0px 0px 0px 10px;
  }
  a {
    padding: 10px 0px;
    background: #0d4d38;
    color: #fff;
    display: block;
    margin: 10px 0px 0px 10px;
    max-width: 93%;
    text-align: center;
    border-radius: 8px;
    font-weight: bold;
    border: 0;
    font-size: 16px;
    transition: background 0.6s;

    @media (max-width: 425px) {
      width: 86%;
    }

    &:hover {
      background: ${darken(0.05, '#0d4d38')};
    }
  }
`;
