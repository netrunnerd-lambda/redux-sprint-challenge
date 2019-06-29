import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  deleteSmurf,
  fetchSmurfs
} from '../store/actions';

import { Smurf } from './Smurf';

class SmurfList extends Component {
  handleClick = (e, id) => {
    const DELETE = 'DELETE';

    switch (e.target.name) {
      case DELETE:
        return this.props.deleteSmurf(id);
      default:
        return;
    }
  };

  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <main className="smurfList">
        <h2>Village o' Smurfs</h2>
        {this.props.isFetching && <p>Loading...</p>}
        {this.props.smurfs.map(smurf =>
          <Smurf
            key={smurf.id}
            onClick={e => this.handleClick(e, smurf.id)}
            {...smurf}
          />
        )}
      </main>
    );
  }
}

const mapState = state => ({
  isFetching: state.fetchingSmurfs,
  smurfs: state.smurfs
});

export default connect(
  mapState,
  { deleteSmurf, fetchSmurfs }
)(SmurfList);
