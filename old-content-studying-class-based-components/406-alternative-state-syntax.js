/*
Alternative State Syntax

    There will be many instances when the data is so large that it will be in a separate
    file. In such cases the data file needs to be set as a value in the state object.
    --> example 1

    Since we have a class based component and with the classes we have a constructor method.
    The constructor method is going to be instantiated every time we're going to create a class.
    So, we can actually extend the class again or use it with props.

    As, it a constructor function --> example 2
    1. there is going to be a method in which we need to pass the props
    2. Then within the constructor we need to use the super and inherit the parameter from the
        actual component class.
    3. And later set the state using the KW "this". We use the dot after this as it is searching
       for the KW State.
    4. Create the object in the state
    5. Set the Key and the datafile as the value

    By doing this we can bind the state along with the props. This method is usually used when we need to
    bind the props along with the state.


example 1
export default class Booklist extends Component {
    state = {
        books: dataFileName
    }
    render() {
        return ()
    }
}

example 2
export default class Booklist extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: dataFileName
        }
    }
}
 */