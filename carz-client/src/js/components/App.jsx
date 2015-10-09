import React  from 'react';

export default React.createClass({

  render() {
    return (
      <div className="main-page">
      <h1 onClick={this.goHome}>Car shop Online</h1>
      <p>
        Below is a list of tasks you can implement to better grasp the patterns behind Flux.<br />
        Most features are left unimplemented with clues to guide you on the learning process.
      </p>
        {this.props.children}
      </div>
    );
  }
});
