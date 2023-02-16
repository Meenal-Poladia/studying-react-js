/*

    Grouping tests together with test suites

    As the application becomes complex we will have dozens or maybe hundreds or thousands of tests and to organize and
    group those different tests, we often organize them into different testing suites.

    All the tests, belonging to one feature, or one component of your application, could be grouped into one testing
    suite and we can create such a testing suite, by using the global "describe" function.

    describe is a global method like test. It takes 2 arguments:
        1. The description of the category to which the test belongs.
        2. A callback function that takes the test case for 1 function or component.

    We can have such multiple test suites that have multiple test per suite.

    As the application grows it is a good practise to group our test cases.

    example 1
    import {render, screen} from "@testing-library/react";
    import Greeting from "./Greeting";

    describe("Greeting Component", () => {                                 //Test Suite
        test("renders Hello World as a text", () => {                      //Can have multiple such test cases
            //Arrange
            render(<Greeting/>)

            //Act
            //     ...nothing

            //Assert
            const helloWorldElement = screen.getByText("Hello world", {exact: false});
            expect(helloWorldElement).toBeInTheDocument()
        })
    })


 */