/*

    Mounting

    Mounting means putting elements into the DOM. Mounting is the stage of rendering the JSX
    returned by the render method itself.

    These methods are called in the following order when an instance of a component is being
    created and inserted into the DOM:
        1. constructor / Initialisation
        2. getDerivedStateFromProps() / componentWillMount
        3. render()
        4. componentDidMount()

    1. Constructor / Initialisation
    In this phase, the developer has to define the props and initial state of the component
    this is generally done in the constructor of the component. The constructor for a React component is
    called before it is mounted.

    When implementing the constructor for a React.Component subclass, you should call super(props)
    before any other statement. Otherwise, this.props will be undefined in the constructor, which can
    lead to bugs.

    Typically, in React constructors are only used for two purposes:
        1. Initializing local state by assigning an object to this.state.
        2. Binding event handler methods to an instance.

Example of Constructor
class Clock extends React.Component {
	constructor(props)
	{
		// Calling the constructor of
		// Parent Class React.Component
		super(props);

		// Setting the initial state
		this.state = { date : new Date() };
	}
}


    2. getDerivedStateFromProps() / componentWillMount
    This function is invoked right before the component is mounted on the DOM i.e. this function
    gets invoked once before the render() function is executed for the first time.

    This is the natural place to set the state object based on the initial props.
    It takes state as an argument, and returns an object with changes to the state.

Example of getDerivedStateFromProps() / componentWillMount
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  static getDerivedStateFromProps(props, state) {
    return {favoritecolor: props.favcol };
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}

ReactDOM.render(<Header favcol="yellow"/>, document.getElementById('root'));


    3. render()
    The render() method is required, and is the method that actually outputs the HTML to the DOM.

    The render() function should be pure, meaning that it does not modify component state, it returns
    the same result each time it’s invoked, and it does not directly interact with the browser.

Example of render()
class Header extends React.Component {
  render() {
    return (
      <h1>This is the content of the Header component</h1>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));


    4. componentDidMount()
    ComponentDidMount() is invoked immediately after a component is mounted (inserted into the tree)
    i.e. this function gets invoked once after the render() function is executed for the first time.

    This is where you run statements that requires that the component is already placed in the DOM.
    If you need to load data from a remote endpoint, this is a good place to instantiate the network request.

Example of componentDidMount()
At first my favorite color is red, but give me a second, and it is yellow instead:
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));
 */