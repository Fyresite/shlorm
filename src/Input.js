import React from "react";

class Input extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { type = "text", valid, validator, value, ...props } = this.props;

        return <input defaultValue={value} type={type} {...props} />;
    }
}

Input.shlorm = "input";

export default Input;
