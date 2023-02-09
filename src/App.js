import { BrowserRouter } from 'react-router-dom';
import s from './App.scss';
import Footer from './components/footer/Footer';
import Info from './components/info/Info';
import Navigation from './components/navigation/Navigation';
import Presentation from './components/presentation/Presentation';
import Projects from './components/projects/Projects';

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Navigation/>
        </nav>
      </BrowserRouter>      
      <Presentation/>
      <section>
        <Info/>
      </section>
      <div className={s.projects}>
        <Projects/>
      </div>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
