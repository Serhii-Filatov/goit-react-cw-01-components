import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from 'components/App';

// vanila JS
// const div = document.createElement('div');
// const root = document.getElementById('root');
// root.append(div);
// div.id = 'some-ID';
// div.classList = 'test-class';

// const p = document.createElement('p');
// p.textContent = 'I am P';
// div.append(p);

// React
//const paragraph = React.createElement('p', {id: 'test-P-id', children: ['I am P']});

// const p = <p id="test-P-id">I am P</p>;

// const div = React.createElement(
//   'div',
//   // props
//   {
//     name: 'main',
//     id: 'test-id',
//     className: 'test-class',
//     children: p,
//   },
//   // [children]
// );

// const div = (
//   <div name="main" id="test-id" class="test-class">
//     {p}
//   </div>
// );

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//   </React.StrictMode>
// );
