/*

    Testing asynchronous code

    findAllByRole returns a promise while getAllByRole returns the elements. using findAllByRole is useful when making
    a request as it awaits till we receive a promise. This method takes 3 arguments. -> example 1
    The first argument is the element name then the exact parameter adn lastly until what time the function needs to
    wait until received a response about the request

    Since findAllByRole returns a promise we can wrap the callback function in async and await.

    example 1
    const element = screen.findAllByRole("listItem", {exact: false}, {4})

    example 2
    import {render, screen} from "@testing-library/react";
    import Async from "./Async";

    describe("Async Component", () => {
        test("renders posts if request succeeds", async () => {
            render(<Async/>);
            const listItemElements = await screen.findAllByRole("listitem");
            expect(listItemElements).not.toHaveLength(0)
        })
    })

 */