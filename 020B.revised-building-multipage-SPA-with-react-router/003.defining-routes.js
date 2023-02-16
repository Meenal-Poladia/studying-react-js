/*

    Defining Routes

    createBrowserRouter function is a function provided by react router dom package which allows us to define our
    routes that we wanna support in this application. We pass an array of routes which we want to use in the
    application. We add properties to the route object which we can configure to the routes. We add the path property
    for which the route should be active. It is the path after the domain.

    The RouterProvider component tells React that this router should be rendered or loaded to the screen. The
    RouterProvider takes a router prop which takes the value we generated from createBrowserRouter.

    example - 1
    import {createBrowserRouter, RouterProvider} from "react-router-dom";
    import Home from "./pages/Home";

    function App() {
        const router = createBrowserRouter([
            {
                path: "/",
                element: <Home/>
            }
        ]);
        
      return (
          <RouterProvider router={router}/>
      );
    }

    export default App;

 */