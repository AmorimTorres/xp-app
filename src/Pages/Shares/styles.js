import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  button {
    &.account-button {
      width: 100%;
      height: 40px;
      border-radius: 5px;
      border: none;
      background-color: #fbcf23;
      font-size: 18px;
      transition: all 0.2s ease-in;
      margin-top: 20px;
      margin-left: 5px;

        :hover {
            background-color: #f0c405;
        }
      }
    }
`;
