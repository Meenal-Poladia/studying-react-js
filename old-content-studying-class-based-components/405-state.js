/*
State

    There are going to be many instances where the list title is a seperate component and
    the list is written in a separate component.

    When we want the array of objects to be used in another component we cannot send each
    object as a prop like "<Book book={this.books[0]}" so we use a state because many a times
    when using an API we dont know the number of items received. State is an object --> example 1

    Rather than using the property as it is we wrap it inside the state because with state we
    can use special methods, mutate the state, change the state, control the data
    and that is not going to affect its performance. The state usually contains the key-value pair
    --> example 2

    Above the return KW we can write the simple javascript. In the class based components we
    always use the KW "this" when pointing at any property or method.
    Array methods which are most frequently use to render this.state are
        1. Filter
        2. forEach
        3. Map
        4. Reduce
    Except forEach all other methods create a new array, forEach just loops through the array.
    Everything above the return is plain only javascript which we will wrap in JSX.


example 1 -
export default class Booklist extends Component {
    books = [                                   it is a property in the class so we do not use var, const & let
        {
        book:"The first book",
        author:"John Doe",
        },
        {
        book:"The second book",
        author:"John Grisham",
        }
    ]
    render() {
        return(
            <section>
                <h3>This is my book application <h3/>
                <Book book={this.books[0]}              Here as it a property which we are accessing in a class we use the
            <section/>                                  KW "This". We are just rendering object in array position [0]
        )

    }
}

example 2 - setting up the state
export default class Booklist extends Component {
    state = {
         books = [
        {
        book:"The first book",
        author:"John Doe"
        },
        {
        book:"The second book",
        author:"John Grisham"
        }
    ]
    };

    render() {
    const books = this.state.books.map((item) => {                      Way 1
        item.book
    })
        return(
            <section>
                <h3>This is my book application <h3/>
                {this.state.books.map((item, index) => {                 Way 2
                    <Book key={item.index} info={item} />
                })}
            <section/>
        )

    }
}

Rendering the data passed in the state
export default class Book extends Component {
    render() {
    const{book, author} = this.props.info
        return (
            <section>
                <h3>book: {book} <h3/>
                <h3>author: {author} <h3/>
            <section/>
        )
    }
}

 */