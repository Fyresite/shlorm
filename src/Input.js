import React from "react";

class Input extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { type = "text", valid, validator, ...rest } = this.props;

        return <input type={type} ref="input" {...rest} />;
    }
}

Input.shlormType = 'input';

export default Input;
