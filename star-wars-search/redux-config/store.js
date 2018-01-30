const reducer = Redux.combineReducers({ characters, lastSearch });

const store = Redux.createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});
