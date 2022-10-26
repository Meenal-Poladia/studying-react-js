/*

    Lifting the State up

    It is quite common that we generate or fetch data in a component but we might not consume that data in that
    component. Instead, we need it in another component which is a sibling component of that component.

    In such a scenario we use the closest parent component which has a direct or indirect access to both involved
    components to pass the data. Thus, we lift up the state and pass it on the child component.

    Lifting the state up basically means that it is about moving data from a child component to some parent component
    to either use it there or to then pass it down to some other child component.

 */