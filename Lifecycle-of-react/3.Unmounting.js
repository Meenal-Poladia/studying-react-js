/*

    Unmounting

    This is the final phase of the lifecycle of the component that is the phase of unmounting the
    component from the DOM.

    React has only one built-in method that gets called when a component is unmounted:
    1. componentWillUnmount()

    1. componentWillUnmount()
    componentWillUnmount() is invoked immediately before a component is unmounted and destroyed.
    Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests,
    or cleaning up any subscriptions that were created in componentDidMount().

    You should not call setState() in componentWillUnmount() because the component will never be re-rendered.
    Once a component instance is unmounted, it will never be mounted again.


Example of componentWillUnmount():
Click the button to delete the header:
class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: true};
  }
  delHeader = () => {
    this.setState({show: false});
  }
  render() {
    let myheader;
    if (this.state.show) {
      myheader = <Child />;
    };
    return (
      <div>
      {myheader}
      <button type="button" onClick={this.delHeader}>Delete Header</button>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }
  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}

ReactDOM.render(<Container />, document.getElementById('root'));
 */