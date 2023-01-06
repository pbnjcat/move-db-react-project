import styled from 'styled-components';

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;
  z-index: 999 !important;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;

  nav {
    display: flex;
    align-items: center;
  }
  
/* sort menu */
  .menu-trigger h3 .hat-symbol {
    display: inline-block;
    transform: rotate(270deg);
    transition: 200ms;
  }

  .menu-trigger h3 .hat-symbol.active {
    display: inline-block;
    transform: rotate(360deg);
    transition: 200ms;
  }

  .menu-container{
    display: flex;
    align-items: center;
    color: white;
    margin: 0 40px;
  }

  .menu-trigger h3 {
    display: flex;
    margin: 0 auto;
    color: white;
    ::hover {
      opacity: .5;
    }
  }

.dropdown-menu{
    position: absolute;
    background-color:black;
    border-radius: 10px;
    left: 0;
    color: white;
    padding: 10px 20px;
    width: 100%;
    top: 60px;

    ul {
      margin: 0;
      padding: 0;
    }
  }

  .dropdown-menu::before{
    content: '';
    position: absolute;
    top: -5px;
    left: 26em;
    height: 20px;
    width: 20px;
    background-color: black;
    transform: rotate(45deg);
  }

  .dropdown-menu.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    transition: 200ms ease-in-out;
  }
  
  .dropdown-menu.inactive {
    opacity: 0;
    visibility: visible;
    transform: translateY(-20px);
    transition: 200ms ease-in-out;
  }

  .dropdown-menu ul li{
    padding: 10px  0;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
  }

  .dropdown-item:hover {
    color: rgb(212, 33, 9);
    cursor: pointer;
  }


  .dropdown-item {
    border-bottom: 1px solid #eee;
    cursor: pointer;
    list-style: none;    
    padding: 15px;
  }

  .dropdown-item{
    display: flex;
    margin: 10px auto;
  }

  .dropdown-item div{
    max-width: 100px;
    margin-left: 10px;
    transition: 500ms;
  }


`;

export const LogoImg = styled.img`
  width: 200px;
  @media screen and (max-width: 500px) {
    width: 150px;
  }
`;

// export const TMDBLogoImg = styled.img`
//   width: 100px;
//   @media screen and (max-width: 500px) {
//     width: 80px;
//   }
// `;