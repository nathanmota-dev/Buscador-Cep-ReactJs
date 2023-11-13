import { useState } from 'react';
import { FiSearch } from 'react-icons/fi'
import api from './services/api';
import './style.css'

function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState('');

  async function handleSearch() {

    if (input === '') {
      alert('Digite um CEP válido');
      return;
    }

    try {

      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput(''); //limpa input

    } catch (error) {
      alert('CEP não encontrado');
      setInput('');
    }

  }

  return (

    <div className="container">

      <h1 className='title'>Buscador CEP</h1>

      <div className="containerInput">

        <input type="text"
          placeholder="Digite seu CEP"
          value={input}
          onChange={(e) => setInput(e.target.value)}>
        </input>

        <button type="button" className='button-Search' onClick={handleSearch}>
          <FiSearch size={25} color='#FFF' />
        </button>
      </div>

      {Object.keys(cep).length > 0 && (

        <main className='main'>

          <h2>CEP: {cep.cep}</h2>

          <span>Rua: {cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>Bairro: {cep.bairro}</span>
          <span>Cidade: {cep.localidade}</span>
          <span>Estado: {cep.uf}</span>

        </main>

      )}


    </div>
  );
}

export default App;
