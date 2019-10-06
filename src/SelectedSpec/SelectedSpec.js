import React from 'react';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class SelectedSpec extends React.Component {
    render() {
        return (
            <div className="SelectedSpec" key={this.props.id}>
                <div className="summary__option__label">{this.props.label} </div>
                <div className="summary__option__value">{this.props.name}</div>
                <div className="summary__option__cost">
                  {USCurrencyFormat.format(this.props.cost)}
                </div>
            </div>

        )
    }
}
export default SelectedSpec;