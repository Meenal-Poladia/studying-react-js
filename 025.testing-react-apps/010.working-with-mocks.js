/*

    Working with Mocks

    What we practised in 009. about making a fetch request is not a ideal scenario as we are making a request and as
    our application grows we might start making many such requests which might hamper our servers. Also, we are testing
    so we do not want to send any extra requests unless we were developing an app. Because if we are making a post
    request there are chances that we are changing something on the server.

    Here we are testing if the the fetch request has sent the request and has received a response successfully. But
    fetch is provider by the browser and so we do not need to test its utility.
    Instead we build a mock function that overrides the actual function. Jest as a testing tool has a functionality of
    build in support to mock such functions.

    We can use the window.fetch which helps us to mock a function and resolve a function when it is called. This
    fetch function resolves to a value which we get from our Async useEffect value.

     window.fetch.mockResolvedValueOnce({
            json: async () => []
        });

    We get an object with the json that returns a promise which we can store in an array or object and pass the
    desired way in which we get the response. We test the value to something which the request actually gets.
    With this code we are overriding our actual fetch request with a mock request.

    Using this method we are stimulating success request and not sending an actual API request so we are not hammering
    the API, sending unnecessary requests.


    example - 1
    import {render, screen} from "@testing-library/react";
    import Async from "./Async";

    describe("Async Component", () => {
        test("renders posts if request succeeds", async () => {
            window.fetch = jest.fn()
            window.fetch.mockResolvedValueOnce({
                json: async () => [{
                    id: "p1",
                    title: "First post"
                }]
            });
            render(<Async/>);
            const listItemElements = await screen.findAllByRole("listitem");
            expect(listItemElements).not.toHaveLength(0)
        })
    })

 */