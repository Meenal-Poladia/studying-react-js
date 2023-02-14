/*

    Handling Loading And Data States

    It is a good practise to show users a loading spinner or give them some signal that data is loading and its on
    the way.
    We can do this via useState. Initially, we can set isLoading to false and later change it to true when the
    async function is called and finally when the data is received it can be set to false again.
    Once the states are set. We use it to show or hide the Movies component only when the state is true.

    It is important for the user to know which state they currently are in the application:
    For example: Are the movies loading, movies have loaded and there are no movies to display.
    
 */