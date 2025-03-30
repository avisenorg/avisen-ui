import styled from "styled-components";
import avisenLogo from "../assets/avisen.svg";

const FooterContainer = styled.footer`
  background-color: #ffffff;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.15);
  padding: 0.5rem 2rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`;

const Logo = styled.img`
  height: 32px;
  width: auto;
`;

const BrandText = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Logo src={avisenLogo} alt="Aviscan" />
        <BrandText>Aviscan</BrandText>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 