import React, { Component } from 'react';
import './App.css';

import {connect} from 'react-redux';
import {getSmurfs, deleteSmurf} from '../actions';

class SmurfVillage extends Component {
  componentDidMount() {
    this.props.getSmurfs();
    console.log(this.props.smurfs);
  }

  deleteSmurf = id => {
    this.props.deleteSmurf(id);
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.props.smurfs.map((smurf, index) => (
            <li key={index}>
              <p>{smurf.name}, {smurf.age}, {smurf.height}</p>
              <button onClick={() => this.deleteSmurf(smurf.id)} className="delete">x</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  }
}

export default connect(mapStateToProps, {getSmurfs, deleteSmurf})(SmurfVillage);
