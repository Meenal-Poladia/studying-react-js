/*

    Using Programmatic Imperative Navigation

    To programmatically navigate the user we can use the useRouter to get access of the router object and then extend
    this router object to extract information about the route.

    Apart from the query property we also have the push method which behaves exactly like the Link tag and helps to
    push a new page onto the stack of pages. If we do not want to use the Link element then we use this method.

    example -
    const router  = useRouter();
    router.push("/ + props.id");   //Dynamic route generation using id.

 */