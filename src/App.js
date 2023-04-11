import Habilidades from './components/Habilidades';
import TitleExpansive from './components/genericos/TitleExpansive';

function App() {
  const habilidades = () => (<Habilidades />)

  return (
    <div>
      <TitleExpansive titulo="teste" body={habilidades()} />
    </div>
  );
}

export default App;
