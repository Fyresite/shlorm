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

                if (type === "submit") {
                    props.onClick = this.handleSubmit.bind(this);
                } else {
                    // If type is not a submit button
                    props = { ...props, ...state[name] }; // add value and valid to child
                }
            }
        });

        return children;
    }

    handleChange(field, onChange, e) {
        let { value } = e.target;
        let valid = true;

        if (typeof onChange === "function") {
            let changed = onChange(e);

            if (changed && changed.value) value = changed.value;
            if (changed && changed.valid) valid = changed.valid;
        }

        this.setState({
            [field]: {
                value,
                valid,
            },
        });
    }

    handleSelectChange(field, hasPlaceholder, onChange, e) {
        let { options, value } = e.target;
        let valid = true;

        if (typeof onChange === "function") {
            let changed = onChange(e);

            if (changed && changed.value) value = changed.value;
            if (changed && changed.valid) valid = changed.valid;
        }
        if (typeof this.state[name].onChange === "function") {
            value = this.state[name].onChange(e);
        }

        this.setState({
            [name]: {
                ...this.state[name],
                value,
                valid,
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
