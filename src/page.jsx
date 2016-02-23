import * as React from 'react';
import ControlFactory from './control-factory';

export default class Demo extends React.Component {
    static displayName = 'Demo';

    render() {
        var a = 12;
        let PageConfig = {
            title:    'Demo Page',
            sections: [
                {
                    title:    'Master',
                    controls: ['grid']
                },
                {
                    title: 'Detail',
                    controls: ['input', 'date', 'datetime']
                }
            ],
            controls: {
                'grid': {
                    type:  'label',
                    value: 'Hello, world'
                },
                'input': {
                    type: 'input-text',
                    label: 'SSN'
                },
                'date': {
                    type: 'input-date',
                    label: 'Emmited at'
                },
                'datetime': {
                    type: 'input-datetime',
                    label: 'Play with time'
                }
            }
        }
        const structure = PageConfig;

        let sections = PageConfig.sections.map((section, index) => {
            var size = 12 / section.controls.length;

            console.log('section', section, `size ${size}`);   
            var controls = section.controls.map((control, controlIndex) => {
                var controlProps = PageConfig.controls[control];

                console.log('controls', control, controlProps);
                return ( <div
                        className={`col s${size}`}
                        key={`control-${controlIndex}`}
                    >
                        <div className="divider"></div>
                    <ControlFactory
                        options={controlProps}/>
                    </div>
                );
            }); 

            return (<div
                className="section hoverable"
                key={`section-${index}`}>
                {section.title}
                <div className="row">
                    {controls}
                </div>
            </div>);
        });

        return (<div className="container z-depth-2">
            <h1>{structure.title}</h1>
            {sections}
        </div>);
    }
    }
