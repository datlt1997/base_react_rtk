import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";


export const CakeView = () => {
    const numOfCake = useSelector(state => state.cake.numOfCake)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>NUmber of cakes - {numOfCake }</h2>
            <button onClick={() => dispatch(ordered())}> Order cakes</button>
            <button onClick={() => dispatch(restocked(3))}> Restock cakes</button>
        </div>
    )
}