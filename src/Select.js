import React from "react";

import shlormify from "./shlormify";

class Select extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, validator, options = [], ...rest } = this.props;

        return (
            <select ref="input" name={name} {...rest}>
                {options.map(({ value, text }, index) => (
                    <option value={value} key={`${name}-${index}`}>
                        {text}
                    </option>
                ))}
            </select>
        );
    }
}

export default shlormify(Select);
