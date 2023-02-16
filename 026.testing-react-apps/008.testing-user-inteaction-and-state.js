/*

    Testing user interaction and state

    It is important to test all scenarios or else we wouldn't know if the other scenario was failing due to some
    change.

    When we need to act we can use another feature from the testing library to stimulate the event. User event is an
    object that helps us trigger user events on this virtual screen. on the userEvent we have access to various event
    like click, onMouseHover, onChange, etc. For using any event we need to first select the element and later attach
    the type of event. To select the element we can use the method getByText or getByRole which selects the only button
    on the screen.

    example - 1
    import {render, screen} from "@testing-library/react";
    import Greeting from "./Greeting";
    import userEvent from "@testing-library/user-event";

    describe("Greeting Component", () => {
        test("renders Hello World as a text", () => {
            //Arrange
            render(<Greeting/>)
            //Act
            //     ...nothing
            //Assert
            const helloWorldElement = screen.getByText("Hello world", {exact: false});
            expect(helloWorldElement).toBeInTheDocument()
        })

        test("renders good to see you as text if button was not clicked", () => {
            render(<Greeting/>);
            const greetingText = screen.getByText("Its good to see you", {exact: false});
            expect(greetingText).toBeInTheDocument();
        })

        test("renders Changed if the button was clicked", () => {
            render(<Greeting/>);
            //Act
            const buttonElement = screen.getByRole("button");
            userEvent.click(buttonElement);
            const greetingText = screen.getByText("changed", {exact: false});
            expect(greetingText).toBeInTheDocument();
        })

        test("does not renders good to see if the button was clicked", () => {
            render(<Greeting/>);
            //Act
            const buttonElement = screen.getByRole("button");
            userEvent.click(buttonElement);
            const greetingText = screen.queryByText("Its good to see you", {exact: false});
            expect(greetingText).toBeNull();
        })
    })


 */