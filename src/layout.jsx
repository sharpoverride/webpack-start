import * as React from 'react';

export default class Layout extends React.Component {
    render() {
        var children = this.props.children;

        return (<div style={{
            display: 'flex',
            flexDirection: 'row',
            margin: 0,
            padding: 0,
            width: '100%',
            height: '100%'
        }}>
            <div
                style={{
                    margin: 0,
                    padding: 0,
                    width: '250px',
                    position: 'absolute',
                    height: '100%',
                    background: 'red'
                }}
            >Sidebar
            </div>
            <div style={{
                flex: 'none',
                minWidth: '250px',
                maxWidth: '250px',
                backgroundColor: 'yellow'
            }}>
                back
                </div>
            <div
                style={{
                flex: '1 auto'
                }}
                >
            {children}
            </div>
        </div>);
    }
}