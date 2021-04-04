import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';


const useStyles = (theme) => ({
    root: {
        maxWidth: "100%",
    }
});

export class LowMarginRecipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 80
        }
    
    }

   
    render() {

        const CircularProgressWithLabel = (props) => {
            return (
                <Box position="relative" display="inline-flex">
                    <CircularProgress className="Progress-color-error" variant="determinate" {...props} />
                    <Box
                        top={0}
                        left={0}
                        bottom={0}
                        right={0}
                        position="absolute"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(
                            props.value,
                        )}%`}</Typography>
                    </Box>
                </Box>
            );
        }

        const { classes } = this.props;

        const RenderLoadingHome = () => {
            if (this.props.data.recipe_by_margin_bottom.isLoading) {
                return (

                    <div className="card-content">
                        <CircularProgress />
                       
                    </div>
                )

            }
            else{
                
                if(this.props.data.recipe_by_margin_bottom.errMessage===null){
                    return (
                        <div className="card-content">
                        {this.props.data.recipe_by_margin_bottom.data.results.map((item,key)=>{
                            return(
                                <div key={key}>
                                <div style={{minHeight:"50px"}}>
                                <Typography variant="subtitle2" style={{fontSize:"12px"}}>{item.name}</Typography>
                
                                </div>
                                <CircularProgressWithLabel value={item.margin} />

                            </div>
                            );
                        })}
                       
                       
                    </div>
                    )
                }
                else{
                    return(
                        <div className="card-content">
                                <Typography variant={'subtitle2'} color={'error'}>{this.props.data.recipe_by_margin_bottom.errMessage}...</Typography>
                        </div>
                       )
                }
            }

        }
        return (
            <div className="card-container">
                <Card className={classes.root}>
                    <CardHeader
                        className="card-header"
                        align="center"
                        subheader="Low Margin Recipes"
                    />
                    <CardContent>

                       <RenderLoadingHome/>


                    </CardContent>


                </Card>
            </div>
        )
    }
}

export default withStyles(useStyles)(LowMarginRecipes);



