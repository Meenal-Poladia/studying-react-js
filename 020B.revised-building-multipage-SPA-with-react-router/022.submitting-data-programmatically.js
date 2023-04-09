/*

    Submitting Data Programmatically

    To send a request from the form component to a different route we can use the action property on Form component.
    The action property is needed only for triggering a route request for another route except for the route on which
    we have declared the action property on the route.

    example
    //Submitting the form for deleting an item
    import classes from './EventItem.module.css';
    import {Link, useSubmit} from "react-router-dom";

    function EventItem({ event }) {
        const submit = useSubmit();

      function startDeleteHandler() {
          const proceed = window.confirm("Are you sure?");
          if(proceed) {
            submit(null, {method: "DELETE"})
          }
      }

      return (
        <article className={classes.event}>
          <img src={event.image} alt={event.title} />
          <h1>{event.title}</h1>
          <time>{event.date}</time>
          <p>{event.description}</p>
          <menu className={classes.actions}>
            <Link to="edit">Edit</Link>
            <button onClick={startDeleteHandler}>Delete</button>
          </menu>
        </article>
      );
    }

    export default EventItem;

    //Changes in the route
    {
      index: true,
      element: <EventDetail/>,
      action: deleteEventAction
    },

    //Deleting through Action property from the component
    export const deleteEventAction = async({params, request}) => {
        const eventId = params.eventId;
        const response = await fetch("http://localhost:8080/events/" + eventId, {
            method: request.method,
        })
        if(!response.ok){
            throw json(
                {message: "Could not delete event"},
                {status: 500}
            )
        }
        return redirect("/events");
    }

 */