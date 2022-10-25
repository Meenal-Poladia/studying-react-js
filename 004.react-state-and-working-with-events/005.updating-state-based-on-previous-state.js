/*

    Updating state based on previous state

    If we want to set a state based on a previous state then we need to use a callback function for the setter in which
    we get the previous state and we later manipulate it.

    example -
    setUserInput((previousState) => {
        return {...previousState, enteredTitle: event.target.value}
    })

    We use the previous state because react schedules state updates, it doesn't perform them instantly.
    and so, theoretically, if we schedule a lot of state updates at the same time, we could be depending on an
    outdated or incorrect state snapshot if we use this approach.
    If we use the previous state approach, React will guarantee that the state snapshot it gives in the inner function,
    will always have the latest state snapshot, keeping all scheduled state updates in mind.
    So this is the safer way to ensure that we will always operate on the latest state snapshot.

    So we should use this function syntax here whenever our state update depends on the previous state.

 */