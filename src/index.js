import React from "react";
import uuid from "uuid/v4";
import cloneDeep from "lodash.clonedeep";

import Input from "./Input";

class Formler extends React.Component {
    constructor(props) {
        super(props);

        const state = { submitted: null };

        // Create state from children
        if (props.children) {
            let children = props.children;

            // In case of one child
            if (!Array.isArray(children)) {
                children = [children];
            }

            children.forEach(({ props }) => {
                if (props["formler-input"]) {
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
        if (!this.props.children) {
            return [];
        }

        let children = cloneDeep(this.props.children);

        if (!Array.isArray(children)) {
            children = [children];
        }

        return children.map(_child => {
            // Remove formler boolean tags so we don't get any warnings
            let { props: _props, ...child } = _child;
            let {
                "formler-input": input,
                "formler-submit": submit,
                ...props
            } = _props;
            child = { props, ...child };

            const { name } = child.props;

            props.key = name ? `formler-input-${name}` : uuid();

            if (input) {
                this.form.refs[name] = React.createRef();

                props.ref = this.form.refs[name];
                console.log("props.ref", props.ref);
                props.onChange = this.handleChange.bind(this, name);
                props = { ...props, ...state[name] }; // add value and valid to child
            }

            if (submit) {
                props.onClick = this.handleSubmit.bind(this);
            }

            return React.cloneElement(child, props);
        });
    }

    handleChange(field, e) {
        this.setState(
            {
                [field]: {
                    value: e.target.value,
                    valid: true
                }
            },
            () => {
                this.updateChildren(this.state);
            }
        );
    }

    handleSubmit(e) {
        e.preventDefault();

        const { refs } = this.form;
        const state = cloneDeep(this.state);

        let invalid = [];
        let focused = false;

        Object.keys(refs).forEach(key => {
            console.log(refs);

            const { current } = refs[key];

            console.log(current);

            if (current.props && current.props.validator) {
                let valid = current.props.validator(state[key].value);

                state[key].valid = valid;

                if (!valid) {
                    invalid.push({
                        field: key,
                        message: current.props.errorMessage,
                        ref: current
                    });

                    Object.keys(current.refs).forEach(key => {
                        const ref = current.refs[key];

                        console.log(ref);

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

export { Input };

export default Formler;
