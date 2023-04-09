/*

    Returning response from Action

    Just like we can return data from loaders similarly we can return data from actions as well. We can use the
    useAction hook to access the returned data from the action.

    example

    //Returning a response from Action
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
    if(response.status === 422) {
        return response;
    }

    //Using the returned data from action
    function EventForm({ method, event }) {
    const data = useActionData();

    const navigate = useNavigate();
    const navigation = useNavigation();

    const isSubmitting = navigation.state === "submitting";

 */