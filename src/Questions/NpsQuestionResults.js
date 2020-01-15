import React, { useState } from 'react';
import propTypes from 'prop-types';


function NpsQuestionResults(props) {
    return (
        <div className="container">
            <div className="overview">
                <p>NPS Score</p>
                <p>47</p>
            </div>
            <ol className="sections">
                <div>

                </div>
            </ol>
        </div>
    );
}

NpsQuestionResults.propTypes = {
    results: propTypes.object
};

export default NpsQuestionResults;