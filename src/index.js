import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import stores from './store';

const rootEl = document.getElementById("root");
function Main() {
    return (
        <Provider store={stores}>
            <App />
        </Provider>

    )
}
// either <div> or <App />
// ReactDOM.render(<div>hello</div>, rootEl);
// instead of having <div>hello</div> we gonna put the App.js it will be like (replace line 2 with this)
ReactDOM.render(<Main />, rootEl);