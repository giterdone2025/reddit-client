import { configureStore } from '@reduxjs/toolkit';
import votesReducer from 'features/votes/votesSlice';

export default configureStore({
    reducer: {
        votes: votesReducer,
    },
});
