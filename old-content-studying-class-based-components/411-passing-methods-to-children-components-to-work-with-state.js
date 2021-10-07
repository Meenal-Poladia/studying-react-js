/*
    Passing methods to children components to work with State

    When we want a pass a parameter into the function then we use an arrow anonymous
    function to pass the function along with the id. In the following example a function
    is created in the parent component and it is passed as a reference to its child
    component--> example 1

    In the second part we are passing the method created in the parent class into the child
    class. In the child class we are not calling the function, whereas we are just passing a
    reference to the original function. If we want to set a new state on the handler then
    we set in in the parent function itself where we have declared the function.

    When we are setting the setState we need to make sure that the data structure of the
    initial state must be the same as that of the setState.
    If the initial state is a number and setState is a string then it will throw error.
    So, the setState also needs to be a number.




example 1
export default class Booklist extends Component {
    constructor(props) {
        super(props)
        this.state {
            count: 1,
            name: "John",
        }
    }
    handleClick = (id) => {
        const sortedBooks = this.state.book.filter(item => {
            item.id !== id
        })
        this.setState({books: sortedBooks})
    }

    render() {

    const{book, author} = this.props.info
        return (
            <section>
                <h3>book: {book} <h3/>
                <h3>author: {author} <h3/>
                <Book handleClick={this.handleClick} />
            <section/>
        )
    }
}


export default class Book extends Component {

    render() {

        return (
            <section>
                <button type="submit" onClick={() => handleClick(id)}>Add a book <button/>
            <section/>
        )
    }
}
 */