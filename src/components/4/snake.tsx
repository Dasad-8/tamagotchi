/* import { setTimeout } from 'timers';  */  //!!!!!!
/* import { setTimeout} from 'timers/promises'; */
import './snake.css';
import ReactModal from "react-modal";
import { SetValue } from '../3/food-shop-modal';
import { useEffect, useState } from 'react';
import { getRandomNumber } from '../../App';

export interface Cordinates {
    x:number;
    y:number;
};


export interface Snake {
    fruit: Cordinates;
    player: Cordinates;
    direction: Cordinates;
}

interface SnakeProps{
    openSnakeModal: () => void,
    closeSnakeModal: () => void,
    showSnakeModal: boolean, 
    coin: number, 
    setCoin: SetValue<number>
    snake: Snake,
    setSnake: SetValue<Snake>
    points: number,
    setPoints: SetValue<number>   ///!!!!
}

export const GAME_WIDTH = 35;
export const GAME_HEIGHT = 19;
export const CELL = 52.15;

function SnakeModal({openSnakeModal, closeSnakeModal, showSnakeModal, coin, setCoin, snake, setSnake, points, setPoints} : SnakeProps) {
    

    useEffect (() => {
        window.addEventListener ('keydown', onKeyDown)
        let intervalId = setInterval(() => {
            setSnake((snake: Snake)=>{
                let x = snake.player.x + snake.direction.x;
                let y = snake.player.y + snake.direction.y;
                let frX = snake.fruit.x;
                let frY = snake.fruit.y;
                if (x === GAME_WIDTH) {
                    x = 0;
                };
                if (y === GAME_HEIGHT) {
                    y = 0
                };
                if (y === -1) {
                    y = GAME_HEIGHT - 1
                }
                if (x === -1) {
                    x = GAME_WIDTH - 1
                }

                if (x === frX && y === frY) {
                    frX = getRandomNumber (1, GAME_WIDTH - 2);
                    frY = getRandomNumber(1, GAME_HEIGHT - 2);
                    console.log('snake eating')
                    setPoints((points)=> {
                        return points + 5
                    });
                };

                let newSnake = { ...snake,
                    player: { x: x, y: y},
                    fruit: {x: frX, y: frY}
                };
                return newSnake;
            })


        }, 200);

        console.log('Hello,WORLD!!!')
        return () => {
            document.removeEventListener('keydown', onKeyDown);
            clearInterval(intervalId);}
    }, [])


    function onKeyDown(event: KeyboardEvent) {
        if (event.key.toLowerCase() === 'w') {
            setSnake((snake: Snake) => {
                let newSnake = { ...snake,
                    direction: { x: 0, y: -1}
                };
                return newSnake;
            });
        };
        if (event.key.toLowerCase() === 's') {
            setSnake((snake: Snake) => {
                let newSnake = { ...snake,
                    direction: { x: 0, y: 1}
                };
                return newSnake;
            });
        };
        if (event.key.toLowerCase() === 'd') {
            setSnake((snake: Snake) => {
                let newSnake = { ...snake,
                    direction: { x: 1, y: 0}
                };
                return newSnake;
            });
        };
        if (event.key.toLowerCase() === 'a') {
            setSnake((snake: Snake) => {
                let newSnake = { ...snake,
                    direction: { x: -1, y: 0}
                };
                return newSnake;
            });
        }
    }

    return<>
        <ReactModal appElement={document.getElementById('root')!} isOpen={showSnakeModal} style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(52,163,46,0.25)',
            },
            content: {
              position: 'absolute',
              top: '70px',
              left: '152px',
              right: '155px',
              bottom: '102px',
              border: '1px solid #ccc',
              backgroundImage: `url(${'/img/snake-bg.png'})`,
              backgroundRepeat: 'none',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '5px',
              outline: 'none',
              padding: '0px',
            }
          }}>
            <img style={{top: snake.fruit.y * CELL +'px', left: snake.fruit.x * CELL + 'px'}} className='snake-apple' src="./img/apple.png" alt="" />

            <p>{points}</p>
            <div style={{top: snake.player.y * CELL +'px', left: snake.player.x * CELL + 'px'}} className='snake-css'>:3</div>

            <button className="snake-modal-btn"  onClick={()=>{
                                                                closeSnakeModal();
                                                                setCoin((coin: number)=>{
                                                                    return coin + points
                                                                });
                                                                setPoints(()=> {
                                                                    return 0
                                                                });
                                                        }}>X</button>
        </ReactModal>
    </>
};

export default SnakeModal;