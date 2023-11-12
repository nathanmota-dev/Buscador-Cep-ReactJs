import { FiSearch } from 'react-icons/fi'
import './style.css'

function App() {
  return (
    <div className="container">

      <h1 className='title'>Buscador CEP</h1>

      <div className="containerInput">

        <input type="text" placeholder="Digite seu CEP"></input>

        <button type="button" className='button-Search'>
          <FiSearch size={25} color='#FFF' />
        </button>
      </div>

      <main className='main'>

        <h2>CEP: 55555-222</h2>

        <span>Rua: Rua dos testes</span>
        <span>Complemento: Complemento teste</span>
        <span>Bairro: Bairro teste</span>
        <span>Cidade: Cidade teste</span>
        <span>Estado: Estado teste</span>

      </main>
    </div>
  );
}

export default App;
