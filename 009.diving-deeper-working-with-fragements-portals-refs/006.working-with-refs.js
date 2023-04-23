/*

    Working with refs

    refs are short form of references. They allow us to get access to other DOM elements and work with them.

    With refs, we can set up a connection between a HTML element which is being rendered in the end and our other
    JavaScript code. To create ref we use the useRef react hook.
    useRef is only usable inside of functional components. Initial value in ref is undefined.
    We use the special attribute ref on our JSX element on which we want to use the ref.

    To clear the value in the input we can use inputRef.current.value = "" so set it to empty.
 */