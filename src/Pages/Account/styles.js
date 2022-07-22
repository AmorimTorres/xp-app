import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1980px;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    margin-top: 40px;
    margin-bottom: 30px;
    font-weight: 400;
  }
`;

export const Content = styled.form`
  width: 32%;
  height: 50%;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 2px 4px 10px 2px rgba(0, 0, 0, 0.3);

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

    :active {
      background-color: #fbcf23;
    }

    :disabled {
      background-color: #fbcf2380;
      color: #00000040;
      cursor: not-allowed;
    }
  }

  label {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    width: 80%;

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
`;
