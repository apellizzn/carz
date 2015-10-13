import React, {PropTypes} from 'react';
import {TextField, SelectField, Paper, FlatButton} from 'material-ui';

export default React.createClass({

  propTypes: {
    brands: PropTypes.array.isRequired,
    fuels: PropTypes.array.isRequired
  },

  render() {
    const {brands, fuels} = this.props;
    return (
      <Paper className="add-car">
        <form>
          <TextField hintText="Name" />
          <TextField
            hintText="Km"
            errorText={"not a number"}/>
          <TextField
            hintText="Price"
            errorText={"not a number"}/>
          <TextField
            hintText="Year"
            errorText={"not a number"}/>
          <SelectField
            floatingLabelText="Brand"
            valueMember="id"
            displayMember="name"
            menuItems={brands} />
          <SelectField
            floatingLabelText="Fuels"
            valueMember="id"
            displayMember="name"
            menuItems={fuels} />
        <FlatButton label="Publish" style={{ 'float': 'left'}} secondary={true}/>
        </form>
      </Paper>
    );
  }
});
