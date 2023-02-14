/*

    The css transition component

    CSSTransition Group is a way in which we can attach functions depending on the state of the element like enter,
    entering, exit and exiting.
    Here we use a property classNames on which we can define the css classes which we want to use when we are in a
    particular state. We do not need to define the state conditionally as the classes are directly attached on to the
    property name. -> example 1


    example 1
    import TransitionGroup from "react-transition-group/TransitionGroup";

     <CSSTransitionGroup
        in={this.showBlock}
        timeout={animationTiming}
        mountOnEnter
        unmountOnExist
        classNames={{
            enter: "",
            enterActive: "ModalOpen",
            exit: "",
            exitActive: "ModalClosed"
        }}
        >
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
    </CSSTransitionGroup>

 */