import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1980px;
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  min-width: 40%;
  width: 40%;
  height: 100%;
  background-color: #191919;

  padding: 130px 50px 150px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: #fff;
    font-size: 50px;
    font-weight: 800;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;

    button {
      width: 99%;
      height: 40px;
      border-radius: 5px;
      border: none;
      background-color: #fbcf23;
      font-size: 20px;
      transition: all 0.2s ease-in;
      margin-top: 20px;
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

      input {
        width: 99%;
        height: 40px;
        margin: 5px;
        outline: none;
        background-color: transparent;
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
`;

export const Aside = styled.div`
  width: 100%;
  height: 100%;
  background-color: #0d0e10;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: 130px;
  }

  h2 {
    color: #fff;
    text-align: center;
    margin: 50px;
  }
`;
