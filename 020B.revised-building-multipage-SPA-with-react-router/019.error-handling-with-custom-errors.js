/*

    Error handling with Custom Errors

    errorElement helps us to set an error page which we want to display whenever a route which is not listed is
    entered. If the errorElement is set on the parent route of if there is any route conflict in any of the nested
    paths then the error bubbles up to the parent path and the error page is displayed.

    errorElement can also be set separately for each nested child route if we want to show custom error.

    const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <Error/>,
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
              errorElement: <CustomError/>
              element: <Events/>,
              loader: eventLoader
            },
            {
              path: ":eventId",
              element: <EventDetail/>
            },
            {
              path: "new",
              element: <NewEvent/>
            },
            {
              path: ":eventId/edit",
              element: <EditEvent/>
            }
          ]
        },

      ]
    },
  ]);

 */