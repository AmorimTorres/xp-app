import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 65vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 100px 30px 30px 30px;
    font-weight: 400;
  }
`;

export const Table = styled.table`
  width: 80vh;
  height: 40vh;

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
        margin: 5px;
        font-weight: bold;
    }

    .sticker-button {
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
    
    .buy-button {
        background-color: #707070;
        color: white;

    :hover {
        background-color: #606060;
      }
    }
}
 `;