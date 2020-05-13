import React, { Component } from "react";
import { cloneDeep } from "lodash";

class Shlorm extends Component {
    constructor(props) {
        super(props);

        this.state = this.createState(props.children);
    }

    createState(children, state = {}) {
        React.Children.forEach(children, (child) => {
            let type = child.props["shlorm-type"];

            // If type is not defined here, we check the 'shlormType' property on the component instance itself
            if (!type) type = child.type.shlormType;

            if (["input", "select"].includes(type)) {
                state[child.props.name] = {
                    value: child.props.value || "",
                    valid: child.props.valid || true,
                    validator: child.props.validator || null,
                    onChange: child.props.onChange || null,
                };

                return;
            }

            if (
                child.props.children &&
                typeof child.props.children !== "string"
            ) {
                this.createState(child.props.children, state);
            }
        });

        return state;
    }

    handleChange(e) {
        let { name, value } = e.target;

        if (typeof this.state[name].onChange === "function") {
            value = this.state[name].onChange(e);
        }

        this.setState({
            [name]: {
                ...this.state[name],
                value,
                valid: true,
            },
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const { elements } = e.target;

        const state = cloneDeep(this.state);

        const form = {};
        const invalid = [];

        Object.keys(state).forEach((key) => {
            let { value, valid, validator } = state[key];

            form[key] = value;

            if (validator) {
                valid = validator(value);
            }

            if (!valid) invalid.push(key);
        });

        if (invalid.length) {
            elements.namedItem(invalid[0]).focus();
            this.setState(state);

            this.props.onError(invalid);

            return;
        }

        this.props.onSubmit(form);
    }

    render() {
        const { children, onSubmit, ...props } = this.props;

        return (
            <form
                onChange={this.handleChange.bind(this)}
                onSubmit={this.handleSubmit.bind(this)}
                {...props}
            >
                {children}
            </form>
        );
    }
}

export default Shlorm;
