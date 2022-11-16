/*

    Preventing unnecessary re-evaluations with react memo

    There is a way we can tell react to execute the component only when its props or state changes. React.memo can be
    used to avoid these re-renders.
    To avoid re-render we need to wrap the default statement inside of React.memo(ComponentName). This can only be used
    for functional components.

    React.memo allows us to optimize functional components. It tells React that for this component, which it gets as a
    function, react should look at the props which the component gets and check the new value for all those props
    and compare it to the previous value those props had. Only if the value of a prop changed, the component should
    be re-executed and re-evaluated. If the parent component changed but the prop values for that component did not
    change, then the component execution should be skipped.

    This optimisation cannot be used on all the components as it comes with a cost. The memo method tells React
    that whenever the App component changed, it should go to this component and compare the new prop values to the
    previous prop values, so therefore React needs to do two things.
        1. It needs to store the previous prop values and
        2. It needs to make that comparison.
    which has its own performance cost so it depends greatly on the component whether its worth it or not.

    React.memo can be a great tool if we have a huge component tree with a lot of child components and on a high level
    in the component tree, we can avoid unnecessary re-render cycles for the entire branch of the component tree.

    On the other hand, if we have a component where we know it's going to change or its props values are going to change
    with pretty much every re-evaluation of the parent component anyways, then React.memo doesn't make a lot of sense.

    Picking up a key part in our component tree which allows us to cut off an entire branch of child components is an
    effective way of using react.memo.

    In example 2 we see that inspite of adding react.memo to its component function the component re-renders
    even though there is no change in its state or props this is because every time the App.js is re-evaluated all
    the functions and variables are newly created. It is not the same function all the time but it is the function
    that does the same thing. However, this is not the case when the prop passed is a primitive value like string,
    number or boolean because comparison of primitive value is possible due to its identifier and memory address.
    Objects, functions and arrays being reference type are not possible to be compared as they are stored in heap.

    example - 1
    //React.demo is possible here as the props passed here was primitive
    const DemoOutput = (props) => {
        return <MyParagraph>{props.show ? "This is new" : ""}</MyParagraph>
    }

    export default React.memo(DemoOutput);

    example - 2
    //React.demo does not work as the props passed is reference type
    const App = () => {
        const [state, setState] = useState(false);

        const togglerFunction = () => {
            setState((prevState) => !prevState)
        }

        return (
            <h1>Hi, I am here!</h1>
            <Buttton show={togglerFunction}/>
        )
    }
 */