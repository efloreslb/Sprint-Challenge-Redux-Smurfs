import {
  FETCH_START, FETCH_SUCCESS, FETCH_FAILURE,
  POST_START, POST_SUCCESS, POST_FAILURE
} from '../actions';

const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...state,
        fetchingSmurfs: true,
        error: null
      }
    }
    case FETCH_SUCCESS: {
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload
      }
    }
    case FETCH_FAILURE: {
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      }
    }
    case POST_START: {
      return {
        ...state,
        addingSmurf: true,
        error: null
      }
    }
    case POST_SUCCESS: {
      return {
        ...state,
        addingSmurf: false,
        smurfs: action.payload
      }
    }
    case POST_FAILURE: {
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      }
    }
    default:
      return state;
  }
}