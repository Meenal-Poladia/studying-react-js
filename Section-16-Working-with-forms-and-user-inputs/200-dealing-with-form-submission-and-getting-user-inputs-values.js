/*

    Dealing With Form Submission And Getting User Inputs Values

    There are various ways to store and manipulate the user input values:
        1. Using useRef hook
        2. Storing the value in useState

    While using <form> element we can submit the form even on pressing the enter key. We can attach the onSubmit
    handle on the <form> element. It is important to note that we need to add event.preventDefault on the
    onSubmit handler function.

    We use e.preventDefault because usually when the submit handler of a form is clicked, a http request is
    sent to the server however, our form is not attached to any specific server and is associated with a static
    server so to tell the browser to avoid sending the http request and do nothing. Refreshing the page would lead to
    restarting the entire page and losing its current state.

    If we want to execute validation on every keystroke then state and onChange handler is better than using
    a ref.

 */