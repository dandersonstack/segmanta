import React, { useState } from 'react';
import propTypes from 'prop-types';
import styles from './nps-questions.css';
import NpsQuestionResults from "./NpsQuestionResults";
import Button from "@material-ui/core/Button";


function NpsQuestion(props) {
    // Declare a new state variable, which we'll call "count"
    const [selected, setSelected] = useState(0);
    const options = [1,2,3,4,5,6,7,8,9,10];
    const {title} = props;
    return (
        <div className="nps-container">
            <h3 className="nps-title">
                {title}
            </h3>
            <div className="nps-options-list">
                {
                    options.map((option)=>{
                        return (
                            <Button variant="contained"
                                    color="primary"
                                    onClick={(event)=>{setSelected(option)}}
                                    style={{margin: "2px 3px"}}>
                                {option}
                            </Button>
                        )
                    })
                }
                <div className="options-list-footer">
                    <p style={{"float":"left"}}>Not Likely</p><p style={{"float":"right"}}>Very Likely</p>
                </div>
            </div>

            <div className="nps-question-footer">
                <Button variant="contained"  color="primary" style={{width:"10%"}}>
                    Submit
                </Button>
            </div>
        </div>
    );
}

NpsQuestion.propTypes = {
    title: propTypes.string
};

export default NpsQuestion;