import {todoReducer} from './Todo.reducer';
import {themeReducer} from './Theme.reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    todo: todoReducer,
    darkTheme: themeReducer
});

export default rootReducer;