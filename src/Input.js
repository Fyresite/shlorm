import React from "react";

import shlormify from "./shlormify";

class Input extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            // "shlorm-input": shlorm,
            type = "text",
            validator,
            ...rest
        } = this.props;

        console.log(rest);

        return <input type={type} ref="input" {...rest} />;
    }
}

// Input.displayName = "Input";

export default shlormify(Input);
