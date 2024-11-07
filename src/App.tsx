import React from 'react';
import { useState } from 'react';
import './App.css';
import Tamagotchi from './components/1/tamagotchi';
import Coin from './components/2/coin';
import useLocalStorage from './hooks/useLocalStorage';
import {Snake} from './components/4/snake';
import {GAME_HEIGHT, GAME_WIDTH} from './components/4/snake';

export interface Pet { 
  age: number, 
  company: string, 
  color: string, 
  energy: number, 
  hunger: number,
  isEating: boolean
};

export function getRandomNumber(min: number, max: number): number{
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function App() {

    let {value: pet, setValueWithLocalStorage: setPet, loading} = useLocalStorage <Pet> ("Tama", "./tamagotchi-default2.json");


    

    /* let [pet, setPet] = useState <Pet> (
      {name: "Tama", age: 28, company: "Bandai", color: "Red", energy: 52, hunger: 5, isEating: false}); */


    const {value: coin, setValueWithLocalStorage: setCoin} = useLocalStorage <number> ("Coin", "./tamagotchi-default.json");

    /* const [hunger, setHunger] = useState<number>(5) */

    function play (pet:Pet) {
      if (pet.energy >= 5) {
      const newPet: Pet = {...pet, energy: pet.energy - 5, hunger: pet.hunger - 10};
      setPet(newPet);
      };
      setCoin(coin + 15);
    }

    function sleep(pet:Pet) {
      if (pet.energy < 100) {
        const newPet: Pet = {...pet, energy: pet.energy + 10};
        setPet(newPet)
      }
    }

        /* {newPet.isEating = false; setPet(newPet)} */


    let [showModal, setShowModal] = useState <boolean> (false);

    function openModal() {
      setShowModal(true);
    };
  
    function closeModal() {
      setShowModal(false);
    };

    let [showSnakeModal, setShowSnakeModal] = useState <boolean> (false);

    function openSnakeModal() {
      setShowSnakeModal(true);
    };
  
    function closeSnakeModal() {
      setShowSnakeModal(false);
      setSnake({...snake, tail: []});
    };

    const randomNum = getRandomNumber(1, GAME_WIDTH - 2);
    const randomNum2 = getRandomNumber(1, GAME_HEIGHT - 2);

    const randomNumSnake = getRandomNumber(1, GAME_WIDTH - 2);
    const randomNum2Snake = getRandomNumber(1, GAME_HEIGHT - 2);

    console.log(randomNum, randomNum2);
    

    /* let snake:Snake = { fruit: {x:randomNum, y: randomNum2}, player:{x:randomNumSnake, y: randomNum2Snake}} /* {x: 1, y: 1} */

    let [snake, setSnake] = useState <Snake> ({ fruit: {x:randomNum, y: randomNum2}, player:{x:randomNumSnake, y: randomNum2Snake}, direction:{x: 1, y: 0}, tail: []}); //!!!!

    let [points, setPoints] = useState <number> (0);



  return (
      <><section className='wr'>
        {(loading === false) ?
        <><Coin coin={coin} />
        <Tamagotchi pet={pet} play={play} sleep={sleep} openModal={openModal} closeModal={closeModal} showModal={showModal} coin={coin} setPet={setPet} setCoin={setCoin} openSnakeModal={openSnakeModal} closeSnakeModal={closeSnakeModal} showSnakeModal={showSnakeModal} snake={snake} setSnake={setSnake} points={points} setPoints={setPoints}/></> : (loading === true) ? <><img className='gif' src="./img/ZKZg.gif" alt="error" /><p>loading ...</p></> : null} 
      </section>
    </>
  );
}

export default App;
