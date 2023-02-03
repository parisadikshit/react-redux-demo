import { BUY_CAKE } from "./cakeActionTypes"

// action creator
export const buyCake = (number=1) =>{
    return {
        type: BUY_CAKE,
        payload: number
    }
}