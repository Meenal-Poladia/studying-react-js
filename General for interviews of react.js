/*
    Link for more questions:
    https://github.com/sudheerj/reactjs-interview-questions#table-of-contents

    Jordan Walke, a software engineer who was working for Facebook created React.
    It was first deployed on the news feed of Facebook in 2011 and on Instagram in 2012.
    Developers from the Javascript background can easily develop web applications with the help of React.

    1. Advantages of react:
        1. Use of Virtual DOM to improve efficiency
        2. Reusable components
        3. Gentle learning curve - someone knowing javascript can learn it
        4. SEO friendly: React allows developers to develop engaging user interfaces that can be easily navigated in
        various search engines. It also allows server-side rendering, which boosts the SEO of an app.

    2. Limitations of React:
        1. React is not a full-blown framework as it is only a library.
        2. The components of React are numerous and will take time to fully grasp the benefits of all.
        3. It might be difficult for beginner programmers to understand React.
        4. Coding might become complex as it will make use of inline templating and JSX.

    3. What are keys in React?
    A key is a special string attribute that needs to be included when using lists of elements.

    Importance of keys -
        1. Keys help react identify which elements were added, changed or removed.
        2. Keys should be given to array elements for providing a unique identity for each element.

    4. What is JSX?
    JSX stands for JavaScript XML. It allows us to write HTML inside JavaScript and place them in the DOM without using
    functions like appendChild( ) or createElement( ).
    JSX provides syntactic sugar for React.createElement( ) function.

    example -
    const text = React.createElement('p', {}, 'This is a text');
    const container = React.createElement('div','{}',text );
    ReactDOM.render(container,rootElement);

    5. What are the differences between functional and class components?
    Functional components and class components are two ways to define React components.
    Function Components: Function components are simply JavaScript functions that receive props as input and return
    React elements. They are also known as stateless components. They are defined using the "function" keyword
    followed by the component name and the props argument. Function components do not have access to lifecycle
    methods or the state.

    Class Components: Class components are created using the "class" keyword, and they extend the React.Component
    class. They have a state, lifecycle methods, and can be used when you need to manage state or make use of lifecycle
    methods within your component. Class components are also known as stateful components.

    The main differences between functional and class components are:

    Function components are simple, lightweight and fast, while class components are more complex and slow.

    Function components do not have access to lifecycle methods or state, while class components do.

    Function components are easier to read and understand, while class components can get complex quickly, especially
    if you are using lifecycle methods and state.


    6. What is the virtual DOM? How does react use the virtual DOM to render the UI?
    Virtual DOM is a concept where a virtual representation of the real DOM is kept inside the memory and is synced
    with the real DOM by a library such as ReactDOM.

    7. What are the differences between controlled and uncontrolled components?
    Controlled Components: In a controlled component, the value of the input is managed by the React state. When a user
    interacts with the form, the React state is updated, and the updated value is reflected in the form. This approach
    allows the React component to have full control over the form inputs and ensures that the user's input is validated
    before it is sent to the server. The value of a controlled component is set by the state, and the onChange event
    handler is used to update the state whenever the input changes.

    Uncontrolled Components: In an uncontrolled component, the value of the input is managed by the DOM, not the React
    state. The React component does not have direct control over the input value, and instead relies on the DOM to
    keep track of the value. This approach can be faster and less verbose, but it does not provide the same level of
    control and validation that controlled components do. The value of an uncontrolled component is set using the
    defaultValue or value attribute on the input element, and the onChange event handler can be used to update the
    value as needed.

    In general, it's recommended to use controlled components for forms in React, as they provide more control over
    the user's input and ensure that the data is validated before it is sent to the server. However, uncontrolled
    components can be useful in certain situations, such as when you need to handle large amounts of data quickly,
    or when the form's initial value is unlikely to change.

    We use onChange handler to govern the changes made to the input element in controlled component whereas in
    uncontrolled components we use ref.

    8. What are props in React?
    The props in React are the inputs to a component of React.
    They can be single-valued or objects having a set of values that will be passed to components of React during
    creation by using a naming convention that almost looks similar to HTML-tag attributes.
    We can say that props are the data passed from a parent component into a child component.

    9. Explain React state and props.
        Props	                                                    State
        Immutable	                                                Owned by its component
        Has better performance	                                    Locally scoped
        Can be passed to child components	                        Writeable/Mutable
 	                                                                has setState() method to modify properties
 	                                                                Changes to state can be asynchronous
                                                                    can only be passed as props

    What is useEffect hook?
    The useEffect hook is a built-in hook in React that allows you to manage side effects in your functional
    components. Side effects refer to any behavior that is not directly related to rendering the component, such as
    updating the title of a document, making an API request, or handling a click event.

    The useEffect hook takes two arguments: a callback function that performs the side effect, and a dependency array
    that determines when the effect should run.


    10. Explain about types of side effects in React component?
    There are two types of side effects in React component. They are:
        1. Effects without Cleanup: This side effect will be used in useEffect which does not restrict the browser
        from screen update. It also improves the responsiveness of an application.
        A few common examples are network requests, Logging, manual DOM mutations, etc.

        2. Effects with Cleanup: The useEffect hook in React allows you to specify a cleanup function that will be
        executed before the effect is re-run or when the component is unmounted. This cleanup function can be used to
        clean up any resources or subscriptions created by the effect.
        The cleanup function is returned by the effect callback function.

    11. What is prop drilling in React?
    Prop drilling means passing props from the grandparent to parents to child. Each component in the hierarchy receives
    the props where or not in use to that it reaches to their children.
    First we create context using react.createContext.
    Consume it using <context.Provider value={{ fName, lName }}>

    Sometimes while developing React applications, there is a need to pass data from a component that is higher in the
    hierarchy to a component that is deeply nested. To pass data between such components, we pass props from a source
    component and keep passing the prop to the next component in the hierarchy till we reach the deeply nested component.

    The disadvantage of using prop drilling is that the components that should otherwise be not aware of the data have
    access to the data.

    12. What are error boundaries?
    Introduced in version 16 of React, Error boundaries provide a way for us to catch errors that occur in the render
    phase. It is class based as render method is not in functional components.

    What is an error boundary?
    Any component which uses one of the following lifecycle methods is considered an error boundary.
    In what places can an error boundary detect an error?
        1. Render phase
        2. Inside a lifecycle method
        3. Inside the constructor

    13. Why were Hooks introduced in React?
    React hooks were introduced in the 16.8 version of React. Previously, functional components were called stateless
    components. Only class components were used for state management and lifecycle methods. The need to change a
    functional component to a class component, whenever state management or lifecycle methods were to be used, led to
    the development of Hooks.

    14. What is the use of useEffect React Hooks?
    The useEffect React Hook is used for performing the side effects in functional components.
    With the help of useEffect, you will inform React that your component requires something to be done after rendering
    the component or after a state change. The function you have passed(can be referred to as “effect”) will be
    remembered by React and call afterwards the performance of DOM updates is over.

    The useEffect React Hook will accept 2 arguments: useEffect(callback,[dependencies]);

    15. What are Custom Hooks?
    A Custom Hook is a function in Javascript whose name begins with ‘use’ and which calls other hooks.
    It is a part of React v16.8 hook update and permits you for reusing the stateful logic without any need for
    component hierarchy restructuring.

    In almost all of the cases, custom hooks are considered to be sufficient for replacing render props and HoCs
    (Higher-Order components) and reducing the amount of nesting required. Custom Hooks will allow you for avoiding
    multiple layers of abstraction or wrapper hell that might come along with Render Props and HoCs.

    The disadvantage of Custom Hooks is it cannot be used inside of the classes.

    16. Explain Strict Mode in React.
    StrictMode is a tool added in version 16.3 of React to highlight potential problems in an application.
    It performs additional checks on the application.
    To enable StrictMode, <React.StrictMode> tags need to be added inside the application.

    StrictMode currently helps with the following issues:
        1. Warning about the usage of legacy string API
        2. warning about use of any deprecated react API example findDOMNode()
        3. Identifying components with unsafe lifecycle methods - Certain lifecycle methods are unsafe to use in
        asynchronous react applications. With the use of third-party libraries, it becomes difficult to ensure that
        certain lifecycle methods are not used.

    17. What are the different ways to style a React component?
        1. Inline Styling: We can directly style an element using inline style attributes.
        2. Using JavaScript object: We can create a separate JavaScript object and set the desired style properties.
        This object can be used as the value of the inline style attribute.
        3. CSS Stylesheet: We can create a separate CSS file and write all the styles for the component inside that
        file. This file needs to be imported inside the component file.
        4. CSS Modules: We can create a separate CSS module and import this module inside our component.
        Create a file with “.module.css”‘ extension, styles.module.css:

    18. Name a few techniques to optimize React app performance?
        1. React.memo
        Memoisation is an optimization technique used primarily to speed up computer programs by storing the results of
        expensive function calls and returning the cached result when the same inputs occur again.

        Pass a “create” function and an array of dependencies. useMemo will only recompute the memoized value when one
        of the dependencies has changed. This optimization helps to avoid expensive calculations on every render.

        Remember that the function passed to useMemo runs during rendering. Don’t do anything there that you wouldn’t
        normally do while rendering. For example, side effects belong in useEffect, not useMemo.

        If no array is provided, a new value will be computed on every render.

        example -
        const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

        2. useCallback
        Use Callback is a hook that allows us to basically store a function across component executions.
        So it allows us to tell React that we wanna save a function and that this function should not be recreated
        with every execution.
        useCallback save a function of our choice basically somewhere in React's internal storage
        and we'll always reuse that same function object then when this component function executes.

        Use Callback then returns that stored function and when the app function reruns Use Callback will look for
        that stored function which React stored for us and reuse that same function object.

        useCallback also accepts dependency array.

        3. Using React.PureComponent

        React.PureComponent is similar to React.Component. The difference between them is that React.Component doesn’t
        implement shouldComponentUpdate(), but React.PureComponent implements it with a shallow prop and state
        comparison.

        If your React component’s render() function renders the same result given the same props and state,
        you can use React.PureComponent for a performance boost in some cases.

        In simple words, If the previous value of state or props and the new value of state or props is the same, the
        component will not re-render itself. Since Pure Components restricts the re-rendering when there is no use of
        re-rendering of the component.

        4. React.lazy()
        lets you define a component that is loaded dynamically. This helps reduce the bundle size to delay loading
        components that aren’t used during the initial render.

    19. How to pass data between react components?
       1. Parent Component to Child Component (using props)
            With the help of props, we can send data from a parent to a child component.
       2. Child Component to Parent Component (using callbacks)
            This one is a bit tricky. We follow the steps below:
                1. Create a callback in the parent component which takes in the data needed as a parameter.
                2. Pass this callback as a prop to the child component.
                3. Send data from the child component using the callback.

    20. What are Higher Order Components?
        Higher-Order Component(HOC) is a function that takes in a component and returns a new component.

    21. What are the different phases of the component lifecycle?
        There are four different phases in the lifecycle of React component. They are:
            1. Initialization: During this phase, React component will prepare by setting up the default props and
            initial state for the upcoming tough journey.
            2. Mounting: Mounting refers to putting the elements into the browser DOM. Since React uses VirtualDOM,
            the entire browser DOM which has been currently rendered would not be refreshed. This phase includes the
            lifecycle methods componentWillMount and componentDidMount.
            3. Updating: In this phase, a component will be updated when there is a change in the state or props of a
            component. This phase will have lifecycle methods like componentWillUpdate, shouldComponentUpdate, render,
            and componentDidUpdate.
            4. Unmounting: In this last phase of the component lifecycle, the component will be removed from the DOM
            or will be unmounted from the browser DOM. This phase will have the lifecycle method named
            componentWillUnmount

    22. What are the lifecycle methods of React?
        The various lifecycle methods are:
            1. constructor(): This method will be called when the component is initiated before anything has been done.
            It helps to set up the initial state and initial values.
            2. getDerivedStateFromProps(): This method will be called just before element(s) rendering in the DOM.
            It helps to set up the state object depending on the initial props. The getDerivedStateFromProps() method
            will have a state as an argument and it returns an object that made changes to the state. This will be the
            first method to be called on an updating of a component.
            3. render(): This method will output or re-render the HTML to the DOM with new changes. The render() method
            is an essential method and will be called always while the remaining methods are optional and will be called
            only if they are defined.
            4. componentDidMount(): This method will be called after the rendering of the component. Using this method,
            you can run statements that need the component to be already kept in the DOM.
            5. shouldComponentUpdate(): The Boolean value will be returned by this method which will specify whether
            React should proceed further with the rendering or not. The default value for this method will be True.
            6. getSnapshotBeforeUpdate(): This method will provide access for the props as well as for the state before
            the update. It is possible to check the previously present value before the update, even after the update.
            7. componentDidUpdate(): This method will be called after the component has been updated in the DOM.
            8. componentWillUnmount(): This method will be called when the component removal from the DOM is about to
            happen.

    23. Explain about types of Hooks in React?
    There are two types of Hooks in React. They are:
    1. Built-in Hooks: The built-in Hooks are divided into 2 parts as given below:
       Basic Hooks:
            1. useState(): This functional component is used to set and retrieve the state.
            2. useEffect(): It enables for performing the side effects in the functional components.
            3. useContext(): It is used for creating common data that is to be accessed by the components hierarchy
            without having to pass the props down to each level.
       Additional Hooks:
            1. useReducer() : It is used when there is a complex state logic that is having several sub-values or when
            the upcoming state is dependent on the previous state. It will also enable you to optimization of component
            performance that will trigger deeper updates as it is permitted to pass the dispatch down instead of
            callbacks.
            2. useMemo() : This will be used for recomputing the memoized value when there is a change in one of the
            dependencies. This optimization will help for avoiding expensive calculations on each render.
            3. useCallback() : This is useful while passing callbacks into the optimized child components and depends
            on the equality of reference for the prevention of unneeded renders.
            4. useImperativeHandle():  It will enable modifying the instance that will be passed with the ref object.
            5. useDebugValue(): It is used for displaying a label for custom hooks in React DevTools.
            6. useRef() : It will permit creating a reference to the DOM element directly within the functional component.
            7. useLayoutEffect(): It is used for the reading layout from the DOM and re-rendering synchronously.

    2. Custom Hooks: A custom Hook is basically a function of JavaScript. The Custom Hook working is similar to a regular
    function. The “use” at the beginning of the Custom Hook Name is required for React to understand that this is a custom
    Hook and also it will describe that this specific function follows the rules of Hooks. Moreover, developing custom
    Hooks will enable you for extracting component logic from within reusable functions

    24. Differentiate React Hooks vs Classes.
    React Hooks
        1. It is used in functional components of React.
        2. It will not require a declaration of any kind of constructor.
        3. It does not require the use of this keyword in state declaration or modification.
        4. It is easier to use because of the useState functionality.
        5. React Hooks can be helpful in implementing Redux and context API.

    Classes
        1. It is used in class-based components of React.
        2. It is necessary to declare the constructor inside the class component.
        3. Keyword this will be used in state declaration (this.state) and in modification (this.setState()).
        4. No specific function is available for helping us to access the state and its corresponding setState variable.
        5. Because of the long setup of state declarations, class states are generally not preferred.

    25. How does the performance of using Hooks will differ in comparison with the classes?
        React Hooks will avoid a lot of overheads such as the instance creation, binding of events, etc., that are
        present with classes.
        Hooks in React will result in smaller component trees since they will be avoiding the nesting that exists in
        HOCs (Higher Order Components) and will render props which result in less amount of work to be done by React

    26. What is React Router?
        React Router refers to the standard library used for routing in React. It permits us for building a single-page
        web application in React with navigation without even refreshing the page when the user navigates.

        The major components of React Router are given below:
            1. BrowserRouter: It is a router implementation that will make use of the HTML5 history API (pushState,
            popstate, and event replaceState) for keeping your UI to be in sync with the URL. It is the parent component
            useful in storing all other components.
            2. Routes: It is a newer component that has been introduced in the React v6 and an upgrade of the component.
            3. Route: It is considered to be a conditionally shown component and some UI will be rendered by this
            whenever there is a match between its path and the current URL.
            4. Link: It is useful in creating links to various routes and implementing navigation all over the
            application. It works similarly to the anchor tag in HTML

    27. Explain conditional rendering in React?
    There are different approaches for implementing conditional rendering in React. Some of them are:
        1. Using if-else conditional logic which is suitable for smaller as well as for medium-sized applications
        2. Using ternary operators, which takes away some amount of complication from if-else statements
        3. Using element variables, which will enable us to write cleaner code

    28. How to pass data between sibling components using React router?
    Passing data between sibling components of React is possible using React Router with the help of history.push and
    match.params.

    In the code given below, we have a Parent component AppDemo.js and have two Child Components HomePage and AboutPage.
    Everything is kept inside a Router by using React-router Route. It is also having a route for /about/{params} where
    we will pass the data.
    The HomePage is a functional component with a button. On button click, we are using
    props.history.push(‘/about/’ + data) to programmatically navigate into /about/data.
    Also, the functional component AboutPage will obtain the data passed by props.match.params.aboutId.

    29. How to perform automatic redirect after login?
    The react-router package will provide the component <Redirect> in React Router. Rendering of a <Redirect> component
    will navigate to a newer location. In the history stack, the current location will be overridden by the new location
    just like the server-side redirects.

    30. What are synthetic events in React?
    SyntheticEvent is a cross-browser wrapper around the browser's native event. Its API is same as the browser's
    native event, including stopPropagation() and preventDefault(), except the events work identically across all
    browsers.

    31. What is the difference between Shadow DOM and Virtual DOM?
        The Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components.
        The Virtual DOM is a concept implemented by libraries in JavaScript on top of browser APIs.

    32. What is React Fiber?
    Fiber is the new reconciliation engine or reimplementation of core algorithm in React v16.
    The goal of React Fiber is to increase its suitability for areas like animation, layout, gestures, ability to pause,
    abort, or reuse work and assign priority to different types of updates; and new concurrency primitives.

    33. What is the difference between createElement and cloneElement?
    JSX elements will be transpiled to React.createElement() functions to create React elements which are going to be
    used for the object representation of UI. Whereas cloneElement is used to clone an element and pass it new props.



    Ref forwarding is a technique for automatically passing a ref through a component to one of its children.
    This is typically not necessary for most components in the application.
    However, it can be useful for some kinds of components, especially in reusable component libraries.
    The most common scenarios are described below.
    example
    const FancyButton = React.forwardRef((props, ref) => (
        <button ref={ref} className="FancyButton">
            {props.children}
        </button>
    ));

    // You can now get a ref directly to the DOM button:
    const ref = React.createRef();
    <FancyButton ref={ref}>Click me!</FancyButton>;

 */