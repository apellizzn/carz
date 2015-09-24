import React, {PropTypes} from 'react';
import {List, ListItem, Checkbox, FlatButton} from 'material-ui';
export default React.createClass({

  propTypes: {
    source: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    onToggle: PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      hidden: true
    };
  },

  render() {
    let { source, title, onToggle } = this.props;
    let { hidden } = this.state;
    let displayValue = hidden ? 'none' : 'block';
    return (
      <div>
        <h3>
          {title}
          <FlatButton style={{ 'float': 'right'}} primary={true} onClick={this.toggle} label={ hidden ? '+' : '-'}/>
        </h3>
        <List style={{ display: displayValue }}>
          {source.map(el =>
            <ListItem
              leftCheckbox={<Checkbox name="brand" onCheck={onToggle} value={el.id}/>}
              primaryText={el.name}
            />
          )}
        </List>
      </div>
    );
  },

  toggle() {
    this.setState({ hidden: !this.state.hidden });
  }

});
