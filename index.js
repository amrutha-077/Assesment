
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './Navigation_Contact/app'
// import App from './Navigation/app'
// import App from './routers_scoreboard/app';
// import App from './Context_form/app'
// import App from './Context/app'
// import App from './Class_context/app';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
 <BrowserRouter>
 <App></App>
 </BrowserRouter>
 {/* <App></App> */}
</>
 
);




