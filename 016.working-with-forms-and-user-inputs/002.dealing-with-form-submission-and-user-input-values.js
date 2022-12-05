/*

    Dealing with form submission and user input-values

    There are 2 main ways of fetching user inputs:
        1. Listening on every keystroke and storing the value is a state variable.
        2. Using ref to fetch the input once the user is done with typing in a value.
    To use ref and state we need to import useRef and useState from react. It is ideal to use only one of the
    two methods in the entire project.

    To capture the submission of the entire form we add an attribute of onSubmit on the form element. We also need to
    add event.preventDefault on the form submission handler so that the page is not refreshed which is a default
    javascript feature. This happens because a request is sent on which the website is hosted.

    When using useRef we get an object from which to get the value, we use the inputRef.current.value property to get
    the value.

    If we want to validate the input on every keystroke then we use the state whereas if we need to just validate the
    final input then ref is a better option.
    If we want to set the input to something then using state is again a good option. We can bind the state to the
    input using the value attribute.

    Setting the useRef.current.value = "", is not an ideal way as we are directly manipulating the DOM. React should be
    the only thing manipulating the DOM.

 */