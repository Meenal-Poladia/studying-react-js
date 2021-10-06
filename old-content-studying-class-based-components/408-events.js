/*
Events

    In class based components we can set events on the elements. When attaching the
    event handler we are not running the function but are referencing to the function.

    The moment this is going to be clicked, then the function is going to run. We do not use the ()
    after referring the function as the function gets called when the page loads.
    As we are using class based component we need to use the KW "this" while referencing
    to the function on the event handler--> example 1

    When we make a regular function call on an event handler then the this KW refers to the
    button on which the handler is attached. So, to call the state from inside an regular
    function we need to bind the handleClick function with the constructor. --> example 2

    However, this binding can also be avoided if we create the handleClick function from
    an arrow function. As, the arrow function does not have their own this KW, the go
    the next immediate parent or the lexical scope for finding the this. --> example 3


example 1
export default class Book extends Component {
    handleClick = () => {
        console.log(`I am being clicked`)
    }
    render() {

    const{book, author} = this.props.info
        return (
            <section>
                <h3>book: {book} <h3/>
                <h3>author: {author} <h3/>
                <button type="submit" onClick="this.handleClick">Add a book <button/>
            <section/>
        )
    }
}

example 2 - One way to bind
export default class Book extends Component {
    constructor(props) {
        super(props)
        this.state {
            count: 1
        }
        this.handleClick = this.handleClick.bind();
    }

    handleClick () {
        console.log(`I am being clicked`)
        console.log(this.state.count)
    }
    render() {

    const{book, author} = this.props.info
        return (
            <section>
                <h3>book: {book} <h3/>
                <h3>author: {author} <h3/>
                <button type="submit" onClick="this.handleClick">Add a book <button/>
            <section/>
        )
    }
}

example 3
export default class Book extends Component {
    constructor(props) {
        super(props)
        this.state {
            count: 1
        }
    }

    handleClick = () => {
        console.log(`I am being clicked`)
        console.log(this.state.count)
    }
    render() {

    const{book, author} = this.props.info
        return (
            <section>
                <h3>book: {book} <h3/>
                <h3>author: {author} <h3/>
                <button type="submit" onClick="this.handleClick">Add a book <button/>
            <section/>
        )
    }
}
 */