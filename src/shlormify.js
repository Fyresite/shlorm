import React from "react";

const shlormify = InputComponent => {
    class WithShlorm extends React.Component {
        render() {
            const {
                valid,
                // validator,
                forwardedRef,
                value,
                // "shlorm-input": shlormInput,
                ...rest
            } = this.props; // pull value out of 'rest' so we don't have to rely on re-renders. I know this is bad, but let's face it I'm cloning react children and injecting props we're way passed that.

            return <InputComponent {...rest} ref={forwardedRef} />;
        }
    }

    const forwardRef = (props, ref) => (
        <WithShlorm {...props} forwardedRef={ref} />
    );

    forwardRef.displayName = `WithShlorm(${getDisplayName(InputComponent)})`;
    forwardRef.shlormInput = true;

    return React.forwardRef(forwardRef);
};

const getDisplayName = WrappedComponent =>
    WrappedComponent.displayName || WrappedComponent.name || "Component";

export default shlormify;
