import { combineReducers } from 'redux';
import itemReducer from './itemReducers';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    item: itemReducer,
    form: formReducer
});