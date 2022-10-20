/*

    Listening to events and working with event handlers

    HTML button element is a more specific form of the HTML element, which is a more specific form of an element,
    which in turn is a more specific form of a node.

    If we click on the Element, for example, we actually will see that there are a bunch of events to which we can listen,
    for example, click, blur. For all these default events, there is a prop equivalent in React, which we can add to
    these built-in HTML elements to listen to these events.

    Instead of adding a listener as we would normally do in javascript, first we would select the element by id and
    then add the event listener on it which is an imperative process. However, in react we add an event listener
    in the JSX element.
    All the events are available in react in the form of special props which we attach on the element like we add
    attribute.
    All these event handler props, want a function as a value. The function passed as value can be an arrow function,
    function reference or function declaration.
    Avoid writing the logic of the function in JSX as it makes the code difficult to read and clumsy.

    example -
    const clickHandler = () => {}
    <button onClick={clickHandler}>Click Me</button>

    If we want to execute a particular function when the code is parsed then we call the function where we have passed
    the reference. The event name is written in camelCase.

     example -
    <button onClick={clickHandler()}>Click Me</button>

    It is a convention to name the function triggered on an event starting with or ending with the word handler.

 */
