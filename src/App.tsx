import React from 'react';
import Container from '@material-ui/core/Container';
import { GlobalStyle } from './styles/GlobalStyle';
import { AppBar } from './components/AppBar';
import { SendNotification } from './pages/SendNotification/';


function App() {
  return (
    <Container >
      <GlobalStyle />
      <AppBar />
      <SendNotification />      
    </Container>
  );
}

export default App;
