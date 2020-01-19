import React from 'react';
import propTypes from 'prop-types';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: '1',
        margin: 'auto 10px',
        fontWeight: '600',
    },
}));

function RangeInfo({groupName, percentage, totalCount}) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className="fl-left">
                {groupName}
            </div>
            <div className="fl-right">
                {percentage}%({totalCount})
            </div>
        </div>);
}

RangeInfo.propTypes = {
    groupName: propTypes.object,
    percentage: propTypes.string,
};

RangeInfo.defaultProps = {
    limit: propTypes.object,
    totalCount: propTypes.string,
};

export default RangeInfo;