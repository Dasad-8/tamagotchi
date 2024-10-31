/* import { useState } from 'react'; */
import './food-shop-modal.css'
import ReactModal from 'react-modal';
import { Pet } from '../../App';

export type SetValue<V> = (newValue: V | ((newValue: V) => V)) => void; 

interface Food {
    name: string,
    coin: number,
    srcImg: string,
    eat: (pet: Pet, setPet: SetValue <Pet>) => void
};

const foods: Food[] = [{
    name: 'Пончик', 
    coin: 25, 
    srcImg: './img/donut.png', 
    eat: (pet: Pet, setPet: SetValue<Pet>) => {
            const newPet = { ...pet, hunger: pet.hunger + 15, isEating: true };
            setPet(newPet)
            setTimeout(() => { setPet(newPet => ({ ...newPet, isEating: false })); }, 2000);
    }}, 

    {name: 'Салат', 
    coin: 12, 
    srcImg: './img/salad.png', 
    eat: (pet: Pet, setPet: SetValue<Pet>) => {
            const newPet = { ...pet, hunger: pet.hunger + 25, isEating: true };
            setPet(newPet)
            setTimeout(() => { setPet(newPet => ({ ...newPet, isEating: false })); alert('Спорт - это сила!!!')}, 10000);
    }}, 

    {name: 'Пицца', 
    coin: 20, 
    srcImg: './img/pizza.png', 
    eat: (pet: Pet, setPet: SetValue<Pet>) => {
            const newPet = { ...pet, hunger: pet.hunger + 13, isEating: true };
            setPet(newPet)
            setTimeout(() => { setPet(newPet => ({ ...newPet, isEating: false })); alert('Mamma mia, che bontà')}, 5000) //cделать ему усики;
    }}, 

    {name: 'Рыба', 
    coin: 17, 
    srcImg: './img/fish.png', 
    eat: (pet: Pet, setPet: SetValue<Pet>) => {
            const newPet = { ...pet, hunger: pet.hunger + 18, isEating: true };
            setPet(newPet)
            setTimeout(() => { setPet(newPet => ({ ...newPet, isEating: false }));}, 8000);
    }}, 

    {name: 'Бургер', 
    coin: 20, 
    srcImg: './img/burger.png', 
    eat: (pet: Pet, setPet: SetValue<Pet>) => {
            const newPet = { ...pet, hunger: pet.hunger + 20, isEating: true };
            setPet(newPet)
            setTimeout(() => { setPet(newPet => ({ ...newPet, isEating: false }));}, 12000);
    }}, 

    {name: 'Суп', 
    coin: 15, 
    srcImg: './img/soup.png', 
    eat: (pet: Pet, setPet: SetValue<Pet>) => {
            const newPet = { ...pet, hunger: pet.hunger + 25, isEating: true };
            setPet(newPet)
            setTimeout(() => { setPet(newPet => ({ ...newPet, isEating: false }));}, 10000);
    }}, 

    {name: 'Рамен', 
    coin: 23, 
    srcImg: './img/ramen.png', 
    eat: (pet: Pet, setPet: SetValue<Pet>) => {
            const newPet = { ...pet, hunger: pet.hunger + 23, isEating: true };
            setPet(newPet)
            setTimeout(() => { setPet(newPet => ({ ...newPet, isEating: false }));}, 10000) // сделать азиатом;
    }}, 

    {name: 'Хот-дог', 
    coin: 17, 
    srcImg: './img/hot-dog.png', 
    eat: (pet: Pet, setPet: SetValue<Pet>) => {
            const newPet = { ...pet, hunger: pet.hunger + 7, isEating: true };
            setPet(newPet)
            setTimeout(() => { setPet(newPet => ({ ...newPet, isEating: false }));}, 5000);
    }},

    {name: 'Яблоко', 
        coin: 17, 
        srcImg: './img/apple.png', 
        eat: (pet: Pet, setPet: SetValue<Pet>) => {
            const newPet = { ...pet, hunger: pet.hunger + 9, isEating: true };
            setPet(newPet)
            setTimeout(() => { setPet(newPet => ({ ...newPet, isEating: false }));}, 8000);
    }},

    {name: 'Авокадо', 
        coin: 22, 
        srcImg: './img/avocado.png', 
        eat: (pet: Pet, setPet: SetValue<Pet>) => {
            const newPet = { ...pet, hunger: pet.hunger + 26, isEating: true };
            setPet(newPet)
            setTimeout(() => { setPet(newPet => ({ ...newPet, isEating: false }));}, 4000);
    }},

    {name: 'Броколли', 
        coin: 19, 
        srcImg: './img/broccoli.png', 
        eat: (pet: Pet, setPet: SetValue<Pet>) => {
            const newPet = { ...pet, hunger: pet.hunger + 23, isEating: true };
            setPet(newPet)
            setTimeout(() => { setPet(newPet => ({ ...newPet, isEating: false }));}, 7000);
    }},

    {name: 'Суши', 
        coin: 43, 
        srcImg: './img/sushi.png', 
        eat: (pet: Pet, setPet: SetValue<Pet>) => {
            const newPet = { ...pet, hunger: pet.hunger + 35, isEating: true };
            setPet(newPet)
            setTimeout(() => { setPet(newPet => ({ ...newPet, isEating: false }));}, 9000);
    }},

    {name: 'Черника', 
        coin: 24, 
        srcImg: './img/blueberry.png', 
        eat: (pet: Pet, setPet: SetValue<Pet>) => {
            const newPet = { ...pet, hunger: pet.hunger + 28, isEating: true };
            setPet(newPet)
            setTimeout(() => { setPet(newPet => ({ ...newPet, isEating: false }));}, 7000);
    }},

    {name: 'Курица', 
        coin: 32, 
        srcImg: './img/chicken.png', 
        eat: (pet: Pet, setPet: SetValue<Pet>) => {
            const newPet = { ...pet, hunger: pet.hunger + 38, isEating: true };
            setPet(newPet)
            setTimeout(() => { setPet(newPet => ({ ...newPet, isEating: false }));}, 15000);
    }},

    {name: 'Гуляш', 
        coin: 38, 
        srcImg: './img/goulash.png', 
        eat: (pet: Pet, setPet: SetValue<Pet>) => {
            const newPet = { ...pet, hunger: pet.hunger + 30, isEating: true };
            setPet(newPet)
            setTimeout(() => { setPet(newPet => ({ ...newPet, isEating: false }));}, 10000);
    }},

    {name: 'Сыр', 
        coin: 18, 
        srcImg: './img/cheese.png', 
        eat: (pet: Pet, setPet: SetValue<Pet>) => {
            const newPet = { ...pet, hunger: pet.hunger + 10, isEating: true };
            setPet(newPet)
            setTimeout(() => { setPet(newPet => ({ ...newPet, isEating: false }));}, 5000);
    }},

    {name: 'Морковь', 
        coin: 13, 
        srcImg: './img/carrot.png', 
        eat: (pet: Pet, setPet: SetValue<Pet>) => {
            const newPet = { ...pet, hunger: pet.hunger + 14, isEating: true };
            setPet(newPet)
            setTimeout(() => { setPet(newPet => ({ ...newPet, isEating: false }));}, 6000);
    }},

    {name: 'Лосось', 
        coin: 40, 
        srcImg: './img/salmon.png', 
        eat: (pet: Pet, setPet: SetValue<Pet>) => {
            const newPet = { ...pet, hunger: pet.hunger + 38, isEating: true };
            setPet(newPet)
            setTimeout(() => { setPet(newPet => ({ ...newPet, isEating: false }));}, 9000);
    }},

    /* {name: 'Гриб', 
        coin: 5, 
        srcImg: './img/salmon.png', 
        eat: (pet: Pet, setPet: SetValue<Pet>) => {
        if (pet.hunger < 100) {
            const newPet = { ...pet, hunger: pet.hunger + 3, isEating: true };
            setPet(newPet)
            setTimeout(() => { setPet(newPet => ({ ...newPet, isEating: false }));}, 3000)
        };
    }}, */
];

