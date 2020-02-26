import React from "react";

class Input extends React.Component {
    static defaultProps = {
        "shlorm-input": true,
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { type = "text", valid, ref, validator, value, ...rest } = this.props; // pull value out of 'rest' so we don't have to rely on re-renders. I know this is bad, but let's face it I'm cloning react children and injecting props we're way passed that.
        return <input type={type} ref="input" {...rest} />;
    }
}

Input.displayName = "Input";

export default Input;
