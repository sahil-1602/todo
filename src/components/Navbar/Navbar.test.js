import {render, fireEvent, cleanup} from '@testing-library/react';
import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Navbar from './Navbar';
// import "jest-dom/extend-expect";
import {store} from '../../store';
import {rootReducer} from '../../reducers';

afterEach(cleanup);

const startingState = {todo: [], darkTheme: false};

function renderRedux(component, {initialState, store = createStore(rootReducer, initialState)} = {}){
    return {
        ...render(<Provider store={store}>{component}</Provider>),
    }
}

it("checkNavbarRender", () => {
    const {queryAllByTitle} = renderRedux(<Navbar/>);
    const switchButton = queryAllByTitle("switch");
    expect(switchButton).toBeTruthy();
});