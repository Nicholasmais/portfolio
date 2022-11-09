import { BrowserRouter } from 'react-router-dom';
import s from './App.scss';
import Context from './components/context/Context';
import Footer from './components/footer/Footer';
import Info from './components/info/Info';
import Navigation from './components/navigation/Navigation';
import Presentation from './components/presentation/Presentation';

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Navigation></Navigation>
        </nav>
      </BrowserRouter>
      <Presentation></Presentation>
      <Info></Info>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
