import React from 'react';
import Features from '../Features/Features.js';


class SpecSelect extends React.Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
          const featureHash = feature + '-' + idx;             
          return (
            <fieldset className="feature" key={featureHash}>
              <legend className="feature__name">
                <h3>{feature}</h3>
              </legend>
              <Features 
              options={this.props.features[feature]}
              feature={feature}
              selected={this.props.selected}
              onChange={this.props.updateFeature}
              />
            </fieldset>
           
          );
        });
        return (
            <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
          </form>
        )
    }    
}
export default SpecSelect;
