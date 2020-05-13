import React from "react";

function recursiveChildMap(children, fn) {
    return React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) {
            return child;
        }

        if (child.props.children) {
            // child = React.cloneElement(child, {
            //     children: recursiveChildMap(child.props.children, fn),
            // });
            recursiveChildMap(child.props.children, fn);
        }

        return fn(child);
    });
}

export default recursiveChildMap;
