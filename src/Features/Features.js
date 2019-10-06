import React from 'react';
import FeatureOption from '../FeatureOption/FeatureOption.js';
import slugify from 'slugify';

  
class Feature extends React.Component {
    render() {
        const options = this.props.options.map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return (
              <FeatureOption 
                key={itemHash}              
                className="feature__item" 
                label={this.props.feature}
                selected={this.props.selected}
                item={item}
                {...item}                
                onChange={this.props.onChange}      
               />
            )
        })
        return (
            <fieldset className="feature" key={this.props.id}>
              <legend className="feature__name">
                <h3>{this.props.name}</h3>
              </legend>
              {options}
            </fieldset>
        );
    }  
} 

export default Feature; 