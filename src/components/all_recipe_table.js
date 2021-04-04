import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Card, Typography, IconButton } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Chip from '@material-ui/core/Chip';
const useStyles = {
    table: {
        minWidth: "300",
        maxHeight: "400px"
    },
    paper: {
        width: '100%',
        marginBottom: "5px",

    }
};



class DataTable extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            selected: [],
            page: 0,
            rowsPerPage: 5,
            checked: false,
            checked_list: []
        }



        this.myRef = React.createRef();
        this.handleSelectAllClick.bind(this.handleSelectAllClick);
        this.dateTime.bind(this.dateTime);
    }

    handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = this.props.data.recipe_list.data.results.map((n) => n.name);
            this.setState({ selected: newSelecteds, checked: true });
            return;
        }
        else {
            this.setState({ selected: [], checked: false });
            return;
        }

    };


    dateTime = (value) => {
        let data = new Date(value);
        return data.toDateString();
    }

    handleChangePage = (event, newPage) => {
        this.setState({ page: newPage });
    };

    handleChangeRowsPerPage = (event) => {

        this.setState({ page: 0, rowsPerPage: parseInt(event.target.value, 10) })
    };
    isSelected = (name) => this.state.selected.indexOf(name) !== -1;

    handleClick = (event, name) => {

        let { selected } = this.state;

        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);

        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        if (selected.length === 1 && this.state.checked === true) {
            this.setState({ checked: false });
        }
        this.setState({ selected: newSelected });
    };

    componentDidMount() {
        if (this.myRef.current) {
            this.myRef.current.focus();
        }
    }
    render() {

        const { classes } = this.props;
        const RenderLoadingHome = () => {
            if (this.props.data.recipe_list.isLoading) {
                return (

                    <div className="card-container table-container">

                        <CircularProgress />

                    </div>
                )
            } else {

                if (this.props.data.recipe_list.errMessage === null) {



                    return (<div className={`card-container table-container`}>
                        <Grid >
                            <Paper className={classes.paper}>
                                <TableContainer className="table-body" >
                                    <Table className={classes.table} aria-label="a dense table" size={'small'}>
                                        <TableHead style={{background:"rgb(153, 170, 207)"}}>
                                            <TableRow >
                                                <TableCell padding="checkbox">
                                                    <Checkbox
                                                        checked={this.state.checked}
                                                        onChange={this.handleSelectAllClick}
                                                        inputProps={{ 'aria-label': 'select all desserts' }}
                                                    />
                                                </TableCell>
                                                <TableCell align="left" className="text-size-x">NAME</TableCell>
                                                <TableCell align="left" className="text-size-x">LAST UPDATE</TableCell>
                                                <TableCell align="left" className="text-size-x">COGS%</TableCell>
                                                <TableCell align="left" className="text-size-x">COST PRICE()</TableCell>
                                                <TableCell align="left" className="text-size-x">SALE PRICE</TableCell>
                                                <TableCell align="left" className="text-size-x">GROSS MARGIN</TableCell>
                                                <TableCell align="left" className="text-size-x">TAGS/ACTIONS</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody >
                                            {this.props.data.recipe_list.data.results.map((item, key) => {
                                                const isItemSelected = this.isSelected(item.name);
                                                const labelId = `enhanced-table-checkbox-${key}`;
                                                return (
                                                    <TableRow key={key} hover
                                                        role="checkbox"
                                                        aria-checked={isItemSelected}
                                                        tabIndex={-1}
                                                        selected={isItemSelected}
                                                        onClick={(event) => this.handleClick(event, item.name)}
                                                    >
                                                        <TableCell padding="checkbox">
                                                            <Checkbox
                                                                checked={isItemSelected}
                                                                inputProps={{ 'aria-label': labelId }}

                                                            />
                                                        </TableCell>
                                                        <TableCell component="th" scope="row">{item.name}</TableCell>
                                                        <TableCell align="left">{this.dateTime(item.last_updated.date)}</TableCell>
                                                        <TableCell align="left">{item.cogs}</TableCell>
                                                        <TableCell align="left">{item.cost_price.toFixed(2)}</TableCell>
                                                        <TableCell align="left">{item.sale_price.toFixed(2)}</TableCell>
                                                        <TableCell align="left">{item.gross_margin.toFixed(2)}</TableCell>
                                                        <TableCell align="left"><Chip label={item.manufacturing_outlet} /></TableCell>
                                                        
                                                    </TableRow>
                                                );
                                            }
                                            )}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <Card className={'table-page'}>
                                    <Typography variant={'subtitle2'}>Rows per page: {this.props.data.recipe_list.data.results.length}</Typography>
                                    <IconButton>
                                        <ChevronLeftIcon />
                                    </IconButton>

                                    <IconButton>
                                        <ChevronRightIcon />
                                    </IconButton>

                                </Card>
                            </Paper>
                        </Grid>
                    </div>);
                }
                else {
                    return (
                        <div className="card-container table-container">
                            <Typography variant={'subtitle2'} color={'error'} align="center">{this.props.data.recipe_list.errMessage}</Typography>

                        </div>
                    )
                }

            }
        }
        return (

            <RenderLoadingHome />

        );
    }


}
export default withStyles(useStyles)(DataTable)