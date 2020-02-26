import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0px auto 0px;
  background: #fff;
  display: flex;
  flex-direction: row;
  -webkit-box-shadow: 3px 3px 11px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 3px 11px -1px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 3px 11px -1px rgba(0, 0, 0, 0.75);
  border-radius: 0px 30px 30px 0px;

  @media (max-width: 425px) {
    width: 94%;
  }

  img {
    width: 300px;
    height: 430px;
    flex-basis: 300px;

    -webkit-box-shadow: 3px 3px 11px -1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 3px 3px 11px -1px rgba(0, 0, 0, 0.75);
    box-shadow: 3px 3px 11px -1px rgba(0, 0, 0, 0.75);

    @media (max-width: 425px) {
      width: 180px;
      height: 300px;
      flex-basis: 180px;
    }
  }

  .container-infos {
    width: 60%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;

    .container-infos-row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 30px;

      @media (max-width: 425px) {
        flex-direction: column;
        align-items: center;
        margin-bottom: 9px;
      }

      div {
        width: 50%;
        @media (max-width: 425px) {
          width: 90%;
        }
      }

      strong {
        display: block;
        font-size: 35px;
        margin-bottom: 20px;
        color: #0d4d38;

        @media (max-width: 425px) {
          font-size: 20px;
          margin-bottom: 7px;
        }
      }
      p {
        padding-bottom: 5px;
        b {
          color: #000;
        }
      }
    }

    .container-quote {
      @media (max-width: 425px) {
        width: 90%;
        margin: 0 auto;
      }
      .random-quote {
        text-align: justify;
      }
    }
  }
`;
