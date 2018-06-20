import React from 'react';

class FilterFieldContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };
    this.toggleShowMenu = this.toggleShowMenu.bind(this);
  }

  toggleShowMenu() {
    this.setState(prevState => ({ showMenu: !prevState.counter }));
  }

  render() {
    return (
      <div>
        <div onClick={this.toggleShowMenu}>
          {this.props.title}
        </div>
        {
          this.state.showMenu &&
          <div>
            {this.props.options.map(option => <div>{option}</div>)}
          </div>
        }
      </div>
    );
  }
}

export default FilterFieldContainer;
