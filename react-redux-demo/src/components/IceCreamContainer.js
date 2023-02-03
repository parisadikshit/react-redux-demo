import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { buyIceCream } from "../redux";
function HooksIceCreamContainer() {
    const numOfIceCreams = useSelector(state => state.icecream.numOfIceCreams)
    const dispatch = useDispatch()
    return (
        <div>
            <h2> (HooksIceCreamContainer) Number of Icecreams - {numOfIceCreams}</h2>
            <button onClick={()=> dispatch(buyIceCream())}> BUY ICECREAM </button>
        </div>
    )
}

export default HooksIceCreamContainer;