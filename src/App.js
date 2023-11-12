import { FiSearch } from 'react-icons/fi'
import './style.css'

function App() {
  return (
    <div className="container">

      <h1>Buscador CEP</h1>

      <div className="containerInput">

        <input type="text" placeholder="Digite seu CEP"></input>

        <button type="button">
          <FiSearch size={25} color='#FFF' />
          Buscar
        </button>
      </div>

      <main className='name'>
        <h2>CEP: 55555-222</h2>
        <h2>Rua: Rua dos testes</h2>
        <h2>Complemento: Complemento teste</h2>
        <h2>Bairro: Bairro teste</h2>
        <h2>Cidade: Cidade teste</h2>
        <h2>Estado: Estado teste</h2>
      </main>

    </div>
  );
}

export default App;
