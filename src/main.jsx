import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Page from './page';
import Layout from './layout';

let appMountPoint = document.querySelector('#app');
ReactDOM.render(
    <Layout>
        <Page structure={null} />
    </Layout>, appMountPoint);
