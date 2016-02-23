import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Page from './page';

let appMountPoint = document.querySelector('#app');
ReactDOM.render(<Page structure={null} />, appMountPoint);
