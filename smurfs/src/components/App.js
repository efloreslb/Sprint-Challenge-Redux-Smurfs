import React, { Component } from 'react';
import './App.css';
import AddSmurf from './AddSmurf';

import {connect} from 'react-redux';
import {getSmurfs, deleteSmurf} from '../actions';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
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
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <AddSmurf />
        <ul>
          {this.props.smurfs.map((smurf, index) => (
            <li key={index}>{smurf.name}, {smurf.age}, {smurf.height}<div onClick={() => this.deleteSmurf(smurf.id)}>X</div></li>
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

export default connect(mapStateToProps, {getSmurfs, deleteSmurf})(App);
