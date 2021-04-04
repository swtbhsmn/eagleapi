import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {recipe_by_fluctuation,recipe_by_margin_top,recipe_by_margin_bottom,recipe_list} from './reducers';
const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            recipe_by_fluctuation:recipe_by_fluctuation,
            recipe_by_margin_top:recipe_by_margin_top,
            recipe_by_margin_bottom:recipe_by_margin_bottom,
            recipe_list:recipe_list

        }), applyMiddleware(thunk,logger)
    );

    return store;
}

export default ConfigureStore;