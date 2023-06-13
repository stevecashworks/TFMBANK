import styled from 'styled-components'
import Header from '../../components/header/Header';
import Carousel from './components/carousel/carousel'
import AccountTypes from './components/accountTypes/accountTypes';
import Needs from './components/needs/needs';
import ServiceCard from './components/serviceCards/serviceCards';
import EmergencyService from './components/emergencyServices/emergencyServices';
import Faqs from './components/Faqs/faqs';
import Forex from './components/forex/forex';
import Footer from './components/footer/footer';
import { selectMenuOpen } from '../../state/slices/appSlice';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../../state/slices/appSlice';
// import { selectIsLogged } from '../../state/slices/userSlice';
const Container=styled.div`
width:100vw;
height:100vh;
`
const Con=styled.div`
position:relative;
top:80px;
`
const Nav=styled.div`
background-color:gray;
position:fixed;
top:70px;
right:0;
width:300px;
height:400px;
border-radius:15px 0 15px 0px;
z-index:5;
display:none;
transition:all 0.5s ease;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
gap:20px;

transform:${props=>props.open?"translateX(0px)":"translateX(300px)"};
@media(max-width:480px){
  }
}
`
const Anc=styled.a`
color:rgb(0,0,0,0.7);
text-transform:capitalize;
text-decoration:none;
font-weight:bold;
`
const links=[
  {
      text:"Faqs",
      path:"#faqs"
},
{
  text:"services",
  path:"#services"
},{
  text:"Loans",
  path:"#"
}
]


function Home() {
  const open=useSelector(selectMenuOpen)
  const dispatch=useDispatch()
  return (
    <Container>
  <Header/>
  <Nav open={open}>
    {links.map(x=><Anc onClick={()=>{dispatch(toggleMenu())}} href={x.path}>{x.text}</Anc>)}
  </Nav>
  <Con>

  <Carousel/>
  <AccountTypes/>
  <Needs/>
  <ServiceCard/>
  <EmergencyService/>
  <Forex/>
  <Faqs/>
  <Footer/>
  </Con>
  </Container>
  );
}

export default Home;
