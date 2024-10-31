import React from "react";
import './coin.css';

function Coin({coin}:{coin:number}) {

    

    /* coin = coin as number; */

    return<>
        <p>{coin}</p>
    </>
}

export default Coin;