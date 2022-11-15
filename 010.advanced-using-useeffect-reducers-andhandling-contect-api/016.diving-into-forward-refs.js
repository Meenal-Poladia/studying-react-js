/*

    Diving into forward refs

    Ref forwarding is a technique for automatically passing a ref through a component to one of its children. This is
    typically not necessary for most components in the application. However, it can be useful for some kinds of
    components, especially in reusable component libraries.

    example -
    // We can get a ref directly from the DOM button:
    const buttonRef = React.createRef();
    <FancyButton ref={buttonRef}>Click me!</FancyButton>;

    //This is the child component which receives the ref as props
    const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton">
        {props.children}
    </button>
    ));

    Here is a step-by-step explanation of what happens in the above example:
    1. We create a React ref by calling React.createRef and assign it to a buttonRef variable.
    2. We pass our ref down to <FancyButton ref={buttonRef}> by specifying it as a JSX attribute.
    3. React passes the ref to the (props, ref) => ... function inside forwardRef as a second argument.
    4. We forward this ref argument down to <button ref={ref}> by specifying it as a JSX attribute.
    5. When the ref is attached, ref.current will point to the <button> DOM node.

    The second ref argument only exists when you define a component with React.forwardRef call. Regular function or
    class components don’t receive the ref argument, and ref is not available in props either.

    Ref forwarding is not limited to DOM components. You can forward refs to class component instances, too.

 */