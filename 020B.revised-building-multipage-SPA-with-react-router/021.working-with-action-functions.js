/*

    Working with action functions

    Using the action property we can send request to the backend from client side. When sending data to the backend
    from client side, it is important to note that we need to have the name property to the input element.
    The form element must be replaced by Form component of the react-router-dom. We need to set the method on the
    Form component to post as it goes to search for an action.

    The request object from where the action is dispatched receives an request object which gets the formData
    property.

    To see the data from formdata() we need to use the get method -> example 1

    example 1
    export const action = async ({request, params}) => {
    const data = await request.formData();

    const eventData = {
        title: data.get("title"),
        image: data.get("image"),
        date: data.get("date"),
        description: data.get("description"),
    };

    const response = await fetch("http://localhost:8080/events", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(eventData),
    })
    if(!response.ok) {
        throw json({
            message: "COuld not save event",
        },
        {
            status: 500
        })
    }
    return redirect("/events");
}

 */