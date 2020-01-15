import React from "react";

function NpsQuestionOption(props) {
    const handleClick = () => {
        this.props.onHeaderClick(value);
    };
    const {value} = props;
    return (
        <div className="option" value={value} key={value} onClick={(event) => console.log(value)}>
            <div className="option-title">{value}</div>
        </div>
    )
}

export default NpsQuestionOption;