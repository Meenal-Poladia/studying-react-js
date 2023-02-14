/*

    Whats So Complex About Forms

    Forms can actually be complex from a developer's point of view because forms and their inputs can assume a
    broad variety of different states.

    One or more inputs could be invalid or valid and these are only two states. However, it's even possible
    that you could have forms where the state is unknown because maybe you have some asynchronous validation
    where you need to send the request to a server behind the scenes to check something to find out if a
    certain value is available.

    There are 2 conditions in which we want to show that one or more inputs are invalid:
        1. Highlighting a single input-output specific error
        2. When the form cant be submitted or saved

    There are 3 ways in which the user input can be validated:
        1. When the form is submitted
            The issue with this method is that the error is highlighted only after the form is submitted, thus
            the user has to complete the form, later click on submit and if there is any error then go back to the
            error which is time consuming and may cause inconvenience

        2. When an input loses focus
            Here the user, is given feedback after entering data in each input thus, its only after each input
            is submitted it is then that the user gets to know whether the input is valid or not. In such cases,
            every keystroke validation is important.

        3. At every keystroke
            The downside for this is that even before entering anything in the form, the user gets to see a lot
            of errors because initially everything is invalid.
 */