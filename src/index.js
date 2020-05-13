import React from "react";
import { v4 as uuid } from "uuid";
import cloneDeep from "lodash.clonedeep";

import recursiveChildMap from "./utils/recursive-child-map";

import Input from "./Input";
import Select from "./Select";

class Shlorm extends React.Component {
    constructor(props) {
        super(props);

        const state = { submitted: null };

        // Create state from children
        if (props.children) {
            // React.Children.forEach(props.children, (child) => {
            recursiveChildMap(props.children, (child) => {
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

        this.children = this.updateChildren();
    }

    // shouldComponentUpdate(_, nextState) {
    //     // Makes sure this component never updates, which increases performance by stopping
    //     // unnecessary re-renders. We do want a re-render on submit though.
    //     if (this.state.submitted !== nextState.submitted) {
    //         return true;
    //     }

    //     for (let i = 0; i < Object.keys(this.state).length; i++) {
    //         const key = Object.keys(this.state)[i];

    //         if (key !== "submitted") {
    //             const { value, valid } = this.state[key];

    //             if (
    //                 nextState[key].value !== value ||
    //                 nextState[key].valid !== valid
    //             ) {
    //                 return false;
    //             }
    //         }
    //     }

    //     return true;
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

    updateChildren() {
        // updateChildren(state) {
        if (!this.props.children) return [];

        let i = 0;

        // const children = React.Children.map(this.props.children, (_child) => {
        const children = recursiveChildMap(this.props.children, (_child) => {
            // const children = React.Children.map(this.props.children, (_child) => {
            // Remove shlorm boolean tags so we don't get any warnings
            let { props: _props, ...child } = _child;

            // console.log("_props", _props);

            let {
                "shlorm-type": type,
                "shlorm-submit": submit,
                // value, // JUST ADDED REMOVE IF NOT WORKING
                ...props
            } = _props;
            // console.log("props", props);
            child = { props, ...child };

            // console.log("value", value);

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
                            this.handleSubmit(e);
                        }
                    };

                    props.lang = "farts";

                    if (type === "select") {
                        props.onChange = this.handleSelectChange.bind(
                            this,
                            name,
                            typeof props.placeholder !== "undefined",
                            props.onChange
                        );
                    } else {
                        props.onChange = this.handleChange.bind(
                            this,
                            name,
                            props.onChange
                        );
                    }
                }

                props.ref = this.form.refs[name];

                if (type === "submit") {
                    props.onClick = this.handleSubmit.bind(this);
                } else {
                    // If type is not a submit button
                    props = { ...props, ...this.state[name] }; // add value and valid to child
                }
            }

            // console.log(i, _child);
            i++;
            console.log("props", props);

            return React.createElement(child.type, props);
        });

        return children;
    }

    handleChange(field, onChange, e) {
        if (typeof onChange === "function") {
            onChange(e);
        }

        this.setState({
            [field]: {
                value: e.target.value,
                valid: true,
            },
        });
    }

    handleSelectChange(field, hasPlaceholder, onChange, e) {
        let { options, value } = e.target;

        if (typeof onChange === "function") {
            onChange(e);
        }

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

        console.log("farts");

        const { refs } = this.form;
        const state = cloneDeep(this.state);

        let invalid = [];
        let focused = false;

        Object.keys(refs).forEach((key) => {
            const { current } = refs[key];

            if (current.props && current.props.validator) {
                let valid = current.props.validator(state[key].value, state);

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
        console.log("rerender");
        const { style, ...rest } = this.props;
        // this.children = this.updateChildren(this.state);

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
