//To create a store, we need to import the createStore
import {createStore} from 'redux';


//passing actions to reducer
const reducer = (state = 0, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + action.payload;
      case 'DECREMENT':
        return state - action.payload;
      default:
        return state;
    }
  };

const store  = createStore(reducer);
//we can use the subscribe method provided by the store to subscribe to the changes in the store as shown below
store.subscribe(()=>{
    console.log('current state',  store.getState());
})

//The only way to change the store is by dispatching actions.
store.dispatch({
    type: 'INCREMENT',
    payload:1
})

store.dispatch({
    type: 'INCREMENT',
    payload:5
})

store.dispatch({
    type: 'DECREMENT',
    payload:2
})