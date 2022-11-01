import s from './App.scss';
import Info from './components/info/Info';
import Navigation from './components/navigation/Navigation';
import Presentation from './components/presentation/Presentation';

function App() {
  return (
    <body>
      <nav>
        <Navigation></Navigation>
      </nav>
      <Presentation></Presentation>
      <Info></Info>
    </body>
  );
}

export default App;
