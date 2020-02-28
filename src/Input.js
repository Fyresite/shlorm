import React from "react";

class Input extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { type = "text", validator, ...rest } = this.props;

        return <input type={type} ref="input" {...rest} />;
    }
}

Input.shlormInput = true;

export default Input;
