/*

    Writing our first test

    It is a good practise to create a different file for testing the Greetings component.

    We write our test cases using the 3 A's:
        1. Arrange: We want to render the component which we want to test. Set up the test data, test condition and
        additional environment.
        2. Act: Run the logic that should be tested (e.g: execute the function)
        3. Assert: Compare execution results and expected results.

    If we want to test an element with a particular text and if we find that element then we can say that our test
    cases have succeeded. We can import screen, which gives us access to a virtual screen of the virtual DOM, which was
    rendered and we can use that screen to then find elements on that screen. There are various function available on
    the screen like the get functions, find functions and the query functions.
    Get functions throw an error when if the element is not found.
    Find functions will return a promise.

    getByText takes the string or expression as the first argument and the exact as the second argument. If we declare
    exact as false then case will not be assessed. By default exact is true. getByText returns an element if it
    receives a match or it will throw an error if it does not receive an element.

    To check our results we have the globally available expect function to which we can pass our testing value which
    can be  a number, string, DOM element or a node.
    toBeInTheDocument checks if the result is in the document.

    example - 1
    import {render, screen} from "@testing-library/react";
    import Greeting from "./Greeting";

    test("renders Hello World as a text", () => {
        //Arrange
        render(<Greeting/>)

        //Act
        //     ...nothing

        //Assert
        const helloWorldElement = screen.getByText("Hello world", {exact: false});
        expect(helloWorldElement).toBeInTheDocument()
    })

 */