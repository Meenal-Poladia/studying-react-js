/*

    Using the useffect cleanup function

    Many a times a useffect is being called on every keystroke, however we might want to wait till the user stops
    typing and then an action is performed. This is called debouncing.

    With useffect this is easy to implement as we can do this using setTimeout -> example 1
    Here the code is executed after 5ms. Here we are setting multiple timers on every stroke.

    Another method we can follow is that we once the timer is set we can clear the timer and then set a new one. This
    can be done by returning a function from the useffect itself -> example 2
    The cleanup function runs whenever the useffect runs except for the first time and it also runs when the component
    we are specifying unmounts from the DOM. It runs before every side effect function execution.


    In example 3 we see that the timer runs only once after 500ms while the cleanup function is triggered many times.
    This helps to reduce http calls if we are making the useffect. This can be used as an optimization technique.


    example 1
    useffect(() => {
        setTimeout(() => {
            Write code here
        }, 500)
    }, [state])

    example 2
        useffect(() => {
        setTimeout(() => {
            Write code here
        }, 500)

        return () => {}
    }, [state])

    example 3 - cleaning a setTimeout function
        useffect(() => {
            const timerID = setTimeout(() => {
                Write code here
            }, 500)

            return () => {
                clearTimeout(timerID);
            }
        }, [state])

 */