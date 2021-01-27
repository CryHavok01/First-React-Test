'use strict';

const e = React.createElement;

class NameSwitcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Josh' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
      let newName = this.state.name == 'Josh' ? 'Frankie' : 'Josh';
    this.setState({name: newName});
  }
    
  render() {
    
    return (
        <div>
      <button onClick={this.handleClick}>
        Change Name?
      </button>
      <p> My name is {this.state.name}</p>
      </div>
    );
  }
}

const domContainer = document.querySelector('#name_switcher');
ReactDOM.render(e(NameSwitcher), domContainer);
