/*

    Handling form submission

    If a button, especially with type submit is pressed inside of a form, this overall form element will emit an event
    to which we can listen and that's the submit event.

    example -
    <form onSubmit={submitHandler}> </form>

    A part of this default browser behavior is that if we click on the button, the page reloads because the browser
    actually automatically sends a request whenever a form is submitted to the server which is hosting this webpage.

 */