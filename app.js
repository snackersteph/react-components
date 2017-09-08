// TODO
var GroceryList = (props) => (

  <div>
    <h2>My Grocery List</h2>
    <ul>
      {props.list.map(thing => 
        <GroceryListItem item={thing} />
      )}
    </ul>
  </div>

);


class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      done: false,
      hover: false
    };
  }

  onListItemClick() {
    console.log(this);
    this.setState({
      done: !this.state.done
    });
  }

  onListItemHover() {
    console.log('Does this work?')
    this.setState({
      hover: true
    })
  }

  onListItemLeave() {
    this.setState({
      hover: false
    })
  }

  render() {

    var style = {
      textDecoration: this.state.done? 'line-through' : 'none',
      fontWeight: this.state.hover? 700 : 100 
    };

    return (
      <li style={style} onMouseLeave={this.onListItemLeave.bind(this)} onMouseEnter={this.onListItemHover.bind(this)} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
    );
  }

}





ReactDOM.render(<GroceryList list={['one', 'two', 'three']}/>, document.getElementById('app'));