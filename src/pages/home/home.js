import styled from 'styled-components'
import Header from '../../components/header/Header';
import Carousel from './components/carousel/carousel'
import AccountTypes from './components/accountTypes/accountTypes';
import Needs from './components/needs/needs';
const Container=styled.div`
width:100vw;
height:100vh;
`
const Con=styled.div`
position:relative;
top:80px;
`



function Home() {
  return (
    <Container>
  <Header/>
  <Con>

  <Carousel/>
  <AccountTypes/>
  <Needs/>
  </Con>
  </Container>
  );
}

export default Home;
