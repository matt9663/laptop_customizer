import React from 'react';
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class FeatureOption extends React.Component {    
    render() {
        return(
            <div className="FeatureOption">
                <input
                  type="radio"
                  id={this.props.id}
                  className="feature__option"
                  checked={this.props.name === this.props.selected[this.props.label].name}
                  onChange={e => this.onChange(this.label, this.item)}
                />
                <label htmlFor={this.props.id} className="feature__label">
                  {this.props.name} ({USCurrencyFormat.format(this.props.cost)})
                </label>
            </div>
        )
    }
}
export default FeatureOption;