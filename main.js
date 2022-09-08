// Version 17
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

ReactDOM.render(<App />, document.querySelector('#root'));


// Version 18
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

const contendor = document.querySelector('#root');
ReactDOM.createRoot(contendor).render(<App name="Luis" lastname="Rodriguez" />);

