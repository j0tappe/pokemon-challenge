import React from 'react';
import './App.css';
import { Form } from '@unform/web';

import Input from './components/Form/Input'



function App() {
  function handleSubmit(data) {

    var positionY = 0;
    var positionX = 0;
    var position = [];
    const pokemonsCatch = [[0, 0]];

    // console.log(data);
    // Validar
    console.log(data.setDirection);
    move(data.setDirection);
    handlePokemonsCatch();
    // Gerar saida
  }

  // Setando direção
  function move(direction) {
    switch (direction) {
      case 'N':
        this.positionY++;
      case 'S':
        this.positionY--;
      case 'E':
        this.positionX++;
      case 'O':
        this.positionX--;
    }
  }

  // Capturando pokemons de novas posições
  function handlePokemonsCatch() {
    position = [positionX, positionY];

    if (pokemonsCatch.includes(position)) {
      pokemonsCatch.push(position);
    }
  }






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

        <Form onSubmit={handleSubmit}>
          <Input
            id="text-direction"
            name="setDirection"
            placeholder="Where are we going?"
          /><br />
          <button type="submit" class="btn-send-direction">Send Direction</button>
        </Form>

        <p>Gotcha! Ash catch <span class="count">{pokemonsCatch.length} </span>pokemons.</p>
      </div>
    </div>
  );
}

export default App;
