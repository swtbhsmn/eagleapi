import * as ActionTypes from './action_types';

const baseUrl = 'https://beta.eagleowl.in/';
const recipe_list_link = 'api/v1/mock/organization/18/outlet/18/recipe/recipes/?page=1';
const recipe_by_margin_top_link = 'api/v1/mock/organization/18/outlet/18/recipe/margin-group/?order=top';
const recipe_by_margin_bottom_link = 'api/v1/mock/organization/18/outlet/18/recipe/margin-group/?order=bottom';
const recipe_by_fluctuation_link = 'api/v1/mock/organization/18/outlet/18/recipe/fluctuation-group/?order=top';


export const recipeListLoading = () => ({
    type: ActionTypes.LOADING_RECIPE_LIST
});

export const recipeListSuccess = (response) => ({
    type: ActionTypes.LOADED_RECIPE_LIST,
    payload: response
});

export const recipeListFailed = (response) => ({
    type: ActionTypes.LOADING_FAILED_RECIPE_LIST,
    payload: response
});

export const recipeList = ()=> dispatch =>{

    dispatch(recipeListLoading(true));

    return fetch(`${baseUrl+recipe_list_link}`, {
        method: "GET",
        headers: {
            'Content-Type': 'Application/json'
        }
    })
        .then(response => {

            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                throw error;
            }
        )
        .then(response => response.json())
        .then(response => {

            //console.log(response);
            dispatch(recipeListSuccess(response));
        })
        .catch(error => dispatch(recipeListFailed(error.message)));
}

//======================================TOP=========================================================

export const recipeByMarginTopLoading = () => ({
    type: ActionTypes.LOADING_RECIPE_BY_MARGIN_TOP
});

export const recipeByMarginTopSuccess = (response) => ({
    type: ActionTypes.LOADED_RECIPE_BY_MARGIN_TOP,
    payload: response
});

export const recipeByMarginTopFailed = (response) => ({
    type: ActionTypes.LOADING_FAILED_RECIPE_BY_MARGIN_TOP,
    payload: response
});

export const recipeByTopMargin = ()=> dispatch =>{

    dispatch(recipeByMarginTopLoading(true));

    return fetch(`${baseUrl+recipe_by_margin_top_link}`, {
        method: "GET",
        headers: {
            'Content-Type': 'Application/json'
        }
    })
        .then(response => {

            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                throw error;
            }
        )
        .then(response => response.json())
        .then(response => {

            //console.log(JSON.stringify(response.results));
            dispatch(recipeByMarginTopSuccess(response));
        })
        .catch(error => dispatch(recipeByMarginTopFailed(error.message)));
}


//======================================BOTTOM=========================================================

export const recipeByMarginBottomLoading = () => ({
    type: ActionTypes.LOADING_RECIPE_BY_MARGIN_BOTTOM
});

export const recipeByMarginBottomSuccess = (response) => ({
    type: ActionTypes.LOADED_RECIPE_BY_MARGIN_BOTTOM,
    payload: response
});

export const recipeByMarginBottomFailed = (response) => ({
    type: ActionTypes.LOADING_FAILED_RECIPE_BY_MARGIN_BOTTOM,
    payload: response
});

export const recipeByBottomMargin = ()=> dispatch =>{

    dispatch(recipeByMarginBottomLoading(true));

    return fetch(`${baseUrl+recipe_by_margin_bottom_link}`, {
        method: "GET",
        headers: {
            'Content-Type': 'Application/json'
        }
    })
        .then(response => {

            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                throw error;
            }
        )
        .then(response => response.json())
        .then(response => {

            //console.log(response);
            dispatch(recipeByMarginBottomSuccess(response));
        })
        .catch(error => dispatch(recipeByMarginBottomFailed(error.message)));
}
//=============================================================================================


export const recipeByFluctuationLoading = () => ({
    type: ActionTypes.LOADING_RECIPE_BY_FLUCTUATION
});

export const recipeByFluctuationSuccess = (response) => ({
    type: ActionTypes.LOADED_RECIPE_BY_FLUCTUATION,
    payload: response
});

export const recipeByFluctuationFailed = (response) => ({
    type: ActionTypes.LOADING_FAILED_RECIPE_BY_FLUCTUATION,
    payload: response
});

export const recipeByFluctuation = ()=> dispatch =>{

    dispatch(recipeByFluctuationLoading(true));

    return fetch(`${baseUrl+recipe_by_fluctuation_link}`, {
        method: "GET",
        headers: {
            'Content-Type': 'Application/json'
        }
    })
        .then(response => {

            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                throw error;
            }
        )
        .then(response => response.json())
        .then(response => {

            //console.log(response);
            dispatch(recipeByFluctuationSuccess(response));
        })
        .catch(error => dispatch(recipeByFluctuationFailed(error.message)));
}
