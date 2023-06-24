import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--darkGrey);
  padding: 0px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  max-width: var(--maxWidth);
  width: 100%;

  .search-ico {
    position: absolute;
    padding: 0;
    margin-left: 10px;
    width: 30px;
    height: 30px;
  }

  input {
    flex: 1;
    height: 40px;
    font-size: 1rem;
    padding: 5px 200px 5px 50px; 
    border: none;
    border-radius: 20px;
    background: var(--medGrey);
    color: var(--white);

    ::placeholder {
      color: var(--white);
    }
  }
`;


