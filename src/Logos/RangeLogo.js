import React from 'react';
import propTypes from 'prop-types';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    root: {
        width: '60px',
        borderRadius: '10px',
        margin: 'auto 10px',
        color: 'white',
    },
}));

function RangeLogo(props) {
    const classes = useStyles();
    return (
        <div className={classes.root} style={{backgroundColor: props.color}}>
            {props.limit.from}-{props.limit.to}
        </div>);
}

RangeLogo.propTypes = {
    limit: propTypes.object,
    color: propTypes.string,
};

export default RangeLogo;