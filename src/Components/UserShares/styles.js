import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 55vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow:hidden;
  height:1%;

  h1 {
    margin: 30px;
    font-weight: 400;
  }
`;

export const Table = styled.table`
  width: 80vh;
  overflow:hidden;
  height:1%;

  th {
    font-size: 20px;
  }

  td {
    text-align: center;

    button {
        width: 80px;
        height: 30px;
        border: none;
        border-radius: 3px;
        box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.3);
        margin: 2px;
        font-weight: bold;
        margin-bottom: 8px;
    }

    .ticker-button {
        background-color: #fbcf23;
        color: #191919;

        :hover {
        background-color: #f0c405;
      }
    }

    .qtt-value-button {
        background-color: #404040;
        color: white;
        cursor: default;
    }
    
    .sell-buy-button {
        background-color: #707070;
        color: white;
        width: 38px;

    :hover {
        background-color: #606060;
      }
    }
}
 `;
