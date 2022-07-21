import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  max-width: 1980px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  table {
    width: 80vh;
    height: 10vh;

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

      .buy-button {
        background-color: #707070;
        color: white;

        :hover {
          background-color: #606060;
        }
      }
    }
  }

  form {
    width: 35%;
    height: 100%;
    background-color: #fff;

    padding: 100px 50px;

    display: flex;
    flex-direction: column;
    align-items: center;

    button {
      width: 80%;
      height: 40px;
      border-radius: 5px;
      border: #909090;
      background-color: #fbcf23;
      font-size: 20px;
      transition: all 0.2s ease-in;
      margin-top: 5px;
      margin-left: 5px;

      :hover {
        background-color: #f0c405;
      }

      :disabled {
        background-color: #ffff66;
        color: #707070;
        cursor: not-allowed;
      }
    }

    label {
      display: flex;
      flex-direction: column;
      font-weight: bold;

      input {
        width: 100%;
        height: 40px;
        margin-bottom: 50px;
        margin-top: 10px;
        outline: none;
        background-color: #909090;
        border: 2px solid #ffffff40;
        border-radius: 5px;
        color: #ffffff40;
        font-size: 20px;
        padding-left: 10px;
        transition: all 0.4s ease-in-out;

        ::placeholder {
          color: #ffffff55;
        }

        :hover {
          border: 2px solid #fbcf2380;
        }

        :focus {
          border: 2px solid #fbcf23;
          color: #fff;
        }
      }
    }
  }

  h2 {
    font-weight: 400;
  }
  
`;
