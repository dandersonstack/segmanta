import React, { useState } from 'react';
import propTypes from 'prop-types';
import styles from './nps-questions.css';
import NpsQuestionResults from "./NpsQuestionResults";
import NpsQuestionOption from "./NpsQuestionOption";


function NpsQuestion(props) {
    // Declare a new state variable, which we'll call "count"
    const [selected, setSelected] = useState(0);
    const options = [1,2,3,4,5,6,7,8,9,10];
    const {title} = props;
    return (
        <div className="container">
            <h3 className="title">
                {title}
            </h3>
            <div className="options-list">
                {
                    options.map((option)=>{
                        return (
                            <NpsQuestionOption value={option}/>
                        )
                    })
                }

            </div>
            <p>Not Likely</p><p>Very Likely</p>
            <button className="submit" onClick={() => setSelected(selected + 1)}>Submit</button>
        </div>
    );
}

NpsQuestion.propTypes = {
    title: propTypes.string
};

export default NpsQuestion;