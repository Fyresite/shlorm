import React from 'react';

const recursiveForEach = (children, fn) => {
    return React.Children.forEach(children, (child) => {
        if (!React.isValidElement(child)) {
            return child;
        }

        if (child.props.children) {
            child = React.cloneElement(child, {
                children: recursiveForEach(child.props.children, fn),
            });
        }

        return fn(child);
    });
};

export default recursiveForEach;
