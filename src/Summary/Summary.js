import React from 'react';
import SelectedSpec from '../SelectedSpec/SelectedSpec.js';

class Summary extends React.Component {
    render() {
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];
            return (
            <SelectedSpec {...selectedOption} key={featureHash} label={feature} id={featureHash}/>
            )              
        });    
        return (
            <div className="summary_section">
                {summary}
            </div>
        )  
    }
}
export default Summary;