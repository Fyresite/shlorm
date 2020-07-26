import React, { Component } from "react";
import { cloneDeep } from "lodash";

import recursiveForEach from "utils/recursive-for-each";

export class Shlorm extends Component {
    constructor(props) {
        super(props);

        this.state = { submitted: false };
        this.inputs = [];

        recursiveForEach(props.children, (child) => {
            if (child.type.shlorm) {
                this.state[child.props.name] = {
                    value: child.props.value || "",
                    valid: child.props.valid || true,
                    type: child.type.shlorm,
                };
                this.inputs.push(child);
            }
        });
    }

    getForm() {
        const form = {};

        Object.keys(this.state).forEach((key) => {
            if (key !== "submitted") form[key] = this.state[key].value;
        });

        return form;
    }

    handleFormChange = (e) => {
        this.setState({
            [e.target.name]: {
                value: e.target.value,
                valid: true,
            },
        });
    };

    handleSubmit(e) {
        e.preventDefault();

        const state = cloneDeep(this.state);
        const invalid = [];

        this.inputs.forEach((input) => {
            const { errorMessage, name, validator } = input.props;
            const { value } = this.state[name];
            const valid = validator(value);

            state[name].valid = valid;

            if (!valid || typeof valid === "string") {
                invalid.push({
                    name,
                    message:
                        typeof valid === "string"
                            ? valid
                            : errorMessage || `${name} is invalid`,
                });
            }
        });

        if (invalid.length) {
            const { name } = invalid[0];

            this.form
                .querySelector(`${state[name].type}[name="${name}"]`)
                .focus();
        }

        state.submitted = Date.now();

        this.setState(state, () => {
            if (invalid.length) {
                if (this.props.onError) this.props.onError(invalid);
            } else {
                if (this.props.onSubmit) this.props.onSubmit(this.getForm());
            }
        });
    }

    render() {
        const { children } = this.props;
        return (
            <form
                onChange={this.handleFormChange.bind(this)}
                onSubmit={this.handleSubmit.bind(this)}
                ref={(ref) => (this.form = ref)}
            >
                {children}
            </form>
        );
    }
}

export default Shlorm;
