/*

    Using Redux In Class Based Components

    In functional components we use hooks like useDispatch and useSelector while in class based components we
    do not use any hooks.
    For class based components we can use the "connect" hook that helps to connect the class based component to
    redux. We can use the "connect" hook on functional components as well but other hooks provided by redux are
    simply convenient.

    Connect is a higher order function that returns a new function and we execute this returned new function. We
    pass the existing component to the returned function. -> example 1
    Connect argument also takes two functions.
        1. The first function is a function that maps the redux state to props which will be received in this
        component. -> example 2
        The function takes state as an argument and returns an object with all the states in the store. We
        can name the key as per our convenience and the value is the actual stored value.

        2. The second argument is the dispatch function which takes the dispatch argument. Here the key is the
        action and value is the function which takes the dispatch object.

    We use the this.props.counter to access the stored values and dispatch action from the component.

    To bind the function with the onClick handler we use this.onClickHandler.bind(this)

    example 1
    export default connect()(Counter)

    example 2
    const mapStateToProps = state => {
        return {
            counter: state.counter
        }
    }

    const mapDispatchToProps = dispatch => {
        return {
            increment: () => dispatch({type: "increment"})
            increment: () => dispatch({type: "decrement"})
        }
    }

    export default connect(mapStateToProps, mapDispatchToProps)(Counter)
 */