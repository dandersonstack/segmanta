import React, { useState } from 'react';
import propTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import RangeLogo from "../Logos/RangeLogo";
import RangeInfo from "./RangeInfo";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        margin: '10px auto',
        width: '80%',
        paddingTop: '30px',

    },
    paper: {
        padding: theme.spacing(4),
        textAlign: 'center',
        minWidth: '110px',
        backgroundColor: '#eeeef0',
        color: theme.palette.text.secondary,
    },
    ratingsList: {
        display: 'flex',
        paddingLeft: '60px',
        flexDirection: 'column',
        height: '100%',
        
    },
    section: {
        display: 'flex',
        padding: '12px 0px',
        margin: '0px 10px',
        flexDirection: 'row',
        flexGrow: 1,
        borderBottom: 'solid thin lightgrey;'
    }
}));


function NpsQuestionResults(props) {
    const classes = useStyles();
    const {total} = props;
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid column xs={4} sm={4}>
                    <Paper className={classes.paper}>
                        <p>NPS Score</p>
                        <p>{total}</p>
                    </Paper>
                </Grid>


                <Grid item xs={8} sm={8}>
                    <div className={classes.ratingsList}>
                        <div className={classes.section}>
                            <RangeLogo limit={{from: '0', to: '6'}} color={'red'}/>
                            <RangeInfo groupName="Detractors" percentage="45" totalCount={45}/>
                        </div>
                        <div className={classes.section}>
                            <RangeLogo limit={{from: '7', to: '8'}} color={'orange'}/>
                            <RangeInfo groupName="Passivers" percentage="31" totalCount={31}/>

                        </div>
                        <div className={classes.section}>
                            <RangeLogo limit={{from: '9', to: '10'}} color={'green'}/>
                            <RangeInfo groupName="Starters" percentage="24" totalCount={24}/>
                        </div>
                    </div>

                </Grid>
            </Grid>
        </div>);
}

NpsQuestionResults.propTypes = {
    results: propTypes.object
};

export default NpsQuestionResults;