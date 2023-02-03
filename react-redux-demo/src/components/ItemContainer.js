import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";
function ItemContainer(props){
    return (
        <div>
            <h2>Item - {props.item} </h2>
            <button onClick={props.buyItem}> BUY ITEMS</button>
        </div>
    )

}

const mapStateToProps = (state, ownProps) =>{
    const ItemState = ownProps.cake 
    ? state.cake.numOfCakes
    : state.icecream.numOfIceCreams

     return {
        item: ItemState
     }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    const dispatchFunction = ownProps.cake 
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream())

    return {
        buyItem: dispatchFunction
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);