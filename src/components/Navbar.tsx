import { NavLink } from "react-router-dom";
import styled from "styled-components";
import avisenLogo from "../assets/avisen.svg";

const Nav = styled.nav`
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  padding: 0.5rem 2rem;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
`;

const NavItem = styled.li`
  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    border-radius: 4px;
    transition: all 0.2s ease-in-out;
    display: flex;
    align-items: center;
    gap: 1rem;

    &:hover {
      background-color: #f5f5f5;
    }

    &.active {
      background-color: transparent;
      color: #333;
    }
  }
`;

const Logo = styled.img`
  height: 64px;
  width: auto;
`;

const BrandText = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
`;

const NavBar = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <NavLink to="/">
            <Logo src={avisenLogo} alt="Aviscan" />
            <BrandText>Aviscan</BrandText>
          </NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default NavBar;