interface FoodShopProps{
    openModal: () => void,
    closeModal: () => void,
    showModal: boolean, 
    coin: number, 
    pet: Pet, 
    setPet: SetValue<Pet>,
    setCoin: (coinValue: number) => void
}

function FoodShopModal({ openModal, closeModal, showModal, coin, setCoin, pet, setPet}: FoodShopProps) {

    function buy(food: Food) {
        if (coin >= food.coin) {
            if (pet.hunger < 100) {
                setCoin(coin - food.coin);
                food.eat(pet, setPet);
                closeModal();
            }
        }else{
            alert('У вас недостаточно средств')
        }
    };

    return <>
        <ReactModal appElement={document.getElementById('root')!} className='food-modal' isOpen={showModal} contentLabel="Minimal Modal Example">
            <div>
                <ol className='flex'>
                    {foods.map((food: Food, index: number) => <li key={index} className='food-card'>
                        <img className='food-srcImg' src={food.srcImg} alt="error" />
                        <h3>{food.name}</h3>
                        <button onClick={()=>buy(food)} className='food-btn'>{food.coin} <img className='coin-img' src="./img/coin.png" alt="error" /></button>
                    </li>)}
                </ol>
            </div>
            <button onClick={closeModal}>Close Modal</button>
        </ReactModal>
    </>
};

export default FoodShopModal;