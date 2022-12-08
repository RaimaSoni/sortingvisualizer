// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./reducer";

// const store = configureStore(rootReducer);

// export default store;

import { createStore } from "redux";
import rootReducer from "./reducer";

const store = createStore(rootReducer);

export default store;

