/*

    Css transition and animations limitations

    React Transition group is not an official react package or not by the react team but it's a package created by the
    vibrant react community and this is a package which allows you to smoothly animate elements when they are added and
    removed to and from the dom.

    To install the package we use the command npm install react-transition-group --save

    We can import the Transition element to control the display of elements inside of it and especially the animation
    of these elements. By setting the "in" property we decide whether we want to show the transition component or
    not and if yes then at which point. Timeout is a time value which determines how long should the animation should
    be played or how long does it take to switch from entering to entered and from exiting to exited and it's this
    in-between thing that we can then animate.

    If mountOnEnter is true then it should add the wrap element to the DOM and unmountOnExist on exit removes the
    element from the DOM.

    example 1
        import Transition from "react-transition-group/Transition";

    const Component = () => {
        return(
            <>
                <Transition
                    in={this.showBlock}
                    timeout={300}
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