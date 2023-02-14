/*

    Defining and Using Routes

    React router DOM makes it very easy to register different routes and paths in the URL and rendering the
    component accordingly.

    Firstly, we import Route from react-router-dom. Route is a component that allows us to define a certain path
    and then render the react component that should be loaded when that path becomes active in the URL.

    To load components as pages we need to first register the page as Route. The route component takes a special prop
    which is the path that represents the URL to which we want to navigate the user. In the route component we should
    also specify the component that we want to render when the URL is visited. The component will only be displayed
    when the url is matched.

    To activate the react router and to make the other features and components work we import the BrowserRouter in the
    App.js component and wrap the </App> component with BrowserRouter component. Doing this will activate the route
    component and unlock the react router features. This activates only the path which have been defined in the route.

    It is a good practise to create a separate folder and include the pages to be rendered in that folder.
    It helps in code clarity and in locating the component.

    example -

    Adding in Index.js
    ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
            document.getElementById('root')
    );

 */