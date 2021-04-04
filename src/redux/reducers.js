import * as ActionTypes from './action_types';

export const recipe_list = (state={isLoading:false, errMessage:null,data:[]},action)=>{
    switch(action.type){

        case ActionTypes.LOADING_RECIPE_LIST:
            return {...state,isLoading:true,errMessage:null};
        
        case ActionTypes.LOADED_RECIPE_LIST:
            return {...state,isLoading:false,errMessage:null,data:action.payload};
        
        case ActionTypes.LOADING_FAILED_RECIPE_LIST:
            return { ...state,isLoading:false,errMessage:action.payload};
        
        default:
            return state;
    }
}


export const recipe_by_margin_bottom = (state={isLoading:false, errMessage:null,data:[]},action)=>{
    switch(action.type){

        case ActionTypes.LOADING_RECIPE_BY_MARGIN_BOTTOM:
            return {...state,isLoading:true,errMessage:null};
        
        case ActionTypes.LOADED_RECIPE_BY_MARGIN_BOTTOM:
            return {...state,isLoading:false,errMessage:null,data:action.payload};
        
        case ActionTypes.LOADING_FAILED_RECIPE_BY_MARGIN_BOTTOM:
            return { ...state,isLoading:false,errMessage:action.payload};
        
        default:
            return state;
    }
}

export const recipe_by_margin_top = (state={isLoading:false, errMessage:null,data:[]},action)=>{
    switch(action.type){

        case ActionTypes.LOADING_RECIPE_BY_MARGIN_TOP:
            return {...state,isLoading:true,errMessage:null};
        
        case ActionTypes.LOADED_RECIPE_BY_MARGIN_TOP:
            return {...state,isLoading:false,errMessage:null,data:action.payload};
        
        case ActionTypes.LOADING_FAILED_RECIPE_BY_MARGIN_TOP:
            return { ...state,isLoading:false,errMessage:action.payload};
        
        default:
            return state;
    }
}


export const recipe_by_fluctuation = (state={isLoading:false, errMessage:null,data:[]},action)=>{
    switch(action.type){

        case ActionTypes.LOADING_RECIPE_BY_FLUCTUATION:
            return {...state,isLoading:true,errMessage:null};
        
        case ActionTypes.LOADED_RECIPE_BY_FLUCTUATION:
            return {...state,isLoading:false,errMessage:null,data:action.payload};
        
        case ActionTypes.LOADING_FAILED_RECIPE_BY_FLUCTUATION:
            return { ...state,isLoading:false,errMessage:action.payload};
        
        default:
            return state;
    }
}
