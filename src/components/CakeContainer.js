import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

function CakeContainer(props){
    console.log(props)
    return (
        <div>
             <h2>Number of cakes - {props.numOfCakes}</h2>
             <button onClick={props.buyCake}> BUY CAKE</button>
        </div>
    )

}


// when you want to access the redux state to component you have to define
// mapStatetoProps
// it has the redux state as the parameter
// which can be used to get the appropriate state properties

const mapStateToProps = state => {
    return {
        numOfCakes: state.numOfCakes
    }
}

// for dispatching actions we have this function 
//  it has dispatch method as a parameter and it allows us to map action creators to props in our component

const mapDispatchToProps = dispatch =>{
    return {
        buyCake: () => dispatch(buyCake())
    }
}


// connect function connects the react component to the redux store
export default connect(
    mapStateToProps,
    mapDispatchToProps
   
)(CakeContainer)

