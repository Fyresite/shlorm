import React from "react";

function recursiveChildMap(children, fn) {
    return React.Children.map(children, (_child) => {
        if (!React.isValidElement(_child)) {
            return _child;
        }

        if (_child.props.children) {
            if (typeof _child === "function") {
                // Remove shlorm boolean tags so we don't get any warnings
                let { props: _props, ...child } = _child;
                let {
                    "shlorm-type": type,
                    "shlorm-submit": submit,
                    // value, // JUST ADDED REMOVE IF NOT WORKING
                    ...props
                } = _props;
                // console.log("props", props);
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
                        props = { ...props, ...state[name] }; // add value and valid to child
                    }
                }

                child = React.createElement(_child, {
                    children: recursiveChildMap(_child.props.children, fn),
                });
            } else {
                child = React.cloneElement(_child, {
                    children: recursiveChildMap(_child.props.children, fn),
                });
            }
            // child.children = recursiveChildMap(child.props.children, fn);
        }

        return fn(_child);
    });
}

export default recursiveChildMap;
