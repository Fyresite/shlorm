import React from "react";

function recursiveChildMap(children, fn) {
    return React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) {
            return child;
        }

        // console.log("child", child);

        if (child.props.children) {
            if (typeof child === "function") {
                child = React.createElement(child, {
                    children: recursiveChildMap(child.props.children, fn),
                });
            } else {
                child = React.cloneElement(child, {
                    children: recursiveChildMap(child.props.children, fn),
                });
            }
            // child.children = recursiveChildMap(child.props.children, fn);
        }

        return fn(child);
    });
}

export default recursiveChildMap;
