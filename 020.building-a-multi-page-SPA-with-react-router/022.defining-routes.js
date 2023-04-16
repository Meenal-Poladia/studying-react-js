/*

    Defining routes

    createBrowserRouter allows us to define our routes that we want to support in this application. createBrowserRouter
    takes an array of objects in which each object represents one route. In the object we can define various
    properties of the route. These route objects take a couple of properties with which we configure the routes.

    The path property is a key property which defines the path for which the route will be active. The path is the
    part after the domain. The path "/" represents the domain itself.
    The second important key is element which loads the component when the path is activated. -> example 1

    To use the route we need to store the value of createBrowserRouter in a variable.

    For react to tell browser that we need to use the routes defined we use the RouterProvider component. The
    RouterProvider takes a router property which takes the variable created by the createBrowserRouter.

    example 1
    import {createBrowserRouter} from "react-router-dom";

    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage/>
        }
    ])

    function App(){
        return(
            <div></div>
        )
    }

    example 2
    function App() {
      return (
          <RouterProvider router={router}/>
      );
    }

 */