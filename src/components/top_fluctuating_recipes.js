import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import CircularProgress from '@material-ui/core/CircularProgress';
const useStyles = (theme) => ({
    root: {
        maxWidth: "100%",
    }
});

export class TopMarginRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 80
        }

    }


    render() {


        const { classes } = this.props;
        const RenderLoadingHome = () => {
            if (this.props.data.recipe_by_fluctuation.isLoading) {
                return (

                    <div className="card-content">
                        <CircularProgress />
                       
                    </div>
                )

            }
            else{
                if(this.props.data.recipe_by_fluctuation.errMessage===null){

                    return (
                        <div className="card-content">
                        <div>
                            <div style={{ minHeight: "50px" }}>
                                <Typography variant="subtitle2" style={{fontSize:"12px"}}>{this.props.data.recipe_by_fluctuation.data.results[0].name}</Typography>

                            </div>
                            <div className="space-y">
                                <Divider />
                            </div>
                            <div className="top-recipe-space">
                                <Typography variant="inherit" style={{ fontSize: "14px" }} className="Progress-color-success" >5%</Typography>
                                <ArrowUpwardIcon className="Progress-color-success svg-icon-size" />
                            </div>

                        </div>
                        <div>
                            <div style={{ minHeight: "50px" }}>
                                <Typography variant="subtitle2" style={{fontSize:"12px"}}>{this.props.data.recipe_by_fluctuation.data.results[1].name}</Typography>
                            </div>
                            <div className="space-y">
                                <Divider />
                            </div>
                            <div className="top-recipe-space">
                                <Typography variant="inherit" style={{ fontSize: "14px" }} className="Progress-color-error">5%</Typography>
                                <ArrowDownwardIcon className="Progress-color-error svg-icon-size" />
                            </div>
                        </div>
                        <div>
                            <div style={{ minHeight: "50px" }}>
                                <Typography variant="subtitle2" style={{fontSize:"12px"}}>{this.props.data.recipe_by_fluctuation.data.results[2].name}</Typography>
                            </div>
                            <div className="space-y">
                                <Divider />
                            </div>
                            <div className="top-recipe-space">
                                <Typography variant="inherit" style={{ fontSize: "14px" }} className="Progress-color-error">5%</Typography>
                                <ArrowDownwardIcon className="Progress-color-error svg-icon-size" />
                            </div>

                        </div>
                    </div>


                    )
                }
                else{
                    return(
                        <div className="card-content">
                        <Typography variant={'subtitle2'} color={'error'}>{this.props.data.recipe_by_fluctuation.errMessage}...</Typography>
                        </div>
                    );
                }
            }
        }
        return (
            <div className="card-container">
                <Card className={classes.root}>
                    <CardHeader
                        className="card-header"
                        align="center"
                        subheader="Top Fluctuating Recipes"
                    />
                    <CardContent>

                    <RenderLoadingHome/>
                       
                    </CardContent>


                </Card>
            </div>
        )
    }
}

export default withStyles(useStyles)(TopMarginRecipe);

