import {configureStore} from "@reduxjs/toolkit";


let sliceReduce;
const store = configureStore({
    reducer: {
        slice:sliceReduce,
    }
});

export default store;