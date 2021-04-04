import React, { Component, Suspense } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { recipeList, recipeByFluctuation, recipeByTopMargin,recipeByBottomMargin } from '../redux/action_creators';
import Grid from '@material-ui/core/Grid';
import {Card, Typography} from '@material-ui/core';

const HighMarginRecipes = React.lazy(() => import('./high_margin_recipes'));
const LowMarginRecipes = React.lazy(() => import('./low_margin_recipes'));
const TopMarginRecipe = React.lazy(() => import('./top_fluctuating_recipes'));
const RecipeTable = React.lazy(()=>import('./all_recipe_table'));
const Tabs = React.lazy(()=>import('./tabs'));
const mapStateToProps = state => {
    return {
        recipe_list: state.recipe_list,
        recipe_by_margin_top: state.recipe_by_margin_top,
        recipe_by_margin_bottom: state.recipe_by_margin_bottom,
        recipe_by_fluctuation: state.recipe_by_fluctuation
    };

}

const mapDispatchToProps = dispatch => ({

    fetchRecipeList: () => dispatch(recipeList()),
    fetchRecipeByFluctuation: () => dispatch(recipeByFluctuation()),
    fetchRecipeByTopMargin: () => dispatch(recipeByTopMargin()),
    fetchRecipeByBottomMargin: () => dispatch(recipeByBottomMargin()),

})
export class MainApp extends Component {

    componentDidMount() {
        //console.log(this.props.recipe_by_margin_top.isLoading)
        this.props.fetchRecipeList();
        this.props.fetchRecipeByFluctuation();
        this.props.fetchRecipeByTopMargin();
        this.props.fetchRecipeByBottomMargin();
    }
    render() {

        
        return (

            <div className="main-app">
                <Suspense fallback={<div>...</div>}>
                    <div className="main-app-container">
                  
                      <Grid container spacing={1}>
                            <Grid item xs>
                                <HighMarginRecipes data={this.props} />
                            </Grid>
                            <Grid item xs>
                                <LowMarginRecipes data={this.props} />
                            </Grid>
                            <Grid item xs>
                                <TopMarginRecipe data={this.props} />
                            </Grid>
                        </Grid>

                      
                    </div>
                    <Tabs/>
                    <Grid container spacing={1}>
                             <RecipeTable data={this.props} />
                    </Grid>
                </Suspense>
            </div>
        )
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainApp));
