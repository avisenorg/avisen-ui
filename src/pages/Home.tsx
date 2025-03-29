import styled from 'styled-components';
import LatestBlocks from '../components/LatestBlocks';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

const Home = () => {
  return (
    <Container>
      <LatestBlocks />
    </Container>
  )
}

export default Home;