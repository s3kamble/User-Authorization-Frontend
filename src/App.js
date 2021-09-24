import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routing/AppRouter';
import { LoginContextProvider } from './utils/loginContext';
import Navigation from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <LoginContextProvider >
      <BrowserRouter>
        <div className="App">
          <Navigation />
          <AppRouter />
          <Footer />
        </div>
      </BrowserRouter>
    </LoginContextProvider>
   
  );
}

export default App;
