/*

    Understanding state updating and scheduling

    In react we can manage state using useState hook. The initial state is set by react when the page is loaded on DOM.
    We can later manage state using the setter for useState. Thus, setState schedules state change in react.
    React is aware of it, React plans on processing it, however React doesn't process that immediately though.

    In reality we might feel that the state update occurs immediately when the button is clicked but react reserves the
    right of postponing the change because a lot of performance intensive tasks are going on at the same moment which
    react considers to have high priority. As there are chances that multiple state updates can be lined at the same
    time and when the updating state depends on the previous state then it is a good idea to retrieve the previous
    state and then set a new state.
    In a lot of cases, this will probably not matter because it's processed so quickly that we can't even click fast
    enough to see a delay but because it theoretically could be postponed, this is the safe way of ensuring
    that state changes are processed in order and for every state change where we depend on the previous state,
    we get the latest state.

    Similarly, we learned about useffect that whenever a state or value in the dependency array changed useffect would
    re-run. So, that we cannot miss out on outstanding state changes.

    If we have two state updating function synchronously one after another, react will batch those state updates
    together in one long synchronous process. It does not schedule two different changes but chains them in one
    state update. -> example 1
    This is also called as state batching in react.

    example 1
    const settingState = () => {
        setState(newState);
        setUpdate(newState);
    }

 */