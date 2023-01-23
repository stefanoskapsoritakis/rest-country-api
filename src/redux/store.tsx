import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import countryReducer from "./reducers/country";
import reduxThunk from "redux-thunk";
import { CountryType } from "../types";

const rootReducer = combineReducers({
  countries: countryReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type InitialState = {
  countries: {
    countriesData: CountryType[];
    isLoading: boolean;
    error: string;
    searchWord: string;
  };
};
const initialState: InitialState = {
  countries: {
    countriesData: [],
    isLoading: false,
    error: "",
    searchWord: "",
  },
};

const localStoragePos: string = "countries";
const middleware = [reduxThunk];

// Creating store with initialstate
const storeFactory = () => {
  let composeEnhancers = compose;

  
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );

  // Subscribing localstate
  store.subscribe(() => {
    const currentState = store.getState();
  });
  return store;
};
export default storeFactory;
