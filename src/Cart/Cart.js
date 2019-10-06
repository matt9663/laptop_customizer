import React from 'react';
import Total from '../Total/Total.js';
import Summary from '../Summary/Summary.js';

class Cart extends React.Component {
    render() {       
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                <Summary 
                    selected={this.props.selected}
                />
                <Total 
                    selected={this.props.selected}
                />            
            </section>
        )
    }
}

export default Cart;