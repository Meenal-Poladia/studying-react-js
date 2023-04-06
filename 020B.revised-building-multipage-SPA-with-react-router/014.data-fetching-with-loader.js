/*

    Data fetching with loader

    React router version 6 provides a property called loader which helps to execute the function in the component
    just when the component is about to be rendered. Any value returned from the loader function is directly
    received in the component or any other component in the route.

    example
     const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      children: [
        {
          path: "/",
          index: true,
          element: <Home/>,
        },
        {
          path: "events",
          element: <EventsRoots/>,
          children: [
            {
              path: "",
              index: true,
              element: <Events/>,
              loader: async() => {
                const response = await fetch('http://localhost:8080/events');

                if (!response.ok) {
                  //Do something
                } else {
                  const resData = await response.json();
                  return resData.events;
                }
              }
            },
            {
              path: ":eventId",
              element: <EventDetail/>
            },
          ]
        },
      ]
    },
  ]);

 */