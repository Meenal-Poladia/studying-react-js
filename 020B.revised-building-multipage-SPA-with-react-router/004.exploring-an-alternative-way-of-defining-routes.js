/*

    Exploring an alternative way of defining routes

    An alternative way of defining routes in using the JSX code.

    example - 1
    import {createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from "react-router-dom";
    import Home from "./pages/Home";
    import Products from "./pages/Products";

    function App() {
        const routesFromElements = createRoutesFromElements(
            <Route>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<Products/>}/>
            </Route>
        );

        const router = createBrowserRouter(routesFromElements)

      return (
          <RouterProvider router={router}/>
      );
    }

    export default App;

 */