/*

    A closer look at useState hook

    We have separate states even if we have created the component more than one. State of one component is not affected
    by the change or update in the state of another component.

    We can use const as we are not assigning values using equal to signs rather updating the value and thus only one
    value is available to the variable at all times.
    The special thing is that React keeps track of when we call useState in a given component instance
    for the first time and when we call it for the first time ever, it'll take that argument as an initial value.
    But if a component is then re-executed because of such a State change.
    React will not reinitialize the State. Instead, it will detect that this state had been initialized
    in the past, and it will just grab the latest State which is based on some state update.

    So this initial value is really only considered when this component function is being executed for the first time,
    for a given component.

 */
