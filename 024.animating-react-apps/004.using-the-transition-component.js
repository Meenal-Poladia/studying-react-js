/*

    Using the Transition component

    The timeout we set on the transition component determines how long the entering and exiting state for which we're
    checking will be held, for how long this is basically the state it uses.
    If you define a timeout which is much shorter than the animation we play simply quits the animation preemptively
    because we switched a state too early and we exited the element early and it is removed from the DOM as well.

    We can also define different timings of entering a component and leaving.

    example -1
    import Transition from "react-transition-group/Transition";

    const Component = () => {
        const animationTiming = {
            enter: 300,
            exit: 1000
        }

        return(
            <>
                <Transition
                    in={this.showBlock}
                    timeout={animationTiming}
                    mountOnEnter
                    unmountOnExist
                    >
                    {state =>{
                        <div
                            style={{
                                backgroundColor: "red",
                                width: 100,
                                height: 100,
                                margin: "auto",
                                transition: "opacity 1s ease-out"
                                opacity: state === "exited" ? 0 : 1
                            }}
                        >
                        </div>
                    }}
                </Transition>
            </>
        )
    }

 */