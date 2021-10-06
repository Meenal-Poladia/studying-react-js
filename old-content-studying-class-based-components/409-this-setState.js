/*
    this.setState

    We cannot mutate the directly in react as React is keeping track of your state of the
    initial value and then behind the scenes, this is where he runs the virtual DOM, so
    then it checks.

    If we are mutating the state directly then we are trying to break the whole system.
    So, there is a method called "this.setState" which does the shallow merge.
    It just checks for the properties that are there and behind the scenes, it keeps
    the old value in a state.
    Only those values which are being mentioned in the this.setState will be affected
    , all other values remain the same. --> example 1

    In example 1. the count keeps adding by one till we press the button while the name
    changes only once till it becomes "Peter".
    Count - key
    this.state.count + 1 - value



example 1
export default class Book extends Component {
    constructor(props) {
        super(props)
        this.state {
            count: 1,
            name: "John",
        }
    }

    addCount = () => {
        this.setState = ({
            count: this.state.count + 1,
            name: "Peter",
        })
    }
    render() {

    const{book, author} = this.props.info
        return (
            <section>
                <h3>book: {book} <h3/>
                <h3>author: {author} <h3/>
                <button type="submit" onClick={this.addCount}>Add a book <button/>
            <section/>
        )
    }
}


 */