import React, { useEffect, useRef, useState } from 'react';
import './styles.css';
import { Form } from '@unform/web';

import Input from './components/Form/Input'

const position = [0, 0];
const pokemonsCatch = ['[0,0]'];
//const inputRef = useRef < import('@unform/core').FormHandles > (null);


function App() {
  const formRef = useRef(null);

  function handleSubmit(data, { reset }) {

    // Recebe a direção em minisculo e transforma em maiusculo. (tratei isso no css também)
    var direction = data.value.toUpperCase();
    validate(direction);
    console.log(direction);

    // Alerta de error
    //formRef.current.setFieldError('value', 'Wait, you forgot to say where we are going');

    move(direction);
    handlePokemonsCatch();
    // Gerar saida

    // Limpando campo após envio da direção
    reset();
  }

  // Validação da entrada da direção
  function validate(direction) {
    if (direction != "N" && direction != "S" && direction != "E" && direction != "O") {
      alert("Please enter a valid position!")
    }
  }

  // Setando direção
  function move(direction) {
    if (direction == "N") {
      position[1]++;
    }
    if (direction == "S") {
      position[1]--;
    }
    if (direction == "E") {
      position[0]++;
    }
    if (direction == "O") {
      position[0]--;
    }

  }

  // Capturando pokemons de novas posições
  function handlePokemonsCatch() {
    if (!pokemonsCatch.includes(JSON.stringify(position))) {
      pokemonsCatch.push(JSON.stringify(position));
    }
    console.log(pokemonsCatch);
  }

  // Atualizar pokemons capturados
  //const [count, setCount] = useState(0);

  //useEffect(() => { }, [count]);


  return (
    <div className="App">
      <div class="container">
        <h1>Game Start</h1>
        <div class="img">
          <img src="http://31.media.tumblr.com/088786d466c3a315d6043b8e59d96770/tumblr_msu2ojWkqz1scncwdo1_500.gif"
            width="50"
            height="50"
            alt="avatar-red" />
        </div>
        <h2>Choose which direction Ash should go</h2>
        <p>| N to North | S to South | E to East | O to West |</p>

        <Form ref={formRef} onSubmit={handleSubmit} >
          <Input
            id="input"
            name="value"
            placeholder="Where are we going?"
          /><br />
          <button
            type="submit"
            class="btn-send-direction"
          //onClick={() => setCount(count + 1)}

          >Send Direction</button>
        </Form>

        <p>Gotcha! Ash catch <span class="count">0 </span>pokemons.</p>
      </div>
    </div>
  );
}

export default App;
