const reducer = Redux.combineReducers({ characters, lastSearch });
const enhancer = Redux.applyMiddleware(ReduxThunk.default.withExtraArgument({ api: API }));

const store = Redux.createStore(reducer, enhancer);

store.subscribe(() => {
  console.log(store.getState());
});
