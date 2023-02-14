/*

    Transition Events

    It is also possible to know each stage of an element so that we can perform a particular function when the
    particular stage is completed. There are callbacks for 6 different stages. -> example 1

    example 1
     <Transition
        in={this.showBlock}
        timeout={animationTiming}
        mountOnEnter
        unmountOnExist
        onEnter(()=> {console.log(`onEnter`)})
        onEntering(()=> {console.log(`onEntering`)})
        onEntered(()=> {console.log(`onEntered`)})
        onExit(()=> {console.log(`onExit`)})
        onExiting(()=> {console.log(`onExiting`)})
        onExited(()=> {console.log(`onExited`)})
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

 */