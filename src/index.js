import React from "react";
import { v4 as uuid } from "uuid";
import cloneDeep from "lodash.clonedeep";

import Input from "./Input";
import Select from "./Select";

class Shlorm extends React.Component {
    constructor(props) {
        super(props);

        const state = { submitted: null };

        // Create state from children
        if (props.children) {
            React.Children.forEach(props.children, (child) => {
                if (child.type.shlormType || child.props["shlorm-type"]) {
                    const value = this.getChildValue(child);

                    let type = child.type.shlormType;

                    if (!type) type = child.props["shlorm-type"];

                    // Only track the state of certain shlorm types
                    if (!["submit"].includes(type)) {
                        state[child.props.name] = {
                            value,
                            valid: true,
                        };
                    }
                }
            });
        }

        this.state = state;

        this.form = { refs: {} };

        this.children = [];
    }

    // TODO: Fix this so that components that aren't part of the form can still re-render
    // shouldComponentUpdate(_, nextState) {

    //     // Makes sure this component never updates, which increases performance by stopping
    //     // unnecessary re-renders. We do want a re-render on submit though.
    //     if (this.state.submitted !== nextState.submitted) {
    //         return true;
    //     }

    //     return false;
    // }

    getChildValue(child) {
        if (child.props.value) return child.props.value;

        const type = child.type.shlormType || child.props["shlorm-type"];

        if (type === "select") {
            if (child.props.placeholder) {
                return "";
            }

            return child.props.options[0].value;
        }

        return "";
    }

    getForm() {
        const form = {};

        Object.keys(this.state).forEach((key) => {
            if (key !== "submitted") form[key] = this.state[key].value;
        });

        return form;
    }

    updateChildren(state) {
        if (!this.props.children) return [];

        const children = React.Children.map(this.props.children, (_child) => {
            // Remove shlorm boolean tags so we don't get any warnings
            let { props: _props, ...child } = _child;

            let {
                "shlorm-type": type,
                "shlorm-submit": submit,
                ...props
            } = _props;
            child = { props, ...child };

            const { name } = child.props;

            props.key = name ? `shlorm-input-${name}` : uuid();

            // If type is not defined here, we check the 'shlormType' property on the component instance itself
            if (!type) type = _child.type.shlormType;

            if (type) {
                if (type !== "submit") {
                    this.form.refs[name] = React.createRef();
                    props.onKeyPress = (e) => {
                        if (e.charCode === 13) {
                            // Enter key
                            // this.refs.form.submit();
                            this.handleSubmit(e);
                        }
                    };
                }

                props.ref = this.form.refs[name];
                if (type === "select") {
                    props.onChange = this.handleSelectChange.bind(
                        this,
                        name,
                        typeof props.placeholder !== "undefined"
                    );
                } else {
                    props.onChange = this.handleChange.bind(this, name);
                }

                if (type === "submit") {
                    props.onClick = this.handleSubmit.bind(this);
                } else {
                    // If type is not a submit button
                    props = { ...props, ...state[name] }; // add value and valid to child
                }
            }

            return React.createElement(child.type, props);
        });

        return children;
    }

    handleChange(field, e) {
        this.setState({
            [field]: {
                value: e.target.value,
                valid: true,
            },
        });
    }

    handleSelectChange(field, hasPlaceholder, e) {
        let { options, value } = e.target;

        if (hasPlaceholder && options.selectedIndex === 0) value = "";

        this.setState({
            [field]: {
                value,
                valid: true,
            },
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const { refs } = this.form;
        const state = cloneDeep(this.state);

        let invalid = [];
        let focused = false;

        Object.keys(refs).forEach((key) => {
            const { current } = refs[key];

            if (current.props && current.props.validator) {
                let valid = current.props.validator(state[key].value);

                state[key].valid = valid;

                if (!valid) {
                    invalid.push({
                        field: key,
                        message:
                            current.props.errorMessage || `${key} is invalid`,
                        ref: current,
                    });

                    if (current.input) {
                        // Material UI case
                        const ref = current.input;

                        if (ref.focus && !focused) {
                            ref.focus();
                            focused = true;
                        }
                    } else {
                        Object.keys(current.refs).forEach((key) => {
                            const ref = current.refs[key];

                            if (ref.focus && !focused) {
                                ref.focus();
                                focused = true;
                            }
                        });
                    }
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
        const { style, ...rest } = this.props;
        this.children = this.updateChildren(this.state);

        return (
            <form
                onSubmit={this.handleSubmit.bind(this)}
                style={{ display: "flex", flexDirection: "column", ...style }}
                {...rest}
            >
                {this.children}
            </form>
        );
    }
}

Shlorm.displayName = "Shlorm";

export { Input, Select };

export default Shlorm;
