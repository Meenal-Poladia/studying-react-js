/*
    Conditionals in JSX

    We cannot write conditional statements inside the JSX return code. However, there
    are 3 other ways in which conditional statements can eb executed:

    1. Using the && operator
    In this the falsy value is returned or in case of multiple values, the last value is
    returned --> example 1

    2. Ternary operator --> example 2



example 1
{isShowInfo && <p> This is the paragraph content </p>}

example 2
{isShowInfo ? <p> This is the paragraph content </p> : <p> This is false </p>}

example 3
export default class Booklist extends Component {
    constructor(props) {
        super(props)
        this.state {
            info: true,
        }
    }
    const infoToggle = (info) {
        if(info) {
            console.log(`The information is true`);
        } else {
            console.log(`No info`);
        }
    }
    render() {
        return (
            {infoToggle(this.state.info)}
        )
    }
 */