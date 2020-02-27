import React from "react";
import { v4 as uuid } from "uuid";
import cloneDeep from "lodash.clonedeep";

import shlormify from "./shlormify";

import Input from "./Input";

class Shlorm extends React.Component {
    constructor(props) {
        super(props);

        const state = { submitted: null };

        // Create state from children
        if (props.children) {
            React.Children.forEach(props.children, ({ props, ...child }) => {
                if (child.type.render && child.type.render.shlormInput) {
                    state[props.name] = {
                        value: props.value || "",
                        valid: true
                    };
                }
            });
        }

        this.state = state;

        this.form = { refs: {} };

        this.children = [];
    }

    shouldComponentUpdate(_, nextState) {
        // Makes sure this component never updates, which increases performance by stopping
        // unnecessary re-renders. We do want a re-render on submit though.
        if (this.state.submitted !== nextState.submitted) {
            // this.children = this.updateChildren(nextState);
            return true;
        }

        return false;
    }

    getForm() {
        const form = {};

        Object.keys(this.state).forEach(key => {
            if (key !== "submitted") form[key] = this.state[key].value;
        });

        return form;
    }

    updateChildren(state) {
        if (!this.props.children) return [];

        const children = React.Children.map(this.props.children, _child => {
            console.log("_child", _child);

            // Remove shlorm boolean tags so we don't get any warnings
            let { props: _props, ...child } = _child;

            let {
                // "shlorm-input": input,
                "shlorm-submit": submit,
                ...props
            } = _props;
            child = { props, ...child };

            const { name } = child.props;

            props.key = name ? `shlorm-input-${name}` : uuid();

            const input = _child.type.render && _child.type.render.shlormInput;

            console.log("input", input);

            if (input) {
                this.form.refs[name] = React.createRef();

                props.ref = this.form.refs[name];
                props.onChange = this.handleChange.bind(this, name);
                props = { ...props, ...state[name] }; // add value and valid to child
            }

            if (submit) {
                props.onClick = this.handleSubmit.bind(this);
            }

            return React.createElement(child.type, props);
            // return React.cloneElement(child, props);
        });

        return children;
    }

    handleChange(field, e) {
        this.setState({
            [field]: {
                value: e.target.value,
                valid: true
            }
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const { refs } = this.form;
        const state = cloneDeep(this.state);

        let invalid = [];
        let focused = false;

        Object.keys(refs).forEach(key => {
            const { current } = refs[key];

            console.log("current", current);

            if (current.props && current.props.validator) {
                let valid = current.props.validator(state[key].value);

                console.log("valid", valid);

                state[key].valid = valid;

                if (!valid) {
                    invalid.push({
                        field: key,
                        message:
                            current.props.errorMessage || `${key} is invalid`,
                        ref: current
                    });

                    Object.keys(current.refs).forEach(key => {
                        const ref = current.refs[key];

                        if (ref.focus && !focused) {
                            ref.focus();
                            focused = true;
                        }
                    });
                }
            }
        });

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
        this.children = this.updateChildren(this.state);

        return (
            <form
                onSubmit={this.handleSubmit.bind(this)}
                style={{ display: "flex", flexDirection: "column" }}
            >
                {this.children}
                <input type="submit" style={{ display: "none" }} />
            </form>
        );
    }
}

Shlorm.displayName = "Shlorm";

export { Input, shlormify };

export default Shlorm;
