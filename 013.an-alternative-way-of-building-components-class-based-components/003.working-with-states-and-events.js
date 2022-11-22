/*

    Working with state and events

    When creating a function inside a class based component we create it inside the component but outside the render
    method. This is the default or the most standard way of declaring a class.

    Prior to 16.8 functional components could not be used to manage state so we had to only use class based components
    for managing and updating state. In class based components we need to manage state, initialise it, define our
    state and then update when needed.
    To define state in class based components we use the constructor method. The constructor function is automatically
    called whenever this class is instantiated which happens when react encounters, our class being used as a
    component. In the constructor function we initialise state with class based components. Our state is always an
    object. While, with functional components our state can be string, boolean, array or an object.

    With class based components state is always an object because we always group all the state's license and pieces
    in a component into one state object.
    While, with functional components instead we have multiple state pieces, we could use multiple useState calls.

    To set a state on the component we use the this.setState method which we get from the Component class. This method
    takes an object with the key as the state we want to change and the newState as the property. Here, the newState
    does not override the oldState but it merges with the old state unlike in functional components wherein we override
    the old state.
    If we want to update a newState based on the previous state then we call a function using the setState to update the
    newState. -> sample 1

    When pointing to the function on the event handler we use the keyword "this".

    After the constructor we also have to call the function super which calls the constructor  of the super class
    the class is inheriting.

    example -
    class Users extends Component {
        constructor() {
            super()
            this.state = {
                showUsers: false,
                moreState: "string",
            }
        }

        toggleUserHandler () {
            this.setState({showUsers : true})

            //Updating based on previous state -> sample 1
            this.setState((previousState) => {
                return {
                    showUsers: !previousState.showUsers
                }
            })
        }

        render () {
            return (
                //Write JSX code here
                <button onClick= {this.toggleUserHandler}>
                    {this.state.showUsers && <Display this>}
                </button>
            )
        }
    }

 */