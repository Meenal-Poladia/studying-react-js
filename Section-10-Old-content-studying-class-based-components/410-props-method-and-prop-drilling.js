/*
    Props Methods and Prop Drilling

    Prop drilling refers to passing data from parent --> child --> grandchild.
    This is called props drilling because we are technically drilling the props
    inside the component tree.

    Sometimes when you want to go 5 components down then prop drilling can become annoying
    so at such times Redux or Context API is used. In these, the data from the parent
    goes straight directly to the child in which it is intended to be send. --> example 1

    When accessing the function passed down as props then we directly access it using
    "props.function" or if destructured it then use it directly like "function".
    this.function is used only when we are accessing the function in the same class
    in which it is created.



example 1
export default class Book extends Component {
    constructor(props) {
        super(props)
        this.state {
            count: 1,
            name: "John",
        }
    }

    handleDelete = () => {
        console.log(`Delete this item`);
    }

    render() {

    const{book, author} = this.props.info
        return (
            <section>
                <h3>book: {book} <h3/>
                <h3>author: {author} <h3/>
                <button type="submit" onClick={this.addCount}>Add a book <button/>
                <Book handleDelete={this.handleDelete} />
            <section/>
        )
    }
}

 */