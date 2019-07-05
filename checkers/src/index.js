import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Game from './components/game';
import checkersApp from './store/reducers/root-reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'


// ========================================

const store = createStore(checkersApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <Provider store={store}>
        <DndProvider backend={HTML5Backend}>
            <Game />
        </DndProvider>
    </Provider>,
    document.getElementById('root')
);