/*

    Setting dynamic inline styles

    Styles can be set dynamically based on certain condition being valid or invalid. Inline styles have the highest
    priority over all other type of styling.

    Example -
    const [isValid, setIsValid] = useState(false);

    <div style = {{color: isValid ? "green" : "red"}}>

 */