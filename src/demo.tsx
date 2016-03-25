import * as React from 'react'

export default class Demo extends React.Component<any, any> {
    static displayName = 'Demo';

    render() {
        return (<div>
            <h1>Demo</h1>
            <p>Hello, live-reloading!</p>
        </div>);
    }
}
