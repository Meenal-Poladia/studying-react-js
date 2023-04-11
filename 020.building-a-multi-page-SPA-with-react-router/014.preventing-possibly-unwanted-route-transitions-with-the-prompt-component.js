/*

    Preventing possibly unwanted route transitions with the prompt component

    When we are trying to fill a form and we accidentally press the back button and then when we come back on the same
    page we realise that all our data in the form is lost. To avoid this we use prompt which asks us if we really want
    to go to another page.

    There are 2 things needed to implement this:
        1. The user starts working on the form, in other words the form gains focus.
        2. Showing a warning or alert when the user tries to leave the page after having started working on the
           form.

    To check if the form is active we can listen to the onFocus event where we trigger some function when the form gains
    focus. When the user tries to leave the form accidentally we can use the react DOM prompt component which
    watches when we navigate away. If a certain condition is met then it shows a warning before we leave.

    To enable prompt we need to wrap the component adjacent to the form -> example 1
    Prompt is a self closing component which is mounted before the element is typed. The prompt component takes 2
    attributes: when and message
        1. when - we can pass either true or false depending on the state set.
        2. message - returns a function which shows the string with the text we want to show to the user when he/she
           tries to leave the form. The message parameter gets a location object which stores the information about
           the page we are trying to go to.

    example 1
    <>
        <Prompt when={true} message = (location) =>  />
        <Card>
            <form>
            </form>
        </Card>
    </>

 */