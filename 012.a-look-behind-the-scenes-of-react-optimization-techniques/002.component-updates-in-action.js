/*

    A closer look at child component re-evaluation

    When a child component is being rendered from the App.js even though the props passed to it remain static and no
    state is changed the component is being re-rendered. The app.js is re-executed because the state changed.

    All the code inside the return of App.js is like a function call to the component function. So, when the App.js
    is re-executed all the functions inside the return statement are also executed as they are a part of the parent
    components function body. So, if the parent component runs then the child component also runs again. So the prop
    value does not matter for here.
    Just because the child component runs again does not mean that the DOM is also touched.

    Thus, re-evaluating the component or re-rendering a component is not same as rendering the DOM.

    This does cause some performance issues. However, it does not matter in small applications but we might want to
    optimise it in bigger applications.

    example -
    const App = () => {
        const [state, setState] = useState(true);

        return (
            <h1>Hi, I am here!</h1>
            <DemoOutput show={false}/>
        )
    }

 */