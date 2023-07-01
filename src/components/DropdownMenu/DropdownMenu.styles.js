import styled from 'styled-components';

export const Wrapper = styled.div`
background: var(--darkGrey);

.menu-container {
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 10px;;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
}

.dropdown {
  position: relative;
  display: inline-block;
  margin-right: 40px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  .dropdown-item {
    padding: 12px 16px;
    cursor: pointer;

    &:hover {
      background-color: #ddd;
    }
  }
}

.dropdown:hover .dropdown-content {
  display: block;
}
`;
