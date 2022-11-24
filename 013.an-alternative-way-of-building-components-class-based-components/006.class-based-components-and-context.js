/*

    Class based components and context

    The context consumer component can be used in both functional and class based component. Since it is used in
    JSX only it works for both.

    With use context, you can listen to multiple context in the same component by calling useContext multiple
    times and pointing at different contexts. This will not be possible with class based components, because there you
    can only connect a class based component to one context by adding a static property and then assigning a value to
    the context. With that we are tell React that this component should have access to the user's context
    but we can only set the static context type property.

    So it is all quite straightforward to use but a bit less flexible than in the functional component world.
    Of course we will not always need more than one context per component, often one context is enough but if we do
    need more contexts connected to one component, then this restriction can of course hurt.

 */