import Habilidades from './components/Habilidades';
import TituloExpansivo from './components/genericos/TituloExpansivo';

function App() {
  const habilidades = () => (<Habilidades />)

  return (
    <div>
      <TituloExpansivo titulo="Habilidades e Proeficiencias" body={habilidades()} />
    </div>
  );
}

export default App;
