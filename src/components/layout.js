import React from "react"
import { Link } from "gatsby"
import styled from "styled-components";
import "./style.scss";
import Logo from "../../static/images/logo.png";

const rootPath = `${__PATH_PREFIX__}/`
const blogPath = `${__PATH_PREFIX__}/blog/`

function Header({location}) {
  return (
    <>
      <div className="col-lg-1 col-4">
        <Link className="d-flex logo" to={location.pathname === blogPath ? `/` : `/`} >
          <img src={Logo} class="float-left" />
        </Link>
      </div>
      <nav className="col-lg-11 col-8 mb-4 mt-0 text-right mt-5 pr-5">
        <a href="/" className="nav-button" disabled={location.pathname === rootPath}>
          Home
        </a>
        <Link to="/blog/" className="nav-button" disabled={location.pathname === "/blog/"}>
          Our Work
        </Link>
      </nav>
    </>
  );
}

export default function Layout (props){
 
    const { location, title, children } = props;

    return (
      <Container>
        <Wrapper >
          <LayoutContainer >
            <div className="mx-auto" >
              <HeaderContainer className="row mb-0 justify-content-middle">
                <Header location={location}/>
              </HeaderContainer>
              <div className="row">
                <main className="px-2 px-lg-0">{children}</main>
              </div>
            </div>
          </LayoutContainer>
          <Footer>
          </Footer>
        </Wrapper>
      </Container>
    )
  }
  
  const Container = styled.div`
    margin-left: 15px;
    margin-right: 15px;
  `;

const LayoutContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 10rem; 
`;

const HeaderContainer = styled.div`
  
  position: static;
  top: 0;
  left: 0;

  a {
    text-decoration: none !important;
    box-shadow: none;
    color: white;
    padding: 10px;
  }

  a:hover{
    color: #face11;
  }

  .logo {
    img {
      max-width: 175px;
      max-height: 175px;
    }
  }

  nav {
    font-family: Roboto;
    font-weight: 400;
    font-size: 15px;
    letter-spacing: 0px;
    font-style: normal;
  }
`;

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align:center;
  width: 100%;
  height: 2.5rem; 

  a {
    box-shadow: none;
    margin-left:10px;
    height:30px !important;
    width:30px !important;
  }
`