import React from 'react';
import { connect } from 'react-redux';
import { buyPizza } from '../redux';

function PizzaContainer (props) {
    return (
        <div>
            <h2>Number of pizzas - {props.numOfPizzas}</h2>
            <button onClick={props.buyPizza}>Buy Pizza</button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        numOfPizzas: state.pizza.numOfPizzas
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyPizza: () => dispatch(buyPizza())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaContainer);
