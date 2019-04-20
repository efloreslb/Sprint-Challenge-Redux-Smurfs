import React from 'react';
import {connect} from 'react-redux';
import {postSmurf} from '../actions';

class AddSmurf extends React.Component {
   state = {
      newSmurf: {
         name: '',
         height: '',
         age: ''
      }
   }

   handleChange = e => {
      this.setState({
         ...this.state,
         newSmurf: {
            ...this.state.newSmurf,
            [e.target.name]: e.target.value
         }
      })
   }

   handleSubmit = e => {
      console.log(this.state.newSmurf)
      e.preventDefault();
      this.props.postSmurf(this.state.newSmurf);
      this.setState({
         newSmurf: {
            name: '',
            height: '',
            age: ''
         }
      })
   }

   render(){
      return (
         <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} value={this.state.newSmurf.name} name="name" placeholder="Name"/>
            <input onChange={this.handleChange} value={this.state.newSmurf.height} name="height" placeholder="Height"/>
            <input onChange={this.handleChange} value={this.state.newSmurf.age} name="age" placeholder="Age"/>
            <button type="submit">Add Smurf</button>
         </form>
      )
   }
}

const mapStateToProps = state => {
   return {
      addingSmurf: state.addingSmurf
   }
}

export default connect(mapStateToProps, {postSmurf})(AddSmurf);