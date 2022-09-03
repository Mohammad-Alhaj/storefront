import React from 'react';
import { createRoot } from 'react-dom/client';
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
const root = createRoot(rootEl);
root.render(<Main tab="home" />);