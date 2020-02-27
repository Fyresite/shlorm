import React from "react";

import shlormify from "./shlormify";

class Input extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { type = "text", validator, ...rest } = this.props;

        return <input type={type} ref="input" {...rest} />;
    }
}

// Input.displayName = "Input";

export default shlormify(Input);
