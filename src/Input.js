import React from "react";

// class Input extends React.Component {
//     render() {
//         const { type = "text", valid, ref, validator, ...rest } = this.props;
//         return <input type={type} ref={ref} {...rest} />;
//     }
// }

const Input = React.forwardRef((props, ref) => {
    const { type = "text", valid, validator, value, ...rest } = props; // pull value out of 'rest' so we don't have to rely on re-renders. I know this is bad, but let's face it I'm cloning react children and injecting props we're way passed that.

    console.log("ref", ref);

    return <input type={type} ref={ref.current} {...rest} />;
});

Input.defaultProps = {
    "formler-input": true
};

Input.displayName = "Input";

export default Input;
