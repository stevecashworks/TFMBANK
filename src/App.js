import logo from './assets/logo1.png';
import './App.css';
import styled from 'styled-components'
// import Header from './components/Header';
import { RouterProvider } from 'react-router-dom';
import router from './router';
const Container=styled.div`
width:100vw;
height:100vh;
`

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
//<Container>
  //<Header/>
  //</Container>
  <RouterProvider router={router}/>
  );
}

export default App;
