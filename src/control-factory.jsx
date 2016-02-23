import * as React from 'react';

export default class ControlFactory extends React.Component {
    render() {
        var control = this.props.options;

        if (control.type === 'label') {
            return (<span>{control.value}</span>);
        }

        if (control.type === 'input-text') {
            return (
                <div>
                    <label>{control.label}</label>
                    <input type="text" value={control.value}/>
                </div>);
        }

        if (control.type === 'input-date') {
            return (
                <div>
                    <label>{control.label}</label>
                    <input type="date" value={control.value}/>
                </div>
            );
        }

        if (control.type === 'input-datetime') {
            return (
                <div>
                    <label>{control.label}</label>
                    <input type="time" value={control.value}/>
                </div>
            );
        }
    }
}