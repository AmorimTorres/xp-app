import styled from 'styled-components';

const Container = styled.div`
  background-color: #191919;
  width: 100%;
  height: 10vh;
  display: flex;

  justify-content: space-between;
  align-items: center;
  padding-left: 50px;
  padding-right: 50px;

  nav {
    a {
      text-decoration: none;
      color: #fff;
      font-size: 20px;
      padding: 5px 20px 5px 0;
      transition: all 0.2s ease-in;

      :hover {
        color: #fbcf2399;
      }

      &.active {
        color: #fbcf23;
      }
    }
  }

  h3 {
    color: #fbcf23;
  }

  button {
    background-color: transparent;
    border: none;
    color: #fbcf23;
  }
`;

export default Container;
