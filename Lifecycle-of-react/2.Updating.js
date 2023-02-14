/*

    Updating

    Updating is the phase where the states and props of a component are updated followed by some user
    events such as clicking, pressing a key on the keyboard, etc.
    A component is updated whenever there is a change in the component's state or props.

    The following are the descriptions of functions that are invoked at different points of Updating phase.

    1. getDerivedStateFromProps() / componentWillReceiveProps
    2. shouldComponentUpdate()
    3. render()
    4. getSnapshotBeforeUpdate()
    5. componentDidUpdate()

    The render() method is required and will always be called, the others are optional and will be
    called if you define them.

    1.getDerivedStateFromProps() / componentWillReceiveProps
    This is the first method that is called when a component gets updated.
    This is still the natural place to set the state object based on the initial props.

    getDerivedStateFromProps is invoked right before calling the render method, both on the initial mount and on
    subsequent updates. It should return an object to update the state, or null to update nothing.

Example of getDerivedStateFromProps() / componentWillReceiveProps
If the component gets updated, the getDerivedStateFromProps() method is called:
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  static getDerivedStateFromProps(props, state) {
    return {favoritecolor: props.favcol };
  }
  changeColor = () => {
    this.setState({favoritecolor: "blue"});
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

ReactDOM.render(<Header favcol="yellow"/>, document.getElementById('root'));


    2. shouldComponentUpdate()
    This lifecycle method is rarely used.
    In the shouldComponentUpdate() method you can return a Boolean value that specifies whether React
    should continue with the rendering or not. The default value is true.

    shouldComponentUpdate() is invoked before rendering an already mounted component when new props or state
    are being received. If returned false then the subsequent steps of rendering will not be carried out.
    This function can’t be used in the case of forceUpdate().

    Returning false does not prevent child components from re-rendering when their state changes.

    It is always better to compare the this.props with next.props and this.state with next.state and return
    false later to tell react that the update can be skipped.

Example of shouldComponentUpdate():
Stop the component from rendering at any update:
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  shouldComponentUpdate() {
    return false;
  }
  changeColor = () => {
    this.setState({favoritecolor: "blue"});
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));


    3. render()
    The render() method is of course called when a component gets updated, it has to re-render the
    HTML to the DOM, with the new changes.


    4. getSnapshotBeforeUpdate()
    In the getSnapshotBeforeUpdate() method you have access to the props and state before the update, meaning
    that even after the update, you can check what the values were before the update.

    If the getSnapshotBeforeUpdate() method is present, you should also include the componentDidUpdate() method,
    otherwise you will get an error.

     It enables your component to capture some information from the DOM (e.g. scroll position) before it is
     potentially changed. Any value returned by this lifecycle method will be passed as a parameter
     to componentDidUpdate().

Example
Use the getSnapshotBeforeUpdate() method to find out what the state object looked like before the update:
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
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
    "Before the update, the favorite was " + prevState.favoritecolor;
  }
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
    "The updated favorite is " + this.state.favoritecolor;
  }
  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));


    5. componentDidUpdate
    componentDidUpdate() will not be invoked if shouldComponentUpdate() returns false.
    This function is invoked after the component is rendered i.e. this function gets invoked once after the
    render() function is executed after the updating of State or Props.

    If your component implements the getSnapshotBeforeUpdate() lifecycle (which is rare), the value it
    returns will be passed as a third “snapshot” parameter to componentDidUpdate().
     -> componentDidUpdate(prevProps, prevState, snapshot)
 */