import React, {PropTypes} from 'react';
import {List, ListItem, Checkbox, FlatButton} from 'material-ui';
import _ from 'lodash';

export default React.createClass({

  propTypes: {
    applied: PropTypes.array.isRequired,
    source: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    onToggle: PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      hidden: false
    };
  },

  render() {
    let { applied, source, title, onToggle } = this.props;
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
            <ListItem key={el.id}
              leftCheckbox={<Checkbox checked={ _.includes(applied, el.id) }name="brand" onCheck={onToggle} value={el.id + ''}/>}
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
