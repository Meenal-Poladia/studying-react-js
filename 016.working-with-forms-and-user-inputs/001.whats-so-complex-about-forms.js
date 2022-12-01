/*

    Whats so complex about forms

    Forms and their inputs can assume a broad variety of different states as one or more inputs can be valid or invalid
    or all inputs can be valid. These are the two states which our application can process. These state might also
    sometimes represent the overall state of the form.

    When a form and its inputs are invalid we might want to output input specific error messages and highlight the
    problematic inputs. We also want to ensure that when there is a form there with an error the form cant be submitted
    or saved. While if the inputs are valid then we want to make sure that the form is saved.

    There are different ways in which a form can be validated:
        1. When the form is submitted. Here we let the user type and only when there is an error we show that something
        is wrong. We do not give any instructions beforehand to the user and thus the feedback might seemed to be
        coming a bit late.

        2. When an input has lost focus after the user stops typing. This method allows the user to enter a valid value
        before warning the user. We show the error once the user has finished typing in the input. This is very
        useful for untouched forms.

        3. On every keystroke when the user is typing the input. The downside of this is that when the user comes to
        fill the form, the form will be filled with errors as the initial state is nothing which is an error in itself.
        If this is applied on invalid inputs, it has the potential of providing more direct feedback.

 */