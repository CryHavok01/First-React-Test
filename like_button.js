'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { likes: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({likes: this.state.likes +1});
  }
    
  render() {
    
    return (
        <div>
      <button onClick={this.handleClick}>
        Like
      </button>
      <p> Likes: {this.state.likes}</p>
      </div>
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
