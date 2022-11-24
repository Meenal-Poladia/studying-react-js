/*

    Introducing error boundaries

    If we want to catch an error in JSX code then we cannot wrap it in try-catch. Instead in such a cases, we can build
    and utilize an error boundary.

    For this we will create a new component and name it error boundary.js . -> example 1
    This component is exclusively for handling errors.

    The error boundary component is a regular class-based component which implements the componentDidCatch lifecycle
    method. The componentDidCatch lifecycle method makes that class-based component an error boundary. If we want to
    build an error boundary then it can be built only in class based components.
    This lifecycle method will be triggered whenever an child component throws an error. We add a render method like
    we do for all components. Here, we return this.props.children because we want to wrap our error boundary component
    around components which should be protected by that component.
    We wrap this component around those which we feel can throw an error. It can be wrapped around more than one
    component.

    In the componentDidCatch() method we directly get an error object as a parameter.

    Error boundaries help us to ensure that our entire application does not crash when something goes wrong instead we
    could catch those errors and handle them elegantly.

    example 1
    class ErrorBoundary extends Component {
        constructor() {
            super();
            this.state = {
                hasError: false;
            }
        }
        componentDidCatch(error) {
            this.setState({hasError: true})
        }
    }

    class newComponent extends Component {
        render() {
            if(this.state.hasError) {
                return <p>Something went wrong</p>
            }
            return (
                //Normal JSX code
                <ErrorBoundary>
                    <User/>
                </ErrorBoundary>
            )
        }
    }
 */