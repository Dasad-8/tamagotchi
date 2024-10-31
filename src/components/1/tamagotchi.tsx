import React from "react";
import './tamagotchi.css'
import { Pet } from "../../App";
import FoodShopModal from "../3/food-shop-modal";
import { SetValue } from '../3/food-shop-modal';
import SnakeModal from "../4/snake";
import { Snake } from "../4/snake";
import { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

interface TamagotchiProps {
  pet: Pet,
  play: (pet: Pet) => void,
  sleep: (pet: Pet) => void,
  openModal: () => void,
  closeModal: () => void,
  showModal: boolean,
  coin: number,
  setPet: SetValue<Pet>,
  setCoin: SetValue <number>,
  openSnakeModal: () => void,
  closeSnakeModal: () => void,
  showSnakeModal: boolean,
  snake: Snake,
  setSnake: SetValue<Snake>,
  points: number,
  setPoints: SetValue<number>, ///!!!!
}

function Tamagotchi({ pet, play, sleep, openModal, closeModal, showModal, coin, setPet, setCoin, openSnakeModal, closeSnakeModal, showSnakeModal, snake, setSnake, points, setPoints}: TamagotchiProps) {

  const {value: petName, setValueWithLocalStorage: setPetName} = useLocalStorage <string>("Тама", "./tamagotchi-default-name.json");
  const [isEditing, setIsEditing] = useState(false);

  function face(pet: Pet): string {
    let srcFace = "./img/image1.png"
    if (pet.isEating === true) {
      srcFace = "./img/image4.png"
    }
    else if (pet.hunger <= 50) {
      srcFace = "./img/image2.png"
    }
    else if (pet.energy <= 50) {
      srcFace = "./img/image3.png"
    };
    return srcFace;
  }

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPetName(event.target.value);
  };

  const saveName = () => {
    setIsEditing(false);
  };

  return <>
    <section className='flex tamagotchi'>
      <div className='pet-indicators'>
        {/* <p className='flex'>{petName} <img className='pet-name-img' src="./img/4.png" alt="error" /></p> */}

        {isEditing ? (
              <>
                <div className="flex">
                  <input type="text" value={petName} onChange={handleNameChange} placeholder="Введите имя" className="name-input"/>
                  <button onClick={saveName} className="save-name-btn">Сохранить</button>
                </div>
              </>
            ) : (
              <><p className="flex">{petName} <button onClick={() => setIsEditing(true)} className="edit-name-btn"> <img className='pet-name-img' src="./img/4.png" alt="error" /> </button></p></>
            )}

        <p>Голод: <progress className='hunger-progress' value={pet.hunger} max="100"></progress></p>

        <p>Энергия: <progress className='energy-progress' value={pet.energy} max="100"></progress></p>
      </div>

      <img className='pet-face' src={face(pet)} alt="error" />

      <div className='pet-btns'>
        <button className={(pet.hunger === 100) ? 'inactive-feed-btn' : (pet.isEating === true) ? 'inactive-feed-btn' : ''} onClick={openModal}/* onClick = {()=>feed(pet)} */> Кормить</button>
        <button className={(pet.isEating === true) ? 'inactive-feed-btn' : ''} onClick={openSnakeModal}>Играть</button>
        <button className={(pet.isEating === true) ? 'inactive-feed-btn' : ''} onClick={() => sleep(pet)}>Спать</button>
      </div>

      <FoodShopModal openModal={openModal} closeModal={closeModal} showModal={showModal} coin={coin} pet={pet} setPet={setPet} setCoin={setCoin} />
      <SnakeModal openSnakeModal={openSnakeModal} closeSnakeModal={closeSnakeModal} showSnakeModal={showSnakeModal} coin={coin} setCoin={setCoin} snake={snake} setSnake={setSnake} points={points} setPoints={setPoints}/>
    </section>
  </>
}

export default Tamagotchi;