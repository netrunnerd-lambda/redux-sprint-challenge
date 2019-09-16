import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addSmurf } from '../store/actions';

class SmurfForm extends Component {
  state = {
    smurf: {
      name: '',
      age: '',
      height: ''
    }
  };

  handleChange = e => this.setState({
    smurf: {
      ...this.state.smurf,
      [e.target.name]: e.target.value
    }
  });

  handleSubmit = e => {
    e.preventDefault();

    const { name, age, height } = this.state.smurf;

    if (!name || !age || !height)
      return;

    const smurf = {
      name: '',
      age: '',
      height: ''
    };

    this.props.addSmurf(this.state.smurf);

    this.setState({ smurf });
  };

  renderError = err => (
    <p>{err}</p>
  );

  render() {
    return (
      <form className="smurfForm" onSubmit={this.handleSubmit}>
        <input
          autoFocus
          className="big"
          name="name"
          onChange={this.handleChange}
          placeholder="name"
          type="text"
          value={this.state.smurf.name}
        />
        <input
          className="small"
          name="age"
          onChange={this.handleChange}
          placeholder="age"
          type="text"
          value={this.state.smurf.age}
        />
        <input
          className="small"
          name="height"
          onChange={this.handleChange}
          placeholder="height"
          type="text"
          value={this.state.smurf.height}
        />
        <button type="submit">
          ＋
        </button>
        {this.props.error && this.renderError(this.props.error)}
      </form>
    );
  }
}


const mapState = state => ({
  error: state.error
});

export default connect(
  mapState,
  { addSmurf }
)(SmurfForm);
