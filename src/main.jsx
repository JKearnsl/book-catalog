import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@material/web/all.js';
import {styles as typescaleStyles} from '@material/web/typography/md-typescale-styles.js';

document.adoptedStyleSheets.push(typescaleStyles.styleSheet);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <link href="https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/icon?family=Material+Symbols+Rounded" rel="stylesheet"/>
        <App/>
    </React.StrictMode>,
)
