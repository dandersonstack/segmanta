import React, { useState } from 'react';
import propTypes from 'prop-types';
import styles from './nps-questions.css';
import Button from "@material-ui/core/Button";
const possibleRatings = [1,2,3,4,5,6,7,8,9,10];

function NpsQuestion(props) {
    // Declare a new state variable, which we'll call "count"
    const [selected, setSelected] = useState(0);
    const {title, submit} = props;
    return (
        <div className="nps-container">
            <h3 className="nps-title">
                {title}
            </h3>
            <div className="nps-options-list">
                {
                    possibleRatings.map((rating)=>{
                        const color = selected===rating?"primary":"default";
                        return (
                            <Button variant="contained"
                                    color={color}
                                    onClick={()=>{setSelected(rating)}}
                                    style={{margin: "2px 3px"}}>
                                {rating}
                            </Button>
                        )
                    })
                }
                <div className="options-list-footer">
                    <p className="fl-left">Not Likely</p><p className="fl-right">Very Likely</p>
                </div>
            </div>

            <div className="nps-question-footer">
                <Button variant="contained"
                        color="primary"
                        onClick={()=>{submit(selected)}}
                        style={{width:"10%"}}>
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