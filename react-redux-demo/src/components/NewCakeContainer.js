import React, {useState} from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux';

function NewCakeContainer(props){
    console.log(props)
    const [number , setNumber] = useState(1);
    return (
        <div>
             <h2>(NewCakeContainer)Number of cakes - {props.numOfCakes}</h2>
             <input type='text' value={number} onChange = {e=> setNumber(e.target.value)}/>
             <button onClick={()=>props.buyCake(number)}> BUY {number} CAKES</button>
        </div>
    )

}


// when you want to access the redux state to component you have to define
// mapStatetoProps
// it has the redux state as the parameter
// which can be used to get the appropriate state properties

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

// for dispatching actions we have this function 
//  it has dispatch method as a parameter and it allows us to map action creators to props in our component

const mapDispatchToProps = dispatch =>{
    return {
        buyCake: (number) => dispatch(buyCake(number))
    }
}


// connect function connects the react component to the redux store
export default connect(
    mapStateToProps,
    mapDispatchToProps
   
)(NewCakeContainer)

